import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return app details', () => {
      const appInfo = appController.getAppInfo();
      expect(appInfo.data.app).toBeTruthy();
      expect(appInfo.data.version).toBeTruthy();
    });
  });
});
