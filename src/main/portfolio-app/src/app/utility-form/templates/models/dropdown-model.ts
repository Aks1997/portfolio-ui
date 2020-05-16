import { FormElementBaseModel } from '../../form-element-base-model';

export class DropdownModel extends FormElementBaseModel<any>{

    type: "util-dropdown";

    constructor(options){
        super(options);
        options.type= this.type;
    }
}