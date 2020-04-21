import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarHandlerService {

  private progressbarVisible = false;
  public progressBarSubject = new BehaviorSubject<boolean>(this.progressbarVisible);
  
  constructor() { }

  showProgressBar(){
    this.progressbarVisible= true;
    this.progressBarSubject.next(this.progressbarVisible);
  }

  hideProgressBar(){
    this.progressbarVisible= false;
    this.progressBarSubject.next(this.progressbarVisible);
  }

  toggleProgressBar(){
    this.progressbarVisible= !this.progressbarVisible
    this.progressBarSubject.next(this.progressbarVisible);
  }
}
