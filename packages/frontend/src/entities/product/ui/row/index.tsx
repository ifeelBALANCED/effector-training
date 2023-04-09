import { useStore } from 'effector-react';
import { memo } from 'react';

import { DeleteProduct, PreviewProduct, productsModel, UpdateProduct } from '#/entities/product';
import { RowSkeleton } from '#/entities/product/ui/row/row-skeleton';
import { Product } from '#/shared/types';

export const TableRow = memo(({ productName, category, brand, description, price }: Product) => {
  const isLoading = useStore(productsModel.isProductsLoading);

  if (isLoading) {
    return <RowSkeleton />;
  }
  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {productName}
      </th>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">{brand}</td>
      <td className="px-4 py-3 max-w-[12rem] truncate">{description}</td>
      <td className="px-4 py-3">${price}</td>
      <td className="flex items-center">
        <div className="py-3 px-4 flex items-center w-full justify-around">
          <UpdateProduct />
          <PreviewProduct />
          <DeleteProduct />
        </div>
      </td>
    </tr>
  );
});

TableRow.displayName = 'TableRow';
