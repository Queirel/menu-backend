import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateRestaurantDto {
  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  @MinLength(7)
  @MaxLength(50)
  web?: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @ApiProperty({})
  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  email?: string;

  // maps //TODO
}
