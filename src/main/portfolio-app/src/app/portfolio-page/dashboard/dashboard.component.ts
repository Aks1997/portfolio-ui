import { Component, OnInit } from '@angular/core';
import { ButtonModel } from '../utility-components/utility-models/button-model';
import { AnchorModel } from '../utility-components/utility-models/anchor-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
}
