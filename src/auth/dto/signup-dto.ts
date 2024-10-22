import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  // Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @ApiProperty({
    description: 'Sign up name',
    nullable: false,
    minLength: 2,
    maxLength: 30,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @ApiProperty({
    description: 'Sign up lastname',
    nullable: false,
    minLength: 2,
    maxLength: 30,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  lastname: string;

  @ApiProperty({
    description: 'Sign up password',
    nullable: false,
    minLength: 8,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'The password must have a Uppercase, lowercase letter and a number',
  // })
  password: string;

  @ApiProperty({
    description: 'Sign up phone',
    nullable: true,
    minLength: 5,
    maxLength: 50,
  })
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @ApiProperty({
    description: 'Sign up email',
    nullable: false,
    minLength: 8,
    maxLength: 50,
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(8)
  email: string;
}
