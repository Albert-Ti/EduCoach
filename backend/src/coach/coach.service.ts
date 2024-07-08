import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCoachDto } from './dto/create-coach-dto';
import { CoachContactInfoService } from 'src/coach-contact-info/coach-contact-info.service';

@Injectable()
export class CoachService {
  constructor(
    readonly prismaService: PrismaService,
    readonly coachContactInfoService: CoachContactInfoService,
  ) {}

  async findMany() {
    return await this.prismaService.coach.findMany({
      include: { contactInfo: true },
    });
  }

  async create(createCoachDto: CreateCoachDto) {
    const { contactInfo, ...coachData } = createCoachDto;

    const createdCoach = await this.prismaService.coach.create({
      data: coachData,
    });

    await this.coachContactInfoService.create({
      ...contactInfo,
      coachId: createdCoach.id,
    });

    return createdCoach;
  }
}
