import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

import "./style.css";

function CheckOutSideMenu(): JSX.Element {
  const context = useContext(ShoppingCartContext);

  const handleDeleteProduct = (id: number) => {
    const filteredProducts = context.shoppingCartProductsAdded.filter(
      (product) => product.id !== id
    );
    context.setShoppingCartProductsAdded(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "2021-10-10",
      products: context.shoppingCartProductsAdded,
      totalProducts: context.shoppingCartProductsAdded.length,
      totalPrice: totalPrice(context.shoppingCartProductsAdded),
    };

    context.setOrderCheckingout([...context.orderCheckingout, orderToAdd]);
    context.setShoppingCartProductsAdded([]);
  };

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckOutSideMenu()}
            className="h-6 w-6 text-grey-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="overflow-y-scroll flex-1">
        {context.shoppingCartProductsAdded.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDeleteProduct={() => handleDeleteProduct(product.id)}
            />
          );
        })}
      </div>
      <div className="p-6">
        <p className="flex justify-between items-center">
          <span className="font-light ">Total:</span>
          <span className="font-midium text-xl">
            ${totalPrice(context.shoppingCartProductsAdded).toFixed(2)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg mt-4 mb-2"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckOutSideMenu };
