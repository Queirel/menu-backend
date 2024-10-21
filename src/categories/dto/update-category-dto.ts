import { CreateCategoryDto } from './create-category-dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  // @IsString()
  // @IsOptional()
  // @MinLength(2)
  // @MaxLength(30)
  // name?: string;
}
