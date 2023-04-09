export type Product = {
  id?: string;
  productName: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
