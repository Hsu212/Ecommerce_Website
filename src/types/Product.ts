export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;          
  description: string;
  category: string;

  colors: {
    name: string;
    hex: string;
    images: string[];     
  }[];
}
