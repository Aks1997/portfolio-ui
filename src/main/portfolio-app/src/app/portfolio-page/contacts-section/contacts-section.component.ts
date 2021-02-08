import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-section',
  templateUrl: './contacts-section.component.html',
  styleUrls: ['./contacts-section.component.css']
})
export class ContactsSectionComponent implements OnInit {

  @Input() isLoggedinUserId: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
