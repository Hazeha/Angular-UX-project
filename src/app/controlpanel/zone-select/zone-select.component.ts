import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckInService } from '../../_services/check-in.service';
import { InMemoryService } from '../../_services/in-memory.service';
import { PresetService } from '../../_services/preset.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ControlpanelComponent } from '../controlpanel.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-zone-select',
  templateUrl: './zone-select.component.html',
  styleUrls: ['./zone-select.component.css', '../../_styles/button.css']
})
export class ZoneSelectComponent implements OnInit {
  /** Two Way Properties */
  @Input() position: any;
  @Output() positionChange = new EventEmitter<object>();

  /** Properties */
  panelOpenState = false;
  rooms: any;
  zones: any;
  seats: any;
  currentZone: any;
  currentRoom: any;
  currentZoneId: any;
  userId: number;
  preset: any;
  constructor(
    private checkIn: CheckInService,
    private presetService: PresetService,
    private inmemory: InMemoryService,
    private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<ControlpanelComponent>,
    private router: Router
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['cp/fanSetting']);
  }
  ngOnInit(): void {
    this.getRooms();
    if (this.tokenStorage.getToken()) {
      this.userId = this.tokenStorage.getUser().id;
    }
    this.getPreset();
  }
  /** Methods */
  getRooms() {
    this.checkIn.getRooms()
      .subscribe(
        data => {
          this.rooms = data;
          console.log(this.rooms);
        },
        error => {
        });
  }
  setRoom(id) {
    this.currentRoom = id;
    this.inmemory.room = id;
    console.log(this.currentRoom, 'set as current room');
    this.getZones();
    this.getSeats();
  }
  getZones() {
    this.checkIn.getZones(this.currentRoom)
      .subscribe(
        data => {
          this.zones = data;
          console.log(this.zones);
        },
        error => {
        });
  }
  getSeats() {
    this.checkIn.getSeats(this.currentRoom).subscribe(data => {
      this.seats = data;
      console.log(this.seats);
    },
      error => {
        console.log('fail at getSeat');
      });
  }
  setLocalZone(i) {
    this.currentZoneId = i;
    console.log(this.currentZoneId, 'set as local current Zone');

  }
  setZone(id, localId) {
    this.currentZone = id;
    this.inmemory.zone = id;
    this.currentZoneId = localId;

    console.log(this.currentZone, 'set as current Zone');
    this.positionChange.emit(this.position);

    this.updatePreset(this.currentZone, this.userId, this.currentRoom);
  }
  getPreset() {
    this.presetService.getPreset(this.userId).subscribe(data => {
      this.preset = data;
      console.log(this.preset);
      this.position.currentZone = this.preset.zone_id;
      console.log(this.position.currentZone);
    },
      error => {
        console.log('fail at get preset');
      });
  }
  updatePreset(climateID, userID, roomID) {
    const data = {
      zone_id: climateID,
      room_id: roomID
    };
    this.presetService.putPresets(userID, data).subscribe(response => { console.log(data, 'updated'); });
    this.inmemory.zone = data.zone_id;
  }
}
