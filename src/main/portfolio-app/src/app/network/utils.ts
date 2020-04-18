import {Location} from '@angular/common';

export class Utils {

    constructor(private location : Location){

    }
    static getDocumentsRoot(){
        if(location.protocol==="file:"){
            //if we are running it from local enviorment
            var str=location.href;
            return str.substring(0,(str.indexOf('src')+3));
        }
        else{
            var context = location.pathname;
            var idx = -1;
            if ((idx = context.indexOf("/", 1)) != -1) {
                context = context.substring(0, idx);
                return location.protocol + "//" + location.host + context;
            }
            return location.protocol + "//" + location.host;
        }
    }
    static getHelpRoot(){
        return location.protocol + "//" + location.host;
    }
	static getEncodedRoot(){
        return location.protocol + "%2F%2F" + location.host;
    }

    static getBasicAuth(){
        let user= "admin";
        let password= "System@123";
        return btoa(user+":"+password);
    }
}
