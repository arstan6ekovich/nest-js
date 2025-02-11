import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [TodoModule, CarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
