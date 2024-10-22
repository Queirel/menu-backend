import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
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
    description: 'Category description',
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
    description: 'Category image',
    nullable: true,
    minLength: 2,
    maxLength: 30,
  })
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  image?: string;
}
