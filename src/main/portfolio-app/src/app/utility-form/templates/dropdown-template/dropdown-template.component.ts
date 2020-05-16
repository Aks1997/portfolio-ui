import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../../form-element-base-model';

@Component({
  selector: 'app-dropdown-template',
  templateUrl: './dropdown-template.component.html',
  styleUrls: ['./dropdown-template.component.css']
})
export class DropdownTemplateComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  @Input() editableMode: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

}
