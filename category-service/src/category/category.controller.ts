import { Controller, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }


  @MessagePattern("createCategory")
  create(@Payload() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern("getAllCategories")
  findAll() {
    return this.categoryService.findAll();
  }
 
  @MessagePattern("getCategoryByID")
  findOne(@Payload('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @MessagePattern("updateCategory")
  update(@Payload() updateCategoryDto: UpdateCategoryDto, id: number) {
    return this.categoryService.update(id, updateCategoryDto);
  }


  @MessagePattern("deleteCategory")
  remove(@Payload("id") id: number) {
    return this.categoryService.remove(id);
  } 


}
