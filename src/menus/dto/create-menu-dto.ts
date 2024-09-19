import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMenutDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
