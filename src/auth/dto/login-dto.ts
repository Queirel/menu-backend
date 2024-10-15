import {
  IsEmail,
  IsNotEmpty,
  IsString,
  // Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  // @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message:
  //     'The password must have a Uppercase, lowercase letter and a number',
  // })
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
}
