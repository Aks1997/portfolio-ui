import { Component, OnInit, Input, Output } from '@angular/core';
import { ButtonModel } from '../utility-models/button-model';
import { AnchorModel } from '../utility-models/anchor-model';
import { MenuModel } from '../utility-models/menu-model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Utils } from 'src/app/network/utils';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-template',
  templateUrl: './toolbar-template.component.html',
  styleUrls: ['./toolbar-template.component.css']
})
export class ToolbarTemplateComponent implements OnInit {

  @Input() pageButtons: ButtonModel[];
  @Input() pageHeading: string;
  @Input() anchorElements: AnchorModel[];
  @Input() menuButton: MenuModel;
  @Output() homeIconClicked: EventEmitter<any>=new EventEmitter();
  homeIcon: string="home";
  isActive: boolean=true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(this.homeIcon,sanitizer.bypassSecurityTrustResourceUrl('assets/svgs/home.svg'));
  }

  ngOnInit() {
  }

  homeIconHandler(){
    this.homeIconClicked.emit();
  }
}
