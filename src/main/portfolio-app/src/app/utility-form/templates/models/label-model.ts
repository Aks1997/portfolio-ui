import { FormElementBaseModel } from '../../form-element-base-model';

export class LabelModel extends FormElementBaseModel<any>{

    type: "util-label";
    isLink: boolean=false;

    constructor(options){
        super(options);
        options.type= this.type;
    }
}