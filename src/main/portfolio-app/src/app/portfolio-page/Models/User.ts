export class User{

    userName: string;
    access_token: string;
    isLoggedIn: boolean;

    constructor(isLoggedIn: boolean){
        this.isLoggedIn= isLoggedIn
    }
}