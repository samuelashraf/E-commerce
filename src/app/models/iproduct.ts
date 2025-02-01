export interface Iproduct {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: {
    rate: string;
    count: number;
  };
  description: string;
  image: string;
}
