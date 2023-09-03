import React, { useState, useEffect } from "react";

import { LayOut } from "../../components/Layout";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail";

import Product from "../../interfaces/APIResponse";

const Home: React.FC = () => {
  const [items, setItems] = useState<Product[] | null>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  return (
    <LayOut>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
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
        ))}
      </div>
      <ProductDetail />
    </LayOut>
  );
};

export { Home };
