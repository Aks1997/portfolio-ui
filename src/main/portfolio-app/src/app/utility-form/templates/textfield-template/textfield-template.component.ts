import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../../form-element-base-model';

@Component({
  selector: 'app-textfield-template',
  templateUrl: './textfield-template.component.html',
  styleUrls: ['./textfield-template.component.css']
})
export class TextfieldTemplateComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  @Input() editableMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  get getControl() { return this.form.controls[this.field.key]; }
}
