import { Department } from "./department";
import { Goal } from "./goal";
import { User } from "./user";

export class Team{
    // constructor(
    //     public id:number= 0,
    //     public name:string='',
    //     public manager:User=new User(),
    //     public members:User[],
    //     public goals:Goal[],
    //     public department_id:Department[],


    // ){

    // }
    id: number;
    name: string;
    manager: User;
    members:User[];
    goals: Goal[];

    constructor(id = 0, name= '', manager = new User(),members=[], goals = []) {
        this.id = id;
        this.name = name;
        this.manager = manager;
        this.members=members;
        this.goals = goals;
    }
}