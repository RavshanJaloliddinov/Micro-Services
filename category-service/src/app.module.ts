import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './category/model';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: "n13",
      models: [Category],
      autoLoadModels: true,
      password: '1111',
      // sync: {force: true},
      synchronize: true
    }),
    CategoryModule
  ],
})
export class AppModule {}
