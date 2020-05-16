import { FormElementBaseModel } from '../../form-element-base-model';

export class AutocompleteModel extends FormElementBaseModel<any>{

    type: "util-autocomplete";

    constructor(options){
        super(options);
        options.type= this.type;
    }
}