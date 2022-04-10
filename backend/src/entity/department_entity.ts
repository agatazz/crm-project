import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team_entity";

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