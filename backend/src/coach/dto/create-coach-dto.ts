import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsInt,
  IsNumber,
  IsObject,
  IsPhoneNumber,
  IsPositive,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

export class ContactInfo {
  @IsEmail()
  email: string;

  @IsPhoneNumber('RU')
  phone: string;

  @IsString()
  location: string;
}

export class CreateCoachDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  password: string;

  @IsString()
  gender: string;

  @IsArray()
  @IsString({ each: true })
  portfolio: string[];

  @IsArray()
  @IsString({ each: true })
  specialties: string[];

  @IsArray()
  @IsString({ each: true })
  certifications: string[];

  @IsInt()
  @Min(0)
  experienceYears: number;

  @IsObject()
  @ValidateNested()
  @Type(() => ContactInfo)
  contactInfo: ContactInfo;

  @IsArray()
  @IsString({ each: true })
  availableHours: string[];

  @IsArray()
  @IsString({ each: true })
  comments: string[];

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;
}
