import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackFormController } from './feedback-form.controller';

describe('FeedbackFormController', () => {
  let controller: FeedbackFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackFormController],
    }).compile();

    controller = module.get<FeedbackFormController>(FeedbackFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
