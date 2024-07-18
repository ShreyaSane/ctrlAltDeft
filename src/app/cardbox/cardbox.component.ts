import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.css']
})
export class CardboxComponent implements OnInit {
  userName = 'John Doe';
  healthProgress = 75; // Example health progress value

  constructor(private dialog: MatDialog ){}

  ngOnInit(): void {
  }

  

  openAppointmentDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
