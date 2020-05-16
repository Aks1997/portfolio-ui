export class FormElementBaseModel<T>{
    value: T;
    key: string;
    label: string;
    required: boolean;
    type: string;
    viewMode: boolean;
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean
        type?: string,
        viewMode?: boolean,
        options?: {key: string, value: string}[];
      } = {}){
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.type = options.type || '';
        this.viewMode= options.viewMode;
        this.options= options.options;

        if(this.viewMode){
            this.required=false;
        }
    }
}