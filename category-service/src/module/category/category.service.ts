import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model';


@Injectable()
export class CategoryService {


  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) { }



  async create(payload: CreateCategoryDto) {
    return this.categoryModel.create({
      name: payload.name
    })
  }

  async findAll() {
    return await this.categoryModel.findAll()
  }

  async findOne(id: number) {
    return await this.categoryModel.findOne(
      { where: { id } }
    )
  }

  async update(payload: { id: number, name: string }) {
    return await this.categoryModel.update(
      { name: payload.name },
      { where: { id: payload.id } },
    )
  }

  async remove(payload: { id: number }) {
    return await this.categoryModel.destroy(
      { where: { id: payload.id } }
    )
  }
}
