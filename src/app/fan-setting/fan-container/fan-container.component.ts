import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-fan-container',
  templateUrl: './fan-container.component.html',
  styleUrls: ['./fan-container.component.css']
})
export class FanContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
