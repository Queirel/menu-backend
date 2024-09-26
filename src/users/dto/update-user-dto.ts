// import {
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   MaxLength,
//   MinLength,
// } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user-dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // @MinLength(2)
  // @MaxLength(30)
  // name?: string;
  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // @MinLength(2)
  // @MaxLength(30)
  // lastname?: string;
  // @IsString()
  // @IsOptional()
  // @MinLength(5)
  // @MaxLength(30)
  // phone?: string;
}
