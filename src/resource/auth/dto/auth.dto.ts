import { ApiProperty } from "@nestjs/swagger"
import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator'
export class UserCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string
    
    @IsString()
    @ApiProperty()
    @MaxLength(100)
    @MinLength(5)
    phone?: string
    
    @IsString()
    @ApiProperty()
    avatar?:string

    @IsString()
    @ApiProperty()
    country?:string

    @IsString()
    @ApiProperty()
    nickname?:string

    @IsString()
    @ApiProperty()
    firstname?:string

    @IsString()
    @ApiProperty()
    lastname?:string
    
    @IsString()
    @ApiProperty()
    address?:string
}

export class UserLoginDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string
}