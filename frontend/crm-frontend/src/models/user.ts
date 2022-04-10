import { Role } from "./role";
import { Team } from "./team";

export class User{
    

    constructor(
        public id:number=0,
        public first_name:string='',
        public last_name:string='',
        public email:string='',
        public phoneNumber:string='',
        public office:string='',
        // public team:Team=new Team(),
        public position:string='',
        public role:Role=new Role()
        


    ){
        
    }

    get name(){
        return this.first_name+' '+this.last_name
    }
}