import { Controller, Get } from '@nestjs/common';
import * as packageInfo from '../package.json';

@Controller()
export class AppController {
  @Get()
  getAppInfo(): { data: { app: string; version: string } } {
    return {
      data: {
        app: packageInfo.name,
        version: `v${packageInfo.version}`,
      },
    };
  }
}
