import { createEffect, sample } from 'effector';
import { createForm } from 'effector-forms';

import { productsApi } from '#/entities/product/lib';

export const createProductForm = createForm({
  fields: {
    name: {
      init: '', // field's store initial value
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
          errorText: 'name is required field',
        },
      ],
    },
    price: {
      init: '0',
    },
    category: {
      init: [],
    },
    description: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => !!value,
          errorText: 'name is required field',
        },
      ],
    },
  },
  validateOn: ['change'],
});

export const createProductFx = createEffect(productsApi.createProduct);

sample({
  clock: createProductForm.formValidated,
  source: createProductFx,
  target: createProductFx,
});
