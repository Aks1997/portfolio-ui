import { FormElementBaseModel } from '../../form-element-base-model';

export class TextFieldModel extends FormElementBaseModel<any>{

    type: "util-textfield";
    isLink: boolean=false;

    constructor(options){
        super(options);
        options.type= this.type;
        this.isLink= options.isLink;
    }
}