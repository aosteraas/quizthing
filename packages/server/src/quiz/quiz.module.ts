import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository]), AuthModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
