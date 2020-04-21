export class AnchorModel{
    label:string;
    clickHandler:Function;
    cssClass:string;
    
    constructor(label:string,clickHandler:Function, cssClass ?: string){
        this.label = label;
        this.clickHandler = clickHandler;
        this.cssClass = cssClass;
    }
}