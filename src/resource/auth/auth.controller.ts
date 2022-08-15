import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserCreateDto, UserLoginDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    
    constructor(private readonly service: AuthService) {}
    @Post('register')
    register(@Body() data: UserCreateDto) {
        return this.service.register(data)
        // return name
    }

    @Post('login')
    login(@Body() data: UserLoginDto) {
        return this.service.login(data)
        
    }

    @Post('logout')
    logout() {
        return this.service.logout()
    }

    @Post('googleSign')
    googleSign() {
        return this.service.googleSign()
    }
}