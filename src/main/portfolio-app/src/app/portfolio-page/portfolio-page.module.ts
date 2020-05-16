import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { PortFolioRoutingModule } from './portfolio-page-routing.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { UtilityFormModule } from '../utility-form/utility-form.module';
import { ProjectSectionComponent } from './project-section/project-section.component';


@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, DashboardComponent, HomePageComponent, ProfileSectionComponent, ProjectSectionComponent],
  imports: [
    CommonModule,
    PortFolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilitiesModule,
    UtilityFormModule
  ],
  exports: []
})
export class PortfolioPageModule { }
