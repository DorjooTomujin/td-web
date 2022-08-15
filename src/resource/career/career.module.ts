import { Module } from "@nestjs/common";
import { CareerController } from "./career.controller";
import { CareerService } from "./career.service";

@Module({
    imports: [],
    controllers: [CareerController],
    providers: [CareerService]
})
export class CareerModule {}