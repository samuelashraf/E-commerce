export interface Icart {
  item: {
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
  };
  quantity: number;
}
