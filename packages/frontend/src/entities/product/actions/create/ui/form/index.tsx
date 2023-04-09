import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { FormEvent } from 'react';

import { createProductModel, productsModel } from '#/entities/product';
import { FormInput, FormSelect, FormTextarea } from '#/shared/ui';

export const CreateProductForm = () => {
  const { fields, submit, eachValid, errorText } = useForm(createProductModel.createProductForm);
  const pending = useStore(productsModel.isProductsLoading);
  const categories = useStore(productsModel.$categories);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <FormInput
          id={fields.productName.value}
          label="Name"
          placeholder="Product Name"
          errors={errorText('productName')}
          value={fields.productName.value}
          name={fields.productName.name}
          onChange={(e) => fields.productName.onChange(e.target.value)}
        />
        <FormInput
          id={fields.brand.value}
          label="Brand"
          placeholder="Product Brand"
          errors={errorText('brand')}
          value={fields.brand.value}
          name={fields.brand.name}
          onChange={(e) => fields.brand.onChange(e.target.value)}
        />
        <FormInput
          id={fields.price.value?.toString()}
          label="Price"
          placeholder="0"
          errors={errorText('price')}
          type="number"
          value={fields.price.value}
          name={fields.price.name}
          onChange={(e) => fields.price.onChange(Number(e.target.value))}
        />
        <FormSelect
          id={fields.category.name}
          name={fields.category.name}
          value={fields.category.value}
          label="Categories"
          options={categories}
          onChange={(e) => fields.category.onChange(e.target.value)}
        />
        <FormTextarea
          id={fields.description.name}
          name={fields.description.name}
          errors={errorText('description')}
          label="Description"
          value={fields.description.value}
          onChange={(e) => fields.description.onChange(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={!eachValid || pending}
        className="bg-primary text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <svg
          className="mr-1 -ml-1 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        {pending ? 'Creating...' : 'Add new product'}
      </button>
    </form>
  );
};
