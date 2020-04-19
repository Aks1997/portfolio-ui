import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material'

import { LoginPageComponent } from './login-page/login-page.component';
import { PortFolioRoutingModule } from './portfolio-page-routing.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarTemplateComponent } from './utility-components/toolbar-template/toolbar-template.component';



@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, ProgressbarComponent, SnackbarComponent, DashboardComponent, ToolbarTemplateComponent],
  imports: [
    CommonModule,
    PortFolioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [ProgressbarComponent]
})
export class PortfolioPageModule { }
