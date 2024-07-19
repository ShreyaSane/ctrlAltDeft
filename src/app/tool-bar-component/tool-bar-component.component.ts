import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponentComponent } from '../profile-component/profile-component.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface Notification {
  id: number;
  message: string;
}

@Component({
  selector: 'app-tool-bar-component',
  templateUrl: './tool-bar-component.component.html',
  styleUrls: ['./tool-bar-component.component.css']
})
export class ToolBarComponentComponent implements OnInit {

  @Output() dateChange = new EventEmitter<Date>();
  constructor(private breakpointObserver: BreakpointObserver , private snackBar: MatSnackBar , private dialog: MatDialog ){}

  ngOnInit(): void {
  }


// Define a property to hold the selected language
selectedLanguage: string = 'English'; // Default to English
userName = 'John Doe';
healthProgress = 75; // Example health progress value

notifications: Notification[] = [
  { id: 1, message: 'Notification 1' },
  { id: 2, message: 'New message from your doctor' },
  { id: 3, message: 'Your appointment is confirmed' }
  // Add more notifications as needed
];
// Method to toggle between English and French
toggleLanguage(language: string) {
  this.selectedLanguage = language;
  console.log('Selected language:', this.selectedLanguage);
}

showNotification() {

  let message = this.notifications.map(notification => notification.message).join('\n');
  this.snackBar.open(message, 'Dismiss', {
    duration: 5000, // Duration in milliseconds (5 seconds in this example)
    verticalPosition: 'bottom', // Position of the snackbar
    horizontalPosition: 'center' // Position of the snackbar
  });
}

// Method to hide notification (if needed)
hideNotification(notificationId: number) {
  const index = this.notifications.findIndex(notification => notification.id === notificationId);
    if (index !== -1) {
      // Remove the notification from the array
      this.notifications.splice(index, 1);

      // Update the snackbar with remaining notifications
      let message = this.notifications.map(notification => notification.message).join('\n');
      this.snackBar.open(message + " Seen", 'Dismiss', {
        duration: 5000, // Duration in milliseconds (5 seconds in this example)
        verticalPosition: 'bottom', // Position of the snackbar
        horizontalPosition: 'center' // Position of the snackbar
      });
    }
}

getNotificationCount(): number {
  return this.notifications.length;
}

openProfileDialog() {
  const dialogRef = this.dialog.open(ProfileComponentComponent, {
    width: '400px', // Set the width of the dialog
    data: { name: 'User Name', email: 'user@example.com' } // Example initial data
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    // Logic to handle dialog close (e.g., update profile)
  });
}

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  openAppointmentDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate) {
      this.dateChange.emit(selectedDate);
    }
  }

}
