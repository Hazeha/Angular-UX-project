import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const roomUrl = 'https://mentalshowerbackend.ndrejr.dk/api/room';
const zoneByRoomUrl = 'https://mentalshowerbackend.ndrejr.dk/api/zone';
const seatByZoneUrl = 'https://mentalshowerbackend.ndrejr.dk/api/seat';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(private conn: HttpClient) { }

  /** Rooms */
  getRooms() {
    return this.conn.get(roomUrl);
  }
  /** Zones */
  getZones(roomID) {
    return this.conn.get(`${zoneByRoomUrl}/${roomID}`, roomID);
  }
  /** Chairs */
  getSeats(zoneID) {
    return this.conn.get(`${seatByZoneUrl}/${zoneID}`, zoneID);
  }
  /** User */
  getUser() {
    return 'guest';
  }
  /** Preset */
  getPreset() {
    return 'preset';
  }

}
