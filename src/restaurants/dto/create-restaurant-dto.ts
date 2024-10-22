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
  @ApiProperty({
    description: 'Restaurant name',
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
    description: 'Restaurant website',
    nullable: true,
    minLength: 7,
    maxLength: 100,
  })
  @IsString()
  @IsOptional()
  @MinLength(7)
  @MaxLength(100)
  web?: string;

  @ApiProperty({
    description: 'Restaurant phone',
    nullable: true,
    minLength: 5,
    maxLength: 30,
  })
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(30)
  phone?: string;

  @ApiProperty({
    description: 'Restaurant email',
    nullable: true,
    minLength: 8,
    maxLength: 50,
  })
  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  @MinLength(8)
  email?: string;

  // maps //TODO
}
