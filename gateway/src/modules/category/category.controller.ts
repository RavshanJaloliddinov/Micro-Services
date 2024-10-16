import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dtos/create.category.dto";

@Controller('category')
export class CateogryController {
    constructor(private service: CategoryService) { }

    @Get()
    async findAll() {
        await this.service.getCategoryList()
    }

    @Post()
    async createCategory(@Body() payload: CreateCategoryDto) {
        return await this.service.createCategory(payload.name)
    }

    @Delete('/:id')
    async deleteCategory(@Param() id: string){
        await this.service.createCategory(id)
    }
}