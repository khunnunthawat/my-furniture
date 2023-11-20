export interface Product {
  id: string;
  img: string;
  discount: number | null;
  newProducts: boolean;
  name: string;
  description: string;
  price: number;
  specialPrice: number | null;
}
