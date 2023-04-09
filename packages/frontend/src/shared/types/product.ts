export type Product = {
  productName: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
