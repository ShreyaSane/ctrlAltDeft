import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { MatDialog } from '@angular/material/dialog';



interface Notification {
  id: number;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
constructor(private breakpointObserver: BreakpointObserver , private snackBar: MatSnackBar , private dialog: MatDialog ){}

// Define a property to hold the selected language
selectedLanguage: string = 'English'; // Default to English
notifications: Notification[] = [
  { id: 1, message: 'Notification 1' },
  { id: 2, message: 'Notification 2' },
  { id: 3, message: 'Notification 3' }
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
      this.snackBar.open(message, 'Dismiss', {
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
}
