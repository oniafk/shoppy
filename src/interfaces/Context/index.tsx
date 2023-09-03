import { CardProps } from "../Card";

interface ContextProps {
  products: CardProps[];
  setProducts: React.Dispatch<React.SetStateAction<CardProps[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export type { ContextProps };
