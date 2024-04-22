import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @Length(2, 30)
  name: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  age: number;

  @IsString()
  @Length(5, 20)
  breed: string;
}
