import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateRestaurantDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  name?: string;

  @IsString()
  @IsOptional()
  @MinLength(7)
  @MaxLength(50)
  web?: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  email?: string;
}
