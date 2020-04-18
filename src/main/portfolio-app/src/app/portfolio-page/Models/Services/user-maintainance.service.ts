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
      this.user.userName= localStorage.getItem(CommonConstants.USERNAME);
    }
  }

  createUser(access_token: string, userName: string){
    localStorage.setItem(CommonConstants.ACCESS_TOKEN, access_token);
    localStorage.setItem(CommonConstants.USERNAME, userName);

    this.user.isLoggedIn= true;
    this.user.access_token=access_token;
    this.user.userName= userName;
  }

  loggedOutUser(){
    localStorage.removeItem(CommonConstants.ACCESS_TOKEN);
    localStorage.removeItem(CommonConstants.USERNAME);

    this.user.isLoggedIn= false;
    this.user.access_token= null;
    this.user.userName= null;
  }
}
