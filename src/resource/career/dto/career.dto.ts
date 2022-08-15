import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CareerCreateDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    url: string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    legalname: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullname: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    country: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    postalCode:number

    @ApiProperty()
    @IsArray()
    
    emails?: []

    @ApiProperty()
    @IsArray()
    phones?: []
    
    @ApiProperty()
    @IsString()
    website?: string

    @ApiProperty()
    @IsArray()
    degrees: [{
        schoolname?: string,
        degree?: string
        degreeStatus?:string
        country?: string
        major?:string
    }]

    @ApiProperty()
    @IsArray()
    experiences: [{
            employerName?: string
            jobTitle?:string
            startDate?: Date
            endDate?: Date
            currentJobs: [{
                country:string
                city:string
                state:string
            }]
    }]

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    coverLetter: string

}