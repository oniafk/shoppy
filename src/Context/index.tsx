import { ReactNode, createContext } from "react";
import { useState } from "react";

import { ContextProps } from "../../src/interfaces/Context";

const ShoppingCartContext = createContext<ContextProps>({} as ContextProps);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [showProductOnDescriptionPanel, setShowProductOnDescriptionPanel] =
    useState({} as ContextProps["showProductOnDescriptionPanel"]);

  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);

  const [shoppingCartProductsAdded, setShoppingCartProductsAdded] = useState(
    [] as ContextProps["shoppingCartProductsAdded"]
  );

  const [orderCheckingout, setOrderCheckingout] = useState<
    ContextProps["orderCheckingout"]
  >([]);

  const openProductDetail = (): boolean => {
    setIsProductDetailOpen(true);
    return true;
  };
  const closeProductDetail = (): boolean => {
    setIsProductDetailOpen(false);
    return false;
  };

  const openCheckOutSideMenu = () => {
    setIsCheckOutSideMenuOpen(true);
    return true;
  };

  const closeCheckOutSideMenu = () => {
    setIsCheckOutSideMenuOpen(false);
    return false;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        products: [],
        setProducts: () => {},
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        showProductOnDescriptionPanel,
        setShowProductOnDescriptionPanel,
        shoppingCartProductsAdded,
        setShoppingCartProductsAdded,
        isCheckOutSideMenuOpen,
        setIsCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        orderCheckingout,
        setOrderCheckingout,
        checkOutOrder: {} as ContextProps["checkOutOrder"],
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
