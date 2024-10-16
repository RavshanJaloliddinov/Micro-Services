import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/micro'),
    ProductsModule,
  ],
  controllers: [],
  providers: [
   
  ],
})
export class AppModule {}
