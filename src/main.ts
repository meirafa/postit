import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { environment } from './environment/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //tratar cors
  app.enableCors({
    origin: true,
  });

  app.useGlobalPipes(new ValidationPipe()); //validação nest

  //inicio swagger
  const config = new DocumentBuilder()
    .setTitle(environment.SWAGGER_TITLE) //titulo api
    .setDescription('A API do Post-it') //descricao
    .setVersion('1.0') //versao
    .addBearerAuth()
    .build(); //build

  const document = SwaggerModule.createDocument(app, config); //inicializa

  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: { docExpansion: 'none' }, //deixa as guias fechadas no swagger
  }); //pasta que ira ficar o swagger e configuraçoes
  //fim swagger

  await app.listen(environment.PORT || 3000);
}
bootstrap();
