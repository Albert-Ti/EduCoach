import { Test, TestingModule } from '@nestjs/testing';
import { CoachContactInfoService } from './coach-contact-info.service';

describe('CoachContactInfoService', () => {
  let service: CoachContactInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoachContactInfoService],
    }).compile();

    service = module.get<CoachContactInfoService>(CoachContactInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
