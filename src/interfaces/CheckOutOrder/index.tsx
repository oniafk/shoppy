import { CardProps } from "../Card";

interface CheckOutOrder {
  date: string;
  products: CardProps[];
  totalProducts: number;
  totalPrice: number;
}

export type { CheckOutOrder };
