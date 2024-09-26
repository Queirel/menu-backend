import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  name: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  description: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  image: string;
}
