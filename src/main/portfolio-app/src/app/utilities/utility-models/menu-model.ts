import { MenuItemModel } from './menu-item-model';

export class MenuModel{
    menuButtonIcon: string;
    menuItems: MenuItemModel[];

    constructor(menuButtonIcon: string, menuItems: MenuItemModel[]){
        this.menuButtonIcon= menuButtonIcon;
        this.menuItems= menuItems;
    }
}