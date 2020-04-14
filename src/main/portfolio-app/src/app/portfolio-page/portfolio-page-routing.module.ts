import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginPageComponent 
  },
  {
    path: 'register',
    component: RegistrationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PortFolioRoutingModule { }
