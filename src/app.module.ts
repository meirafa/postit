import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    //configuração para conectar com bd
    TypeOrmModule.forRoot({
      type: 'postgres', //tipo do banco
      url: environment.DATABASE_URL,
      //database: 'test.db', //nome do arquivo
      autoLoadEntities: true, //achar as entidades e registrar elas
      synchronize: true, //sincronização automatica pois nao estamos usando migration
      logging: environment.DATABASE_LOGGING === 'true', //mostra o sql que esta sendo executado
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        }
      }
    }),//para nao ter problemas com heroku
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
