import { Module } from '@nestjs/common';
import { throttlerModuleConfig } from '../shared/lib';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ProductsModule } from '../common/entities/products';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    ThrottlerModule.forRootAsync(throttlerModuleConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ProductsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
