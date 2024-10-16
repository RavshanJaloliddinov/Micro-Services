import { Injectable } from '@nestjs/common';
import { ProductsClient } from './products.client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsClient: ProductsClient) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productsClient.create(createProductDto);
  }

  async findAll() {
    return await this.productsClient.findAll();
  }

  async findOne(id: string) {
    return await this.productsClient.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productsClient.update(id, updateProductDto);
  }

  async remove(id: string) {
    return await this.productsClient.remove(id);
  }
}
