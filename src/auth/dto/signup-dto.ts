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
  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  lastname: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'The password must have a Uppercase, lowercase letter and a number',
  // })
  password: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @ApiProperty({})
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
}
