import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly products:ProductsService){}

    @Get()
    getProducts():string[]{
        return this.products.getProducts();
    }
}
