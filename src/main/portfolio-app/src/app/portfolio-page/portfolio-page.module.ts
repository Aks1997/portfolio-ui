import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { PortFolioRoutingModule } from './portfolio-page-routing.module';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent, ProgressbarComponent, SnackbarComponent],
  imports: [
    CommonModule,
    PortFolioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProgressbarComponent]
})
export class PortfolioPageModule { }
