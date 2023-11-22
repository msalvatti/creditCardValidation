import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('validate')
  getValidateCard(@Query('cardNumber') cardNumber: string): { isValid: boolean } {
    const isValid: boolean = this.appService.getValidateCard(cardNumber);
    return { isValid };
  }
}
