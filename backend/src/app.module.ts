import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CoachModule } from './coach/coach.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoachContactInfoModule } from './coach-contact-info/coach-contact-info.module';

@Module({
  imports: [PrismaModule, UserModule, CoachModule, CoachContactInfoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
