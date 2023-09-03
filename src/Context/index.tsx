import { ReactNode, createContext } from "react";
import { useState } from "react";

import { ContextProps } from "../../src/interfaces/Context";

const ShoppingCartContext = createContext<ContextProps>({} as ContextProps);

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        products: [],
        setProducts: () => {},
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
