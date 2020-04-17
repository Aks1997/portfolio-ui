export class User{

    userName: string;
    access_token: string;

    constructor(userName, access_token){
        this.userName= userName;
        this.access_token= access_token;
    }
}