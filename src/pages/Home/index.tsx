import React, { useContext } from "react";

import { ShoppingCartContext } from "../../Context";
import { LayOut } from "../../components/Layout";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail";

const Home: React.FC = () => {
  const context = useContext(ShoppingCartContext);

  const rederView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
          rating={item.rating}
        />
      ));
    } else {
      return context.items?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
          rating={item.rating}
        />
      ));
    }
  };

  return (
    <LayOut>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl"> Home </h1>
      </div>
      <input
        type="text"
        placeholder="Search your product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {rederView()}
      </div>
      <ProductDetail />
    </LayOut>
  );
};

export { Home };
