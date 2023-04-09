import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { FormEvent } from 'react';

import { productsModel } from '#/entities/product';
import { createProductForm } from '#/entities/product/actions/create/model';
import { FormInput } from '#/shared/ui';
import { FormSelect } from '#/shared/ui/form-elements/select';
import { FormTextarea } from '#/shared/ui/form-elements/textarea';

export const CreateProductForm = () => {
  const { fields, submit, eachValid, errorText } = useForm(createProductForm);
  const pending = useStore(productsModel.isProductLoading);
  const categories = useStore(productsModel.$categories);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <FormInput
          id={fields.name.value}
          label="Name"
          placeholder="Product Name"
          errors={errorText('name')}
          value={fields.name.value}
          name={fields.name.name}
          onChange={(e) => fields.name.onChange(e.target.value)}
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
          id={fields.price.value}
          label="Price"
          placeholder="0"
          errors={errorText('price')}
          type="number"
          value={fields.price.value}
          name={fields.price.name}
          onChange={(e) => fields.price.onChange(e.target.value)}
        />
        <FormSelect
          id={fields.category.name}
          name={fields.category.name}
          label="Categories"
          options={categories}
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
        Add new product
      </button>
    </form>
  );
};
