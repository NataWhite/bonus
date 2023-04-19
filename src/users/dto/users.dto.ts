import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({ required: true, example: 'user@mail.com' })
  @IsString()
  @IsEmail()
  // @Matches('')
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  // @IsEnum(CityEnum)
  city: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  avatar: string;
}

// name, age, email, city, status
