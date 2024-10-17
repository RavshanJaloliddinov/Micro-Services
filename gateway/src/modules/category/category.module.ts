import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryClient } from "./category.client";
import { CateogryController } from "./category.controller";
import { ProductsService } from "../product/products.service";
import { ProductsClient } from "../product/products.client";

@Module({
    providers: [CategoryService, CategoryClient, ProductsClient],
    controllers: [CateogryController],
})
export class CategoryModule{}