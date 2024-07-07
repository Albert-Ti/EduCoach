import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach-dto';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Get()
  async findMany() {
    return await this.coachService.findMany();
  }

  @Post()
  async create(@Body() createCoachDto: CreateCoachDto) {
    return await this.coachService.create(createCoachDto);
  }
}
