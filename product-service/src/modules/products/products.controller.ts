import { Controller, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('createProduct')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @MessagePattern('getAllProducts')
  findAll() {
    return this.productsService.findAll();
  }

  @MessagePattern('getProductById')
  findOne(@Payload('id') id: string) {
    console.log()
    return this.productsService.findOne(id);
  }

  @MessagePattern('updateProductById')
  update(@Payload('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @MessagePattern('deleteProductById')
  remove(@Payload('id') id: string) {
    return this.productsService.remove(id);
  }
}
