import { CreateMenutDto } from './create-menu-dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMenuDto extends PartialType(CreateMenutDto) {
  // @IsString()
  // @IsOptional()
  // @MinLength(2)
  // @MaxLength(30)
  // name?: string;
}
