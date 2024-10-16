import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";

@Injectable()
export class CategoryService {
    constructor(private categoryClient: CategoryClient) { }

    getCategoryList() {
        return this.categoryClient.getAllCategories()
    }

    createCategory(name: string) {
        return this.categoryClient.createCategory(name)
    }

    deleteCategory(id: string){
        return this.categoryClient.deleteCategory(id)
    }

    updateCategory(id: string){
        return this.categoryClient
    }

    getCategoryById(id: number){
        return this.categoryClient.getCategoryById(id)
    }

}