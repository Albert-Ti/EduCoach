import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CoachContactInfoService } from 'src/coach-contact-info/coach-contact-info.service';

@Module({
  imports: [PrismaModule],
  controllers: [CoachController],
  providers: [CoachService, CoachContactInfoService],
})
export class CoachModule {}
