import { createEffect, restore, sample } from 'effector';
import { createGate } from 'effector-react';

import { createProductModel } from '#/entities';
import { Product } from '#/shared/types';

import { productsApi } from '../lib';

export const getProductsFx = createEffect(productsApi.getProducts);

export const $products = restore<Product[]>(getProductsFx.doneData, []);

export const $categories = $products.map((products) => {
  const categoriesSet = new Set(products.map((product) => product.category));
  return Array.from(categoriesSet);
});

export const isProductsLoading = getProductsFx.pending;
export const ProductsGate = createGate();

// TODO: add logic in case when fields are empty
sample({
  clock: createProductModel.createProductForm.submit,
  target: getProductsFx,
});

sample({
  source: ProductsGate.open,
  target: getProductsFx,
});
