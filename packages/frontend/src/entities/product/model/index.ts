import { createEffect, createStore } from 'effector';

import { Product } from '#/shared/types';

import { productsApi } from '../lib';

export const getProductsFx = createEffect(productsApi.getProducts);

export const $products = createStore<Product[]>([]).on(
  getProductsFx.doneData,
  (_, products) => products
);

getProductsFx.doneData.watch(console.log);

await getProductsFx();
