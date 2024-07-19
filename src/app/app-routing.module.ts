import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { ConnectWithFamilyComponent } from './connect-with-family/connect-with-family.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: MaindashboardComponent},
  {path: 'contactfamily', component:ConnectWithFamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
