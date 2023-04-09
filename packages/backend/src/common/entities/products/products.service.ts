import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async createProduct(body: Prisma.ProductCreateInput) {
    const product = await this.prisma.product.create({ data: body });

    return product;
  }

  async getAllProducts() {
    const products = await this.prisma.product.findMany();
    if (!products) throw new NotFoundException('No products found');
    return products;
  }

  async getProduct(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('No product found');
    return product;
  }

  async updateProduct(id: number, body: Prisma.ProductUpdateInput) {
    const product = await this.prisma.product.update({
      where: { id },
      data: body,
    });
    if (!product) {
      throw new NotFoundException('No product found');
    }
    return product;
  }

  async removeProduct(id: number) {
    const product = await this.prisma.product.delete({ where: { id } });
    if (!product) {
      throw new NotFoundException('No product found');
    }

    return product;
  }
}
