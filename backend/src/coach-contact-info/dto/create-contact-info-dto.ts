import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateContactInfoDto {
  @IsEmail()
  email: string;

  @IsPhoneNumber('RU')
  phone: string;

  @IsString()
  location: string;

  @IsNumber()
  coachId: number;
}
