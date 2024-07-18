import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.css']
})
export class CardboxComponent implements OnInit {
  @ViewChild('doctorDialog') doctorDialog: TemplateRef<any>;

  doctors = [
    { id: 1, name: 'Dr. John Smith', experience: 10 },
    { id: 2, name: 'Dr. Jane Doe', experience: 8 },
    { id: 3, name: 'Dr. Alice Johnson', experience: 12 }
  ];

  selectedDoctor = this.doctors[0];
    doctorDropdownVisible = false;

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

  openDoctorPopup(doctorId: number): void {
    this.dialog.open(this.doctorDialog, {
      data: { doctorId: doctorId }
    });
  }

  onDoctorChange(event: any): void {
    this.selectedDoctor = event.value;
    this.doctorDropdownVisible = false;
  }

  toggleDoctorDropdown(): void {
    this.doctorDropdownVisible = !this.doctorDropdownVisible;
  }

  onDoctorSelect(doctor: any): void {
    this.selectedDoctor = doctor;
  }

}
