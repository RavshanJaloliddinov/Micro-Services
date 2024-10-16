import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved all products' })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation({ summary: 'Get product by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the product' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiParam({ name: 'id', type: String, description: 'Product ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update product by ID' })
  @ApiResponse({ status: 200, description: 'Product successfully updated' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  @ApiParam({ name: 'id', type: String, description: 'Product ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Delete product by ID' })
  @ApiResponse({ status: 200, description: 'Product successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiParam({ name: 'id', type: String, description: 'Product ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
