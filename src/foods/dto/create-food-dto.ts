import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFoodDto {
  @ApiProperty({
    description: 'Food name',
    nullable: false,
    minLength: 2,
    maxLength: 30,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @ApiProperty({
    description: 'Food description',
    nullable: true,
    minLength: 2,
    maxLength: 30,
  })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  description?: string;

  @ApiProperty({
    description: 'Food image',
    nullable: true,
    minLength: 2,
    maxLength: 30,
  })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  image?: string;

  @ApiProperty({
    description: 'Food image',
    nullable: false,
    minLength: 1,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  food: string;

  @ApiProperty({
    description: 'Food price',
    nullable: false,
    minLength: 1,
    maxLength: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  price: number;

  @ApiProperty({
    description: 'Food offer ',
    nullable: true,
    minLength: 1,
    maxLength: 10,
  })
  @IsNumber()
  @IsOptional()
  @MinLength(1)
  @MaxLength(10)
  offer?: number;
}
