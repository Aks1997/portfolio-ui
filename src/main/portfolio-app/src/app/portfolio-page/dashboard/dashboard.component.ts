import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserMaintainanceService } from '../Models/Services/user-maintainance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedinUserId: boolean;
  

  constructor(private route: ActivatedRoute, private userMaintainanceService: UserMaintainanceService) { 
  }

  ngOnInit() {
    this.isLoggedinUserId= this.route.snapshot.params.id==this.userMaintainanceService.getUserId();
    this.route.params.subscribe(param=>{
      this.isLoggedinUserId= param.id==this.userMaintainanceService.getUserId();
    })
  }
}
