export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  discountPercent?: number;

  colors: {
    name: string;
    hex: string;
    images: string[];
  }[];

  selectedColor?: {
    name: string;
    hex: string;
    image?: string;
  };
}
