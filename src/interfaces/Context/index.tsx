import { CardProps } from "../Card";
import Product from "../../interfaces/APIResponse";
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
  items: Product[];
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
  searchByTitle: string | null;
  setSearchByTitle: React.Dispatch<React.SetStateAction<string | null>>;
  filteredItems: Product[];
  setFilteredItems: React.Dispatch<React.SetStateAction<Product[]>>;
  searchByCategory: string | null;
  setSearchByCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export type { ContextProps };
