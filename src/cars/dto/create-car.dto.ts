import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  model: string;
}

export class Todo {
  [x: string]: any;
  todo: any = [];
}
