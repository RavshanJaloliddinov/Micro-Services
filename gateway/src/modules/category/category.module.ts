import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryClient } from "./category.client";
import { CateogryController } from "./category.controller";

@Module({
    providers: [CategoryService, CategoryClient],
    controllers: [CateogryController]
})
export class CategoryModule{}