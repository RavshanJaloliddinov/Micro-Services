import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schema/product.schema';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private readonly httpService: HttpService,
  ) { }

  // Mahsulot yaratish
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  // Barcha mahsulotlarni olish
  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find().exec();
    const productsWithCategory = await Promise.all(products.map(async (product) => {
      const response = await firstValueFrom(this.httpService.get(`http://localhost:3000/category/${product.category_id}`));
      return {
        ...product.toObject(),  
        category: response.data
      };
    })); 
    return productsWithCategory;
  } 

  async findByCategory(id: number): Promise<Product[]> {
    console.log(id)
    return await this.productModel.find({ category_id: id }).exec()
  }

  // ID bo'yicha mahsulot olish
  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`ID ${id} not found`);
    }

    const response = await firstValueFrom(this.httpService.get(`http://localhost:3000/category/${product.category_id}`))

    return {
      ...product.toObject(),
      category: response.data
    };
  }

  // Mahsulot yangilash
  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  // Mahsulotni o'chirish
  async remove(id: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return deletedProduct;
  }
}
