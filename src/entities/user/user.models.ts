import {Column, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    surname: string;
    @Column()
    name: string;
    @Column()
    phone: string;
    @Column()
    @Index({unique: true})
    email: string;
    @Column()
    password: string;
    @DeleteDateColumn()
    deletedAt: Date;

}