import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Utils } from 'src/app/network/utils';
import { ProgressbarHandlerService } from './progressbar-handler.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @ViewChild("progressBar", {static: true}) progressBar: ElementRef;
  loaderUri: string;

  constructor(private progressbarHandlerService: ProgressbarHandlerService) {    
    this.loaderUri= "assets/loader.gif";
  }

  ngOnInit() {
    this.progressbarHandlerService.progressBarSubject.subscribe(progressBarVisible=>{
      this.progressVisibility(progressBarVisible);
    });
  }

  progressVisibility(progressBarVisible){
    if(progressBarVisible){
      this.progressBar.nativeElement.style.display="block";
    }else{
      this.progressBar.nativeElement.style.display="none";
    }
  }

}
