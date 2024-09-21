import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateMenuDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(30)
  name?: string;
}
