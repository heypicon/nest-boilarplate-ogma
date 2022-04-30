import {Injectable} from '@nestjs/common';
import {IOrderSearchFilters} from "../../common/interfaces/order-search-filters.interface";

const Order = {findAndCountAll: (abc: any) => Promise.resolve({rows: []})}

@Injectable()
export class OrderService {
    async findOrdersWithFilters(searchFilters: Partial<IOrderSearchFilters>) {
        const orders = await Order.findAndCountAll({
            where: searchFilters,
            limit: searchFilters.limit,
            skip: searchFilters.skip
        });
        return orders.rows;
    }
}
