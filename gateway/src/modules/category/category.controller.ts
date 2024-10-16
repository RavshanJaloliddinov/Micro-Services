import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dtos/create.category.dto";
import { ApiParam } from "@nestjs/swagger";

@Controller('category')
export class CateogryController {
    constructor(private service: CategoryService) { }

    // Get all categories
    @Get()
    async findAll() {
        return this.service.getCategoryList()
    }

    // Get category by id
    @Get('/:id')
    @ApiParam({ name: 'id', required: true })
    async findById(@Param('id', ParseIntPipe) id: number) {
        return this.service.getCategoryById(id)
    }

    // Create category
    @Post()
    async createCategory(@Body() payload: CreateCategoryDto) {
        return this.service.createCategory(payload.name)
    }

    // Delete category 
    @Delete('/:id')
    @ApiParam({ name: 'id', required: true })
    async deleteCategory(@Param('id', ParseIntPipe) id: number) {
        this.service.deleteCategory(id)
    }

    // Update category
    @Patch("/:id")
    @ApiParam({ name: 'id', required: true })
    async updateCategory(@Body() payload: CreateCategoryDto, @Param('id', ParseIntPipe) id: number) {
        return this.service.updateCategory(payload, id)
    }
}