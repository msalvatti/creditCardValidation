import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should get VALID check', () => {
    return request(app.getHttpServer())
      .get('/validate?cardNumber=4111 1111 1111 1111')
      .expect(200)
      .expect({isValid: true});
  });

  it('Should get NOT VALID check', () => {
    return request(app.getHttpServer())
      .get('/validate?cardNumber=4111 1111 1111 1112')
      .expect(200)
      .expect({isValid: false});
  });
});
