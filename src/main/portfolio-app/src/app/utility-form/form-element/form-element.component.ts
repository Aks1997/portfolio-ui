import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../form-element-base-model';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  @Input() editableMode: boolean;

  constructor() { }

  ngOnInit() {
  }
}
