import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  // Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Login password',
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
    description: 'Login email',
    nullable: false,
    minLength: 8,
    maxLength: 50,
  })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  email: string;
}
