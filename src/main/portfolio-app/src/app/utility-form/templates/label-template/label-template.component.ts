import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../../form-element-base-model';

@Component({
  selector: 'app-label-template',
  templateUrl: './label-template.component.html',
  styleUrls: ['./label-template.component.css']
})
export class LabelTemplateComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
