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
  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  description?: string;

  @ApiProperty({})
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  image?: string;

  @ApiProperty({})
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  food: string;

  @ApiProperty({})
  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  price: number;

  @ApiProperty({})
  @IsNumber()
  @IsOptional()
  @MinLength(1)
  @MaxLength(10)
  offer?: number;
}
