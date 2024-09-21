import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMenutDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  name: string;
}
