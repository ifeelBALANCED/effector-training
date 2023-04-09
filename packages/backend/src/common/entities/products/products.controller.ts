import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ProductSchema } from './schemas/product.schema';
import { Prisma } from '@prisma/client';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create product',
    description: 'Create product',
  })
  @ApiBody({ type: ProductSchema, required: true })
  @ApiCreatedResponse({
    type: ProductSchema,
  })
  create(@Body() body: Prisma.ProductCreateInput) {
    return this.productsService.createProduct(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get products list',
    description: 'Get products list',
  })
  @ApiOkResponse({
    type: ProductSchema,
    isArray: true,
  })
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get product by id',
    description: 'Get product by id',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product id',
  })
  @ApiOkResponse({
    type: ProductSchema,
  })
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProduct(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update a product',
    description: 'Update a product',
  })
  @ApiOkResponse({
    type: ProductSchema,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product id',
  })
  @ApiParam({
    name: 'body',
    type: ProductSchema,
    description: 'Product data',
  })
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Prisma.ProductUpdateInput,
  ) {
    return this.productsService.updateProduct(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete product',
    description: 'Delete product',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product id',
  })
  removeProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeProduct(id);
  }
}
