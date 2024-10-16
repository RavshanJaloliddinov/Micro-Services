import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CreateCategoryDto } from "./dtos/create.category.dto";


@Injectable()
export class CategoryClient implements OnModuleInit {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                port: 3001,
                host: 'localhost'
            }
        })
    }

    async onModuleInit() {
        await this.client.connect()
    }
    getAllCategories() {
        return this.client.send("getAllCategories", {})
    }

    createCategory(name: string) {
        return this.client.send('createCategory', { name })
    }

    deleteCategory(id: number) {
        console.log({ id })
        return this.client.send('deleteCategory', { id })
    }

    getCategoryById(id: number) {
        return this.client.send('getCategoryById', { id })
    }

    updateCategory(payload: CreateCategoryDto, id: number) {
        console.log({ ...payload, id })
        return this.client.send('updateCategory', { ...payload, id })
    }

}