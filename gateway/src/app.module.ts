import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      database: "n13",
      password: "1111",
      models: [],
      synchronize: true
    }),
    CategoryModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
