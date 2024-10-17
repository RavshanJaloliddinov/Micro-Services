import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UpdateUserDto {


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsOptional()
    @IsString()
    name?: string;


    @ApiProperty({
        type: String,
        example: 'jaloliddinov008@gmail.com'
    })
    @IsOptional()
    @IsEmail()
    email?: string;


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsOptional()
    @IsPhoneNumber('UZ')
    phone?: string


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsOptional()
    @IsString()
    image?: string;
}   
