import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMenutDto {
  @ApiProperty({
    description: 'Menu name',
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
    description: 'Menu description',
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
    description: 'Menu qr code',
    nullable: true,
    minLength: 2,
    maxLength: 30,
  })
  @IsString()
  @IsOptional() //TODO
  @MinLength(2)
  @MaxLength(30)
  qr?: string;
}
