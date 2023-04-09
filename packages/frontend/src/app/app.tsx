import { ProductsTable } from '#/entities/product';
import { BasicLayout } from '#/shared/layout/basic';

export const Application = () => {
  return (
    <BasicLayout>
      <ProductsTable />
    </BasicLayout>
  );
};
