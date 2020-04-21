export class ButtonModel{
    label:string;
    btnClickHandler:Function;
    cssClass:string;
    isDisabled: boolean;
    
    constructor(label:string,btnClickHandler:Function, cssClass ?: string, isDisabled: boolean = false){
        this.label = label;
        this.btnClickHandler = btnClickHandler;
        this.isDisabled = isDisabled;
        this.cssClass = cssClass;
    }
}