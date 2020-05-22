import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
