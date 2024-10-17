import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsClient } from './products.client';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsClient],
  exports: [ProductsClient]
})
export class ProductModule {}
