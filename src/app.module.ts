import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [TodoModule, CarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
