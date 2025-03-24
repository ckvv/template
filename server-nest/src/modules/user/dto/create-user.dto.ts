import { Transform } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @Transform(({ value }) => parseInt(value as string))
  @IsInt()
  age: number;
}
