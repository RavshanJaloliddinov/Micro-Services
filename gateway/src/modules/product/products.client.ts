import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsClient implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002, // Mikroservis porti
        host: 'localhost',
      },
    });
  }

  async onModuleInit() {
    await this.client.connect();
  }

  create(createProductDto: CreateProductDto) {
    return this.client.send('createProduct', createProductDto);
  }

  findAll() {
    return this.client.send('getAllProducts', {});
  }

  findOne(id: string) {
    return this.client.send('getProductById', { id });
  }

  findByCategory(id: number) {
    return this.client.send('getProductsByCategory', { id })
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.client.send('updateProductById', { id, ...updateProductDto });
  }

  remove(id: string) {
    return this.client.send('deleteProductById', { id });
  }
}
