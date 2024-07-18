import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  profileForm: FormGroup; // Define FormGroup

  constructor(
    public dialogRef: MatDialogRef<ProfileComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    // Initialize form controls using FormBuilder
    this.profileForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]]
    });
  }

  // Method to save profile changes and close the dialog
  save(): void {
    // Example logic to save profile changes
    console.log('Save Profile:', this.profileForm.value);
    this.dialogRef.close();
  }

  // Method to close the dialog without saving changes
  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
