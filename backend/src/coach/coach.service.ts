import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCoachDto } from './dto/create-coach-dto';

@Injectable()
export class CoachService {
  constructor(readonly prismaService: PrismaService) {}

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

    await this.prismaService.contactInfo.create({
      data: {
        ...contactInfo,
        coachId: createdCoach.id,
      },
    });

    return createdCoach;
  }
}
