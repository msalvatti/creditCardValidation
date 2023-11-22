import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getValidateCard(cardNumber: string): boolean {
    const cleanedCardNumber: string = cardNumber.replace(/\D/g, '');

    if (cleanedCardNumber.length !== 16) {
      return false;
    }

    const digits: number[] = cleanedCardNumber.split('').map(Number);

    let sum: number = 0;

    for (let i: number = 0; i < 16; i++) {
      let digit: number = digits[i];

      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
    }
    return sum % 10 === 0;
  }
}
