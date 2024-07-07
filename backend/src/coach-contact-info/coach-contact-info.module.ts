import { Module } from '@nestjs/common';
import { CoachContactInfoService } from './coach-contact-info.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CoachContactInfoService],
  exports: [CoachContactInfoService],
})
export class CoachContactInfoModule {}
