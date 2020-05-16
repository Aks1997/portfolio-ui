import { FormElementBaseModel } from 'src/app/utility-form/form-element-base-model';

export class Project{

    images: [];
    projectAttributes: FormElementBaseModel<any>[];
    id: string;

    constructor(images: [], projectAttributes: FormElementBaseModel<any>[], id?: string){
        this.images= images;
        this.projectAttributes= projectAttributes;
        this.id=id;
    }
}