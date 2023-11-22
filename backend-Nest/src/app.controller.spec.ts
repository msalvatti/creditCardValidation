import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return VALID check', () => {
      const cardNumber = '4111 1111 1111 1111';
      const { isValid } = appController.getValidateCard(cardNumber);
      expect(isValid).toBe(true);
    });

    it('should return NOT VALID check', () => {
      const cardNumber = '4111 1111 1111 1112';
      const { isValid } = appController.getValidateCard(cardNumber);
      expect(isValid).toBe(false);
    });

    it('should return NOT VALID check with more than 16 digits', () => {
      const cardNumber = '4111 1111 1111 11123';
      const { isValid } = appController.getValidateCard(cardNumber);
      expect(isValid).toBe(false);
    });
  });
});
