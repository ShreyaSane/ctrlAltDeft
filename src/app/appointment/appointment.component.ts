import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentForm: FormGroup;

  ngOnInit(): void {
    
  }

  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    private fb: FormBuilder
  ) {
    this.appointmentForm = this.fb.group({
      doctor: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  save(): void {
    console.log('Appointment Scheduled:', this.appointmentForm.value);
    this.dialogRef.close(this.appointmentForm.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
