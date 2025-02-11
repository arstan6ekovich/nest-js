import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  image: string;
}

export class Todo {
  [x: string]: any;
  todo: any = [];
}
