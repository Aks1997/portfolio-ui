import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserMaintainanceService } from 'src/app/portfolio-page/Models/Services/user-maintainance.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthguardService implements CanActivate{

  constructor(private userMaintainanceService: UserMaintainanceService, private route: Router) { }

  canActivate(){
    if(this.userMaintainanceService.user.isLoggedIn){
      this.route.navigate(['']);
      return false;
    }
    return true;
  }
}
