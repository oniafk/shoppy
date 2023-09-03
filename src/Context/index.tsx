import { ReactNode, createContext } from "react";
import { useState } from "react";

import { ContextProps } from "../../src/interfaces/Context";

const ShoppingCartContext = createContext<ContextProps>({} as ContextProps);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [showProductOnDescriptionPanel, setShowProductOnDescriptionPanel] =
    useState({} as ContextProps["showProductOnDescriptionPanel"]);

  const openProductDetail = (): boolean => {
    setIsProductDetailOpen(true);
    return true;
  };
  const closeProductDetail = (): boolean => {
    setIsProductDetailOpen(false);
    return false;
  };

  console.log(isProductDetailOpen);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
