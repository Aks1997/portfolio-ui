import { Injectable } from '@angular/core';
import { FormElementBaseModel } from '../form-element-base-model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TextFieldModel } from '../templates/models/textfield-model';
import { TextAreaModel } from '../templates/models/textarea-model';
import { DropdownModel } from '../templates/models/dropdown-model';
import { AutocompleteModel } from '../templates/models/autocomplete-mode';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(fields: FormElementBaseModel<any>[]){
    let group: any={};

    fields.forEach(element=>{
      group[element.key]= element.required ? new FormControl(element.value || '', 
      Validators.required) : new FormControl(element.value || '');
    });

    return new FormGroup(group);
  }

  toFormElements(attribute){
    if(attribute.type==="util-textfield"){
      return new TextFieldModel({key: attribute.key, label: attribute.label, value: attribute.value,
        required: attribute.required, viewMode: attribute.viewmode, type: attribute.type, isLink: attribute.isLink});
    }else if(attribute.type==="util-textarea"){
      return new TextAreaModel({key: attribute.key, label: attribute.label, value: attribute.value,
        required: attribute.required, viewMode: attribute.viewmode, type: attribute.type});
    }else if(attribute.type==="util-dropdown"){
      return new DropdownModel({key: attribute.key, label: attribute.label, value: attribute.value,
        required: attribute.required, viewMode: attribute.viewmode, type: attribute.type,
        options: attribute.options});
    }else if(attribute.type==="util-autocomplete"){
      return new AutocompleteModel({key: attribute.key, label: attribute.label, value: attribute.value,
        required: attribute.required, viewMode: attribute.viewmode, type: attribute.type,
        options: attribute.options});
    }
  }
}
