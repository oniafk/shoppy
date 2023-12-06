import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

import Product from "../../src/interfaces/APIResponse";

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

  //Get products

  const [items, setItems] = useState<Product[]>([]);

  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  const [searchByTitle, setSearchByTitle] = useState<string | null>(null);

  const [searchByCategory, setSearchByCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (
    items: Product[],
    searchByTitle: string | null
  ): Product[] => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle?.toLowerCase() ?? "")
    );
  };

  const filteredItemsByCategory = (
    items: Product[],
    searchByCategory: string | null
  ): Product[] => {
    return items?.filter((item) =>
      item.category
        .toLowerCase()
        .includes(searchByCategory?.toLowerCase() ?? "")
    );
  };

  const filteredBy = (
    searchType: string | null,
    items: Product[],
    searchByTitle: string | null,
    searchByCategory: string | null
  ): Product[] => {
    if (searchType === "title") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "category") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "title_and_category") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle?.toLowerCase() ?? "")
      );
    }

    return items;
  };

  useEffect(() => {
    if (searchByTitle) {
      const filteredItems = filteredItemsByTitle(items, searchByTitle);
      setFilteredItems(filteredItems);
    }
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filteredBy("title_and_category", items, searchByTitle, searchByCategory)
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filteredBy("title", items, searchByTitle, searchByCategory)
      );
    }
    if (searchByCategory && !searchByTitle) {
      setFilteredItems(
        filteredBy("category", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(
        filteredBy(null, items, searchByTitle, searchByCategory)
      );
    }
  }, [items, searchByTitle, searchByCategory]);

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
