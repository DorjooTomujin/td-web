import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CareerService } from "./career.service";
import { CareerCreateDto } from "./dto/career.dto";

@Controller('career')
export class CareerController {
    constructor(private service: CareerService) { }

    @Post('create')
    create(@Body() data: CareerCreateDto) {
        return this.service.create(data)
        // return data
    }

    @Get('views')
    fetchAllCV() {
        return this.service.fetchAllCV()
    }

    // @Delete('delete')
    // delete(@Param() )
}