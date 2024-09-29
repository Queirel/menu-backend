import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  description?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  image?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  food: string;

  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  price: number;

  @IsNumber()
  @IsOptional()
  @MinLength(1)
  @MaxLength(10)
  offer?: number;
}
