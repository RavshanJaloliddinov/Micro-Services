import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";
import { CreateCategoryDto } from "./dtos/create.category.dto";

@Injectable()
export class CategoryService {
    constructor(private categoryClient: CategoryClient) { }

    getCategoryList() {
        return this.categoryClient.getAllCategories()
    }

    createCategory(name: string) {
        return this.categoryClient.createCategory(name)
    }

    deleteCategory(id: number){
        return this.categoryClient.deleteCategory(id)
    }

    updateCategory(Payload: CreateCategoryDto, id: number){
        return this.categoryClient.updateCategory(Payload, id)
    }

    getCategoryById(id: number){
        return this.categoryClient.getCategoryById(id)
    }

}