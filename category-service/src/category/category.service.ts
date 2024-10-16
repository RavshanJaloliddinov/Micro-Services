import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model';

@Injectable()
export class CategoryService {


  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
  ) { }
  create(payload: CreateCategoryDto) {
    return this.categoryModel.create({
      name: payload.name
    })
  }

  findAll() {
    return this.categoryModel.findAll()
  }

  findOne(id: number) {
    return this.categoryModel.findAll(
      { where: { id } }
    )
  }

  update(id: number, payload: UpdateCategoryDto) {
    return this.categoryModel.update(
      { name: payload.name },
      { where: { id } },
    )
  }

  async remove(id: number) {
    return await this.categoryModel.destroy(
      { where: { id } }
      )
  }
}
