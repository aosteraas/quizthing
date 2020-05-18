import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const baseconf: PostgresConnectionOptions = {
  type: 'postgres',
};
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: baseconf.type,
          host: configService.get('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT', 5432),
          username: configService.get('DATABASE_USER'),
          password: configService.get('DATABASE_PASS'),
          database: configService.get('DATABASE_NAME'),
          entities: [__dirname + '/**/*.entity.{js,ts}'],
          // synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    QuizModule,
    QuestionModule,
    ConfigModule,
  ],
  controllers: [],
})
export class AppModule {}
