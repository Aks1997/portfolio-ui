import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../../form-element-base-model';

@Component({
  selector: 'app-textarea-template',
  templateUrl: './textarea-template.component.html',
  styleUrls: ['./textarea-template.component.css']
})
export class TextareaTemplateComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  @Input() editableMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
