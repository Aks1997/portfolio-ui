import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticateUserService } from '../../authenticate-user.service';
import { ProgressbarHandlerService } from '../progressbar/progressbar-handler.service';
import { SnackbarHandlerService } from '../snackbar/snackbar-handler.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registerForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  mouseoverLogin: boolean=false;

  constructor(private authenticateUserService: AuthenticateUserService,
    private progressbarHandlerService: ProgressbarHandlerService, private snackbarHandlerService: SnackbarHandlerService) { }

  ngOnInit() {
    this.userName= new FormControl(null, Validators.required);
    this.password= new FormControl(null, Validators.required);

    this.registerForm= new FormGroup({
      userName: this.userName,
      password: this.password
    })
  }

  register(formValue){
    if(this.registerForm.valid){
      this.progressbarHandlerService.showProgressBar();
      let userName= btoa(formValue.userName);
      let password= btoa(formValue.password);
      this.authenticateUserService.registerUser({userName: userName, password: password})
        .subscribe(response=>{
          this.progressbarHandlerService.hideProgressBar();
          this.snackbarHandlerService.openSnackBar("User Successfully Registered");
        });
    }
  }

}
