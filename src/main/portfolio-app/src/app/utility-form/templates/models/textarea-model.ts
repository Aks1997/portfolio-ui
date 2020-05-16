import { FormElementBaseModel } from '../../form-element-base-model';

export class TextAreaModel extends FormElementBaseModel<any>{

    type: "util-textarea";

    constructor(options){
        super(options);
        options.type= this.type;
    }
}