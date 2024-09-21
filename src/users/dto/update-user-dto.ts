import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  lastname?: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;
}
