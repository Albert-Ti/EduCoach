import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactInfoDto } from './dto/create-contact-info-dto';

@Injectable()
export class CoachContactInfoService {
  constructor(readonly prismaService: PrismaService) {}

  async create(createContactInfoDto: CreateContactInfoDto) {
    return await this.prismaService.contactInfo.create({
      data: createContactInfoDto,
    });
  }
}
