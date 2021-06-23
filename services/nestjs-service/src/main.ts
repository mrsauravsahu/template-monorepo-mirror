import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appPort = process.env.PORT || 80;
  await app.listen(appPort);

  console.log(`App running at: ${await app.getUrl()}`);
}

bootstrap();
