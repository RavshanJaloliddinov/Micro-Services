import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { User } from './module/users/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: "micro",
      models: [User],
      autoLoadModels: true,
      password: '1111',
      sync: {force: true},
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
