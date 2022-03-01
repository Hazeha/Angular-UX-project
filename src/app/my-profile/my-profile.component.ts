import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/user.service';
import { InMemoryService } from '../_services/in-memory.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';
import {PresetService} from '../_services/preset.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['../_styles/styles.css', './my-profile.component.css', '../_styles/button.css']
})
export class MyProfileComponent implements OnInit {
  constructor(
    private userout: LoginService,
    private ab: InMemoryService,
    private router: Router,
    private tokenService: TokenStorageService,
    private presetService: PresetService)
  { }
  userData: any = {
    username: this.tokenService.getUser().username,
    userId: this.tokenService.getUser().id,
    email: this.tokenService.getUser().email,
    presets: '2',
    airflow: null,
    zone_id: null
  };
  preset: any;
  getPresets(): void{
    this.presetService.getPreset(this.userData.userId).subscribe( data => {
      this.preset = data;
      console.log(this.preset[0]);
      this.userData.airflow = this.preset[0].airflow;
      this.userData.zone_id = this.preset[0].zone_id;
    });
  }
  ngOnInit(): void {
    this.getPresets();
  }
  logout() {
    this.router.navigate(['']);
    this.tokenService.signOut();
  }
  // PresetsByUid(id) {
  //   if (this.authfire.auth.currentUser) {
  //     id = this.authfire.auth.currentUser.uid;
  //     this.ab.getbyId(id).subscribe(
  //       (data) => {
  //         this.userData = data;
  //         console.log(this.userData);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
}

