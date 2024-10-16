import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dtos/create.category.dto";
import { Payload } from "@nestjs/microservices";
import { ApiParam } from "@nestjs/swagger";

@Controller('category')
export class CateogryController {
    constructor(private service: CategoryService) { }

    @Get()
    async findAll() {
        return await this.service.getCategoryList()
    }
    @Get('/:id')
    async findById(id:number) {
        return await this.service.getCategoryById(id)
    }

    @Post()
    async createCategory(@Body() payload: CreateCategoryDto) {
        return await this.service.createCategory(payload.name)
    }


    @Delete('/:id')
    @ApiParam({ name: 'id', required: true })
    async deleteCategory(@Param() id: number) {
        await this.service.deleteCategory(id)
    }

    @Patch("/:id")
    async updateCategory(@Body() payload: CreateCategoryDto, @Param() id: number) {
        return await this.service.updateCategory(payload, id)
    }
}