import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team_entity";
import {User} from './user_entity'
@Entity()
export class Department{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column({nullable:true})
    description:string;
    @OneToMany(()=>Team,team=>team.department)
    teams:Team[]
   
}