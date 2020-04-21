export class MenuItemModel{
    label: string;
    icon: string;
    clickHandler: Function;

    constructor(label: string, icon?: string, clickHandler?: Function){
        this.label= label;
        this.icon= icon;
        this.clickHandler= clickHandler;
    }
}