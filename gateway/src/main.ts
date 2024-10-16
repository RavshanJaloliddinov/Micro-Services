import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("microservice")
    .setDescription('api')
    .setVersion('1.0')
    .addTag('mircoservice')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("docs", app, document)

  await app.listen(5000);
}
bootstrap();
 