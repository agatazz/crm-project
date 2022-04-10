import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission_entity";

@Entity()
export class Role{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    @ManyToMany(()=>Permission)
    @JoinTable({
        name:'role_permissions',
        joinColumn:{name:'role_id',referencedColumnName:'id'},//column from role that will be joined 
        inverseJoinColumn:{name:'permission_id',referencedColumnName:'id'}//column from permission that will be joined
    })
    permissions:Permission[];
}