import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrmConfig';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
