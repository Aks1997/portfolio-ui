import { Component, OnInit } from '@angular/core';

import { AuthenticateUserService } from '../../authenticate-user.service';
import { UserMaintainanceService } from '../Models/Services/user-maintainance.service';
import { CommonConstants } from 'src/app/common/common-constants';
import { ProgressbarHandlerService } from 'src/app/utilities/progressbar/progressbar-handler.service';

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
        this.userMaintainanceService.createUser(result[CommonConstants.ACCESS_TOKEN], result[CommonConstants.USERID]);
        this.progressbarHandlerService.hideProgressBar();
      });
  }

}
