import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { retry } from "rxjs";

@Injectable()
export class CategoryClient implements OnModuleInit{
    private client: ClientProxy

    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                port: 3001,
                host: 'localhost'
            }
        })
    }

    async  onModuleInit() {
        await this.client.connect()
    }
    getAllCategories() {
        return this.client.send("getAllCategories", undefined)
    }

    createCategory(name: string) {
        return this.client.send('createCategory', {name})
    }

    deleteCategory(id: string){
        return this.client.send('deleteCategory', {id})
    }

    getCategoryById(id:number){
        return this.client.send('getCategoryById', {id})
    }
}