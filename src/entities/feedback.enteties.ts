import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('feedback-form')
export class FeedbackEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    name: string;

    @Column({default: ''})
    email: string;

    @Column({default: ''})
    message: string;

}