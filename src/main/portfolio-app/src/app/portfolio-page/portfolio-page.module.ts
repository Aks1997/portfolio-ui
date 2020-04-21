import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule, MatToolbarModule, MatIconModule, MatMenuModule} from '@angular/material'

import { LoginPageComponent } from './login-page/login-page.component';
import { PortFolioRoutingModule } from './portfolio-page-routing.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';


@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, DashboardComponent, HomePageComponent, ProfileSectionComponent],
  imports: [
    CommonModule,
    PortFolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: []
})
export class PortfolioPageModule { }
