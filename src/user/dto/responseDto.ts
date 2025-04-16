import { IsString } from "class-validator";

export class UserResponseDto{
 
    id:number;
    name?:string;
    email?:string;
    age?:Number;


    constructor(user: any) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.age = user.age;
      }
}