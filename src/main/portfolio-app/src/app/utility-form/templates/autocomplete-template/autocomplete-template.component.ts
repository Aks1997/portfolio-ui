import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElementBaseModel } from '../../form-element-base-model';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-template',
  templateUrl: './autocomplete-template.component.html',
  styleUrls: ['./autocomplete-template.component.css']
})
export class AutocompleteTemplateComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FormElementBaseModel<any>;
  @Input() editableMode: boolean;
  filteredOptions: Observable<string[]>;
  options: string[]=[];
  
  constructor() { }

  ngOnInit() {
    this.options= this.field.options.map(value=>{
      return value.value;
    })

    this.filteredOptions = this.form.controls[this.field.key].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
