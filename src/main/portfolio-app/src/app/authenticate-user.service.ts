import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { requestorApi, commonUrls } from './network/api-end-points'; 
@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  private loginUrl: string;
  private registerUrl: string;
  constructor(private restangular: Restangular) { 
    this.loginUrl= requestorApi.getRestUrl(commonUrls.loginUrl);
    this.registerUrl= requestorApi.getRestUrl(commonUrls.registerUrl);
  }

  loginUser(userName: string, pass: string){
    return this.restangular.one(this.loginUrl).get({},{"Auth": "Basic "+btoa(userName+":"+pass)});
  }

  registerUser(formFields){
    return this.restangular.all(this.registerUrl).post(formFields);
  }
}
