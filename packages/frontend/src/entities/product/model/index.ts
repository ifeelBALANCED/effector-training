import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

import { Product } from '#/shared/types';

import { productsApi } from '../lib';

export const getProductsFx = createEffect(productsApi.getProducts);

export const $products = createStore<Product[]>([]).on(
  getProductsFx.doneData,
  (_, products) => products
);
export const ProductsGate = createGate();

export const isProductLoading = getProductsFx.pending;

sample({
  source: ProductsGate.open,
  target: getProductsFx,
});

export const $categories = $products.map((products) => {
  const categoriesSet = new Set(products.map((product) => product.category));
  return Array.from(categoriesSet);
});
