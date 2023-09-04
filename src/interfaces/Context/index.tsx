import { CardProps } from "../Card";
import { CheckOutOrder } from "../CheckOutOrder";

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
  shoppingCartProductsAdded: CardProps[];
  setShoppingCartProductsAdded: React.Dispatch<
    React.SetStateAction<CardProps[]>
  >;
  isCheckOutSideMenuOpen: boolean;
  setIsCheckOutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openCheckOutSideMenu: () => boolean;
  closeCheckOutSideMenu: () => boolean;
  orderCheckingout: CheckOutOrder[] | [];
  setOrderCheckingout: React.Dispatch<React.SetStateAction<CheckOutOrder[]>>;
  checkOutOrder: CheckOutOrder;
}

export type { ContextProps };
