import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { CardProps } from "../../interfaces/Card";

function Card(Props: CardProps) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail: CardProps) => {
    context.openProductDetail();
    context.setShowProductOnDescriptionPanel(productDetail);
  };

  const addProductToShoppingCart = (productInfo: CardProps) => {
    context.setCount(context.count + 1);
    context.setShoppingCartProductsAdded([
      ...context.shoppingCartProductsAdded,
      productInfo,
    ]);

    context.openCheckOutSideMenu();
    console.log(context.shoppingCartProductsAdded);
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 mb-2">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {Props.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={Props.image}
          alt={Props.description}
          onClick={() => showProduct(Props)}
        />
        <div
          onClick={() => addProductToShoppingCart(Props)}
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 text-white"
        >
          <PlusIcon className="h-6 w-6 text-black-500" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{Props.title}</span>
        <span className="text-md font-medium">${Props.price}</span>
      </p>
    </div>
  );
}

export { Card };
