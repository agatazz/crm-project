import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./department_entity";
import { Goal } from "./goal_enitity";
import { User } from "./user_entity";

@Entity()
export class Team{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToOne(()=>Department)
    @JoinColumn({name:'department_id'})
    department:Department;

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    manager:User;

    @OneToMany(()=>User,employee=>employee.team)
    members:User[];

    @ManyToMany(()=>Goal)
    @JoinTable({
        name:'team_goals',
        joinColumn:{name:'team_id',referencedColumnName:'id'},//column from role that will be joined 
        inverseJoinColumn:{name:'goals_id',referencedColumnName:'id'}//column from permission that will be joined
    })
    goals:Goal[];

}