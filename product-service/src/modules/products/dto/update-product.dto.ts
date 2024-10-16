import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiPropertyOptional({
        description: 'Updated name product',
        example: 'New Laptop Name',
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({
        description: 'Updated description product',
        example: 'new description ',
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional({
        description: 'Updated price product',
        example: 1700,
    })
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiPropertyOptional({
        description: 'Updated rating product',
        example: 4.8,
    })
    @IsOptional()
    @IsNumber()
    rating?: number;

    @ApiPropertyOptional({
        description: 'Updated count product',
        example: 15,
    })
    @IsOptional()
    @IsNumber()
    count?: number;

    @ApiPropertyOptional({
        description: 'Updated category ID for the product',
        example: '64b4b7b12c1b8f1c5a7b9a8d',
    })
    @IsOptional()
    @IsNumber()
    category_id?: number;
}
