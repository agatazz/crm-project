import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string
    @Column({
        type: 'date',
        nullable: true
      })
    startDate:Date|null
    @Column({
        type: 'date',
        nullable: true
      })
    stopDate:Date|null
    @Column({ nullable: true})
    description:string

}