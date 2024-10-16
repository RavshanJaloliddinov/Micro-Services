import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({
        description: 'Name of the product',
        example: 'Laptop',
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Description of the product',
        example: 'A high-end gaming laptop',
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Price of the product',
        example: 1500,
    })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({
        description: 'Rating of the product',
        example: 4.5,
        required: false,
    })
    @IsOptional()
    @IsNumber()
    rating?: number;

    @ApiProperty({
        description: 'Count of the product',
        example: 20,
    })
    @IsNotEmpty()
    @IsNumber()
    count: number;

    @ApiProperty({
        description: 'ID of the category the product belongs to',
        example: '64b4b7b12c1b8f1c5a7b9a8d',
    })
    @IsNotEmpty()
    @IsNumber()
    category_id: number;
}
