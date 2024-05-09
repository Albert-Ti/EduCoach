import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoachModule } from './coach/coach.module';
import { CoachModule } from './coach/coach.module';

@Module({
  imports: [UsersModule, CoachModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
