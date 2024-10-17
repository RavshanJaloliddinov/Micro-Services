import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CreateProductRequest } from "../interfaces/create.interface";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product implements CreateProductRequest {
    @Prop({ required: true })
    name: string; 

    @Prop({ required: true })
    description: string;  

    @Prop({ required: true })
    price: number;  

    @Prop({ required: true, default: 0 })
    rating: number;  

    @Prop({ required: true, default: 0 })
    count: number;  

    @Prop({ required: true })
    category_id: number; 

    @Prop({type: Object})
    category: {name: string}
}


export const ProductSchema = SchemaFactory.createForClass(Product);
