import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role_entity";
import { Team } from "./team_entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;

    @ManyToOne(()=>Role)
    @JoinColumn({name:'role_id'})
    role:Role;

    @Column({ nullable: true})
    phoneNumber:string;

    @Column({ nullable: true})
    office:string;

    @ManyToOne(()=>Team)
    @JoinColumn({name:'team_id'})
    team:Team;

    @Column({ nullable: true})
    position:string;

 


}