import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrmConfig';
import { AuthModule } from './auth/auth.module';
import { QuizService } from './quiz/quiz.service';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfig), AuthModule, QuizModule],
  controllers: [],
  providers: [QuizService],
})
export class AppModule {}
