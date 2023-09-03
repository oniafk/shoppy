import { CardProps } from "../Card";

interface ContextProps {
  products: CardProps[];
  setProducts: React.Dispatch<React.SetStateAction<CardProps[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isProductDetailOpen: boolean;
  openProductDetail: () => boolean;
  closeProductDetail: () => boolean;
  showProductOnDescriptionPanel: CardProps;
  setShowProductOnDescriptionPanel: React.Dispatch<
    React.SetStateAction<CardProps>
  >;
}

export type { ContextProps };
