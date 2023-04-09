import { createRequest } from '#/shared/api';
import { Product } from '#/shared/types';

const getProducts = async (): Promise<Product[]> => {
  const res = await createRequest<Product[]>('/products');
  return res.data;
};

const createProduct = async (data: Product): Promise<Product> => {
  const res = await createRequest<Product, Product>('/products', 'post', data);
  return res.data;
};

const getProduct = async (id: number): Promise<Product> => {
  const res = await createRequest<Product>(`/products/${id}`);
  return res.data;
};

const updateProduct = async (id: number, data: Product): Promise<Product> => {
  const res = await createRequest<Product, Product>(`/products/${id}`, 'put', data);

  return res.data;
};

const deleteProduct = async (id: number) => {
  const res = await createRequest(`/products/${id}`, 'delete');
  return res.data;
};

export const productsApi = { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
