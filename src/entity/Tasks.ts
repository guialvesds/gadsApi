import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tasks {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn({
        default: new Date()
    })
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}