import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
    faFan,
    faGraduationCap,
    faArrowAltCircleRight,
    faChair,
    faUser,
    faCalendarAlt,
    faAddressCard,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../_services/user.service';
import { ShepherdService } from 'angular-shepherd';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['../_styles/styles.css', './index.component.css'
    ]
})
export class IndexComponent implements OnInit, AfterViewInit {
    fan = faFan;
    chair = faChair;
    cap = faGraduationCap;
    arrow = faArrowAltCircleRight;
    user = faUser;
    calender = faCalendarAlt;
    contact = faAddressCard;
    question = faQuestionCircle;

  username = 'Guest';
  constructor(private loginuser: LoginService,
              private shepherdService: ShepherdService,
              private tokenStorage: TokenStorageService) { }

    /* Tour method. */
    ngAfterViewInit() {
        this.shepherdService.defaultStepOptions = {
            scrollTo: false,
            cancelIcon: {
                enabled: true
            }
        };
        this.shepherdService.modal = true;
        this.shepherdService.confirmCancel = false;
        this.shepherdService.addSteps([
            {
                id: 'intro',
                attachTo: {
                    element: '.first-element',
                    on: 'bottom'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'Next',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'Check In',
                text: ['At check in you can select what room you are in and what climate zone'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            },
            {
                id: 'intro',
                attachTo: {
                    element: '.second-element',
                    on: 'bottom'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'Next',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'Fan Settings',
                text: ['At fan settings you can choose the ventilation speed'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            },
            {
                id: 'intro',
                attachTo: {
                    element: '.third-element',
                    on: 'top'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'Next',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'Learning',
                text: ['In learning you can learn a bit more about this app'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            },
            {
                id: 'intro',
                attachTo: {
                    element: '.fourth-element',
                    on: 'top'
                },
                buttons: [
                    {
                        classes: 'shepherd-button-primary',
                        text: 'End Tour',
                        type: 'next'
                    }
                ],
                cancelIcon: {
                    enabled: true
                },
                classes: 'tour custom-class-name-2',
                highlightClass: 'highlight',
                scrollTo: false,
                title: 'Profile',
                text: ['In profile you can change your personal settings if you are logged in'],
                when: {
                    show: () => {
                        console.log('show step');
                    },
                    hide: () => {
                        console.log('hide step');
                    }
                }
            }
        ]);
    }
    /* Method to start the tour, click questionmark! */
    tourStart() {
        this.shepherdService.start();
    }
    ngOnInit() {
      if (this.tokenStorage.getToken()){
        this.username = this.tokenStorage.getUser().username;
      }
        //    this.personsname = this.authfire.auth.currentUser.displayName;
    }

}
