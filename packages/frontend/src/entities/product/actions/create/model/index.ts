import { createEffect, sample } from 'effector';
import { createForm } from 'effector-forms';

import { productsApi } from '#/entities/product/lib';

export const createProductForm = createForm({
  fields: {
    productName: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => !!value,
          errorText: 'name is required field',
        },
      ],
    },
    brand: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => !!value,
          errorText: 'brand is required field',
        },
      ],
    },
    price: {
      init: 0,
    },
    category: {
      init: 'PC',
    },
    description: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => !!value,
          errorText: 'description is required field',
        },
      ],
    },
  },
  validateOn: ['change'],
});

export const createProductFx = createEffect(productsApi.createProduct);

sample({
  clock: createProductForm.formValidated,
  target: createProductFx,
});

sample({
  clock: createProductFx.done,
  target: createProductForm.reset,
});
