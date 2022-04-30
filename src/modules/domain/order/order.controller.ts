import {Body, Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import { OrderService } from "./order.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('orders')
@ApiTags('orders')
export class OrderController {
    constructor(private readonly ordersService: OrderService) {
    }

    @HttpCode(HttpStatus.OK)
    @Get('app/search')
    async findAllOrdersForApp(@Body() body) {
        return await this.ordersService.findOrdersWithFilters({ purchasedBy: 'Suman' });
    }

    @HttpCode(HttpStatus.OK)
    @Get('expert/search')
    async findAllOrdersForExpert(@Body() body) {
        return await this.ordersService.findOrdersWithFilters({ expertId: 'abc', purchasedBy: 'Suman' });
    }
}
