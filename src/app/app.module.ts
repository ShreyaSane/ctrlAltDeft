import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';



import { AppComponent } from './app.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ToolBarComponentComponent } from './tool-bar-component/tool-bar-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';



import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardboxComponent } from './cardbox/cardbox.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { UserMsgComponent } from './chat-box/user-msg/user-msg.component';
import { SystemReplyComponent } from './chat-box/system-reply/system-reply.component';
import {MatDividerModule} from '@angular/material/divider';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    ToolBarComponentComponent,
    AppointmentComponent,
    CardboxComponent,
    SchedulerComponent,
    ChatBoxComponent,
    UserMsgComponent,
    SystemReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
