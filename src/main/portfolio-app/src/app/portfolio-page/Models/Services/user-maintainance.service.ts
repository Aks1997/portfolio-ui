import { Injectable } from '@angular/core';
import { User } from '../User';
import { CommonConstants } from '../../../common/common-constants';

@Injectable({
  providedIn: 'root'
})
export class UserMaintainanceService {

  user: User;
  constructor() { 
    this.user= new User(false);
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
  }

  loggedOutUser(){
    localStorage.removeItem(CommonConstants.ACCESS_TOKEN);
    localStorage.removeItem(CommonConstants.USERID);

    this.user.isLoggedIn= false;
    this.user.access_token= null;
    this.user.userId= null;
  }
}
