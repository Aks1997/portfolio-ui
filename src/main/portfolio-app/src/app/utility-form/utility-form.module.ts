import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormElementComponent } from './form-element/form-element.component';
import { TextfieldTemplateComponent } from './templates/textfield-template/textfield-template.component';
import { LabelTemplateComponent } from './templates/label-template/label-template.component';
import { DropdownTemplateComponent } from './templates/dropdown-template/dropdown-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { TextareaTemplateComponent } from './templates/textarea-template/textarea-template.component';
import { AutocompleteTemplateComponent } from './templates/autocomplete-template/autocomplete-template.component';



@NgModule({
  declarations: [DynamicFormComponent, FormElementComponent, TextfieldTemplateComponent, LabelTemplateComponent, DropdownTemplateComponent, TextareaTemplateComponent, AutocompleteTemplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports:[DynamicFormComponent]
})
export class UtilityFormModule { }
