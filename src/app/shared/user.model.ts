export class User{
    public id:number;
    public firstname:string;
    public lastname:string;
    public email:string;
    public avatar:String

    constructor(id:number, firstname:string, lastname:string, email:string, avatar:string)
    {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.avatar=avatar;
    }
}