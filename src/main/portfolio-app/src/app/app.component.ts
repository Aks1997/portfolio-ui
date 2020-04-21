import { Component, OnInit, OnChanges } from '@angular/core';
import { UserMaintainanceService } from './portfolio-page/Models/Services/user-maintainance.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnchorModel } from './utilities/utility-models/anchor-model';
import { MenuModel } from './utilities/utility-models/menu-model';
import { MenuItemModel } from './utilities/utility-models/menu-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-app';
  anchors: AnchorModel[]=[];
  menu: MenuModel;
  menuItems: MenuItemModel[]=[];
  pageHeading: string="";

  constructor(private userMaintainanceService: UserMaintainanceService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router){
    iconRegistry.addSvgIcon('settings',sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/menu.svg'));
    iconRegistry.addSvgIcon('logout',sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/logout.svg'));
  }

  ngOnInit() {
    this.createToolbarAnchorsAndMenu();

    this.userMaintainanceService.userStatusChanged.subscribe(status=>{
      this.createToolbarAnchorsAndMenu();
    })
  }

  homeIconClicked(){
    this.router.navigate(['']);
  }

  createToolbarAnchorsAndMenu(){
    this.anchors=[];
    this.menuItems=[];
    this.menu=null;
    if(this.userMaintainanceService.isUserLoggedIn()){
      this.anchors.push(
        new AnchorModel("My Portfolio", ()=>{
          this.router.navigate(['/',this.userMaintainanceService.getUserId()]);
        }, "util-anchor")
      )

      this.menuItems.push(
        new MenuItemModel("LogOut", "logout",()=>{
          this.userMaintainanceService.loggedOutUser();
        })
      )
    }else{
      this.menuItems.push(
        new MenuItemModel("Register", "",()=>{
          this.router.navigate(['/portfolio/register']);
        })
      )
      this.menuItems.push(
        new MenuItemModel("LogIn", "",()=>{
          this.router.navigate(['/portfolio/login']);
        })
      )
    }

    if(this.menuItems.length>0){
      this.menu= new MenuModel("settings",this.menuItems);
    }
  }
}
