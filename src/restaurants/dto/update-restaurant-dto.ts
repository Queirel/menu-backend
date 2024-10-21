import { CreateRestaurantDto } from './create-restaurant-dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  // @IsString()
  // @IsOptional()
  // @MinLength(2)
  // @MaxLength(30)
  // name?: string;
  // @IsString()
  // @IsOptional()
  // @MinLength(7)
  // @MaxLength(50)
  // web?: string;
  // @IsString()
  // @IsOptional()
  // @MinLength(5)
  // @MaxLength(30)
  // phone?: string;
  // @IsEmail()
  // @IsOptional()
  // @MaxLength(50)
  // email?: string;
}
