import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
