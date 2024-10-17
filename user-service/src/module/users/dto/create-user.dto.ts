import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsNotEmpty()
    @IsString()
    name: string;


    @ApiProperty({
        type: String,
        example: 'jaloliddinov008@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsNotEmpty()
    @IsPhoneNumber('UZ')
    phone: string


    @ApiProperty({
        type: String,
        example: 'Toshmat'
    })
    @IsOptional()
    @IsString()
    image: string;
}   
