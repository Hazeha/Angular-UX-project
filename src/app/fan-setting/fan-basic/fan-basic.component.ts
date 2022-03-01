import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { faSnowflake, faSun, faThumbsUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PresetService } from '../../_services/preset.service';
import { ShepherdService } from 'angular-shepherd';
import { TokenStorageService } from '../../_services/token-storage.service';
import { InMemoryService } from '../../_services/in-memory.service';

@Component({
    selector: 'app-fan-basic',
    templateUrl: './fan-basic.component.html',
    styleUrls: ['../../_styles/styles.css',
        './fan-basic.component.css'
    ]
})
export class FanBasicComponent implements OnInit, AfterViewInit {
    cold = faSnowflake;
    warm = faSun;
    good = faThumbsUp;
    question = faQuestionCircle;
    user: any;
    currentFan;
    selectedZone: number;
    preset: any;
    currentAir: number;
    constructor(
        public dialog: MatDialog,
        private presetService: PresetService,
        private shepherdService: ShepherdService,
        private tokenStorage: TokenStorageService,
        private inMemory: InMemoryService
    ) { }

    /* Dialog method */
    coldClicked(parameter): void {
        this.currentFan = parameter;
        let settingType;
        /* Switch to determine what setting has been clicked */
        switch (this.currentFan) {
            case 'coldSetting':
                settingType = 'Cold';
                this.updatePreset(this.user, 80);
                this.currentAir = 80;
                break;
            case 'goodSetting':
                settingType = 'Good';
                this.updatePreset(this.user, 0);
                this.currentAir = 0;
                break;
            case 'warmSetting':
                settingType = 'Warm';
                this.updatePreset(this.user, 20);
                this.currentAir = 20;
                break;
        }
        /* Refer to the dialog */
        const dialogRef = this.dialog.open(ColdDialogComponent, {
            width: '80%',
            height: 'fit-content',
            hasBackdrop: true,
            panelClass: ['dialogClass'],
            data: { settings: settingType }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    getPreset(id): void {
        this.presetService.getPreset(id).subscribe(data => {
            this.preset = data;
            this.currentAir = this.preset[0].airflow;
            console.log(this.preset);
        });
    }
    updatePreset(userID, airValue) {
        this.preset.airflow = airValue;
        const data = {
            airflow: airValue
        };
        this.presetService.putPresets(userID, data).subscribe(response => { console.log(data); });
    }

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
                title: 'Cold',
                text: ['If you are feeling cold use this setting. It will slow down the ventilation speed so it does not feel too cold'],
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
                title: 'Good',
                text: ['If you are feeling okay and do not need any changes done to the ventilation this is the settings for you. it will keep the ventilation at current settings'],
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
                title: 'Warm',
                text: ['If you are feeling warm/hot use this setting. It will increase the ventilation speed. More fresh air will be pushed around the room at a higher speed.'],
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

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.user = this.tokenStorage.getUser().id;
            console.log(this.tokenStorage.getUser());
        }
        this.getPreset(this.user);
        this.selectedZone = this.inMemory.zone;
    }
}


/* Dialog component */
@Component({
    selector: 'app-dialog-cold',
    template: `<h2>You clicked that you are feeling <span class="{{data.settings}}">{{data.settings}}</span>.</h2>
    <p>The system will take care of any changes to the ventilation unit.</p>
    <p>You may not feel a change immediately</p>
    <button class="buttonGeneral" mat-button (click)="onNoClick()">Close</button>
`,
    styleUrls: ['fan-basic.component.css', '../../_styles/button.css']
})
export class ColdDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<FanBasicComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { settings: string }) {

    }
    onNoClick(): void {
        this.dialogRef.close();
    }

}
