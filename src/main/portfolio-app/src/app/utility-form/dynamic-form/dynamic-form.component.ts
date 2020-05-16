import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormElementBaseModel } from '../form-element-base-model';
import { FormControlService } from '../services/form-control.service';
import { FormGroup } from '@angular/forms';
import { SnackbarHandlerService } from 'src/app/utilities/snackbar/snackbar-handler.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() fields: FormElementBaseModel<any>[];
  @Input() isLoggedinUserId: boolean;
  form: FormGroup;
  @Output() formData= new EventEmitter();
  editableMode: boolean;

  constructor(private formControlService: FormControlService, 
    private snackbarHandlerService: SnackbarHandlerService) { 
    this.editableMode= false;
  }
  ngOnChanges() {
    
  }

  ngOnInit() {
    this.form= this.formControlService.toFormGroup(this.fields);
  }

  submitForm(){
    if(this.form.valid){
      this.changeEditableMode(false);
      this.formData.emit(this.form);
    }else{
      this.snackbarHandlerService.openSnackBar("Fill Valid Details");
    }
  }

  changeEditableMode(value){
    this.editableMode=value;
  }
}
