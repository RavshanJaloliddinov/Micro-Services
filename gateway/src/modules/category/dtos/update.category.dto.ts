import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto {
    @ApiProperty({
        required: true,
        example: "hello"
    })
    name: string
    id: number
}