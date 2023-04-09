import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class ProductSchema implements Prisma.ProductCreateInput {
  @ApiProperty({ type: String })
  productName: string;
  @ApiProperty({ type: String })
  category: string;
  @ApiProperty({ type: String })
  brand: string;
  @ApiProperty({ type: String })
  description: string;
  @ApiProperty({ type: Number })
  price: number;
  @ApiProperty({ type: Date })
  createdAt: Date;
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
