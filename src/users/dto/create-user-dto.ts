import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  lastname: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
}
