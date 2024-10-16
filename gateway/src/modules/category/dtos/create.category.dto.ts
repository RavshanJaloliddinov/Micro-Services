import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({
        required: true,
        example: "hello"
    })
    name: string
}