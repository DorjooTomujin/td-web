import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private service: UserService) { }
    @Get('views')
    @ApiOperation({})
    fetchAllUser() {
        return this.service.fetchAllUsers()
    }
}