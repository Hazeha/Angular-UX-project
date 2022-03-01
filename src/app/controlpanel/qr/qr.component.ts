import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ControlpanelComponent} from '../controlpanel.component';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css', '../../_styles/button.css']
})
export class QrComponent implements OnInit {
  panelOpenState = false;

  availableDevices: MediaDeviceInfo[];
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: any;
  deviceSelected: string;
  deviceCurrent: MediaDeviceInfo;
  formatsEnabled: any;
  torchAvailable$: any;
  torchEnabled: boolean;
  tryHarder: boolean;
  constructor(
    public dialogRef: MatDialogRef<ControlpanelComponent>
  ) { }
  onNoClick(): void{
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  /** Methods */
  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
  }

  onDeviceSelectChange(selected: string) {
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }

  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }


  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };
    this.deviceCurrent = this.availableDevices[0];
    // this.dialog.open(AppInfoDialogComponent, { data });
  }

  onTorchCompatible(isCompatible: boolean): void {
    // this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }
}
