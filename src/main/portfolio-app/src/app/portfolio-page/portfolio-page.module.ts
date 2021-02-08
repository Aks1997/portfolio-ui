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
import { ProjectTemplateComponent } from './project-section/project-template/project-template.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ContactsSectionComponent } from './contacts-section/contacts-section.component';


@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, DashboardComponent, HomePageComponent, ProfileSectionComponent, ProjectSectionComponent, ProjectTemplateComponent, SkillSectionComponent, ContactsSectionComponent],
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
