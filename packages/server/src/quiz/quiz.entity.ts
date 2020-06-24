import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Question } from '../question/question.entity';
import { User } from '../auth/user.entity';

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

  @ManyToOne(() => User, (user) => user.quizzes)
  user: User;
}
