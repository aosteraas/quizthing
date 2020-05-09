import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Question } from 'src/question/question.entity';

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'timestamptz' })
  created: string;

  @OneToMany(() => Question, (question) => question.question, { eager: false })
  questions: Question[];
}
