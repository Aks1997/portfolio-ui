import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginAuthguardService } from '../services/guards/login-authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login', 
    component: LoginPageComponent,
    canActivate: [LoginAuthguardService]
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
    canActivate: [LoginAuthguardService]
  },
  {
    path: ':id',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PortFolioRoutingModule { }
