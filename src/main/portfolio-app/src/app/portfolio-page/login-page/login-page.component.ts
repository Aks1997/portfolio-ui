import { Component, OnInit } from '@angular/core';

import { AuthenticateUserService } from '../../authenticate-user.service';
import { ProgressbarHandlerService } from '../progressbar/progressbar-handler.service';
import { UserMaintainanceService } from '../Models/Services/user-maintainance.service';
import { CommonConstants } from 'src/app/common/common-constants';

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
    private progressbarHandlerService: ProgressbarHandlerService, private userMaintainanceService: UserMaintainanceService) { }

  ngOnInit() {
  }

  login(formValue){
    this.progressbarHandlerService.showProgressBar();
    this.authenticateUserService.loginUser(formValue.userName, formValue.password)
      .subscribe(result=>{
        this.userMaintainanceService.createUser(result[CommonConstants.ACCESS_TOKEN], result[CommonConstants.USERNAME]);
        this.progressbarHandlerService.hideProgressBar();
      });
  }

}
