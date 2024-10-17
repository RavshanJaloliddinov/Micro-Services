import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";
import { CreateCategoryDto } from "./dtos/create.category.dto";
import { ProductsClient } from "../product/products.client";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryClient: CategoryClient,
        private readonly productClient: ProductsClient
    ) { }

    getCategoryList() {
        return this.categoryClient.getAllCategories()
    }

    async getCategoryById(id: number) {

        const foundedCategory = await firstValueFrom(this.categoryClient.getCategoryById(id))
        const products = await firstValueFrom(this.productClient.findByCategory(id))

        console.log(products, foundedCategory)
        
        return {
            ...foundedCategory,
            products
        }
    }

    createCategory(name: string) {
        return this.categoryClient.createCategory(name)
    }

    deleteCategory(id: number) {
        return this.categoryClient.deleteCategory(id)
    }

    updateCategory(payload: CreateCategoryDto, id: number) {
        return this.categoryClient.updateCategory(payload, id)
    }

}