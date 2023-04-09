import { createEffect } from 'effector';

import { productsApi } from '../lib';

export const getProductsFx = createEffect(productsApi.getProducts);
