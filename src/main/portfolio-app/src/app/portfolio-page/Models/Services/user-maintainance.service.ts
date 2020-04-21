import { Injectable } from '@angular/core';
import { User } from '../User';
import { CommonConstants } from '../../../common/common-constants';
import { Router } from '@angular/router';
import { ToolbarHandlerService } from '../../utility-components/toolbar-template/toolbar-handler.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMaintainanceService {

  user: User=new User(false);
  userStatusChanged= new BehaviorSubject<boolean>(this.user.isLoggedIn);

  constructor(private route: Router) { 
    if(localStorage.getItem(CommonConstants.ACCESS_TOKEN)!=null){
      this.user.isLoggedIn= true;
      this.user.access_token=localStorage.getItem(CommonConstants.ACCESS_TOKEN);
      this.user.userId= localStorage.getItem(CommonConstants.USERID);
    }
  }

  createUser(access_token: string, userId: string){
    localStorage.setItem(CommonConstants.ACCESS_TOKEN, access_token);
    localStorage.setItem(CommonConstants.USERID, userId);

    this.user.isLoggedIn= true;
    this.user.access_token=access_token;
    this.user.userId= userId;
    this.route.navigate(["/",this.getUserId()]);
    this.userStatusChangeEmitter();
  }

  loggedOutUser(){
    localStorage.removeItem(CommonConstants.ACCESS_TOKEN);
    localStorage.removeItem(CommonConstants.USERID);

    this.user.isLoggedIn= false;
    this.user.access_token= null;
    this.user.userId= null;
    this.route.navigate(["/portfolio/login"]);
    this.userStatusChangeEmitter();
  }

  isUserLoggedIn(){
    return this.user.isLoggedIn;
  }

  getUserId(){
    return this.user.userId;
  }

  userStatusChangeEmitter(){
    this.userStatusChanged.next(this.user.isLoggedIn);
  }
}
