import { ApiResponse, createRequest } from '#/shared/api';
import { Product } from '#/shared/types';

const getProducts = async (): Promise<ApiResponse<Product[]>> => {
  return await createRequest('/posts');
};

const createProduct = async (data: Product): Promise<ApiResponse<Product>> => {
  return await createRequest('/posts', 'post', data);
};

const getProduct = async (id: number): Promise<ApiResponse<Product>> => {
  return await createRequest(`/posts/${id}`);
};

const updateProduct = async (id: number, data: Product): Promise<ApiResponse<Product>> => {
  return await createRequest(`/posts/${id}`, 'put', data);
};

const deleteProduct = async (id: number) => {
  return await createRequest(`/posts/${id}`, 'delete');
};

export const productsApi = { createProduct, deleteProduct, getProduct, getProducts, updateProduct };
