import { Component, OnInit } from '@angular/core';

import { AuthenticateUserService } from '../../authenticate-user.service';
import { ProgressbarHandlerService } from '../progressbar/progressbar-handler.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName: string;
  password: string;
  mouseoverLogin: boolean=false;
  constructor(private authenticateUserService: AuthenticateUserService,
    private progressbarHandlerService: ProgressbarHandlerService) { }

  ngOnInit() {
  }

  login(formValue){
    this.progressbarHandlerService.showProgressBar();
    this.authenticateUserService.loginUser(formValue.userName, formValue.password)
      .subscribe(result=>{
        this.progressbarHandlerService.hideProgressBar();
      });
  }

}
