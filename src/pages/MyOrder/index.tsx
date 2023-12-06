import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";
import { CheckOutCardProps } from "../../interfaces/CheckOutCard";

import { LayOut } from "../../components/Layout";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index: number | string = currentPath.substring(
    currentPath.lastIndexOf("/") + 1
  );

  if (context.orderCheckingout) {
    if (index === "last") index = context.orderCheckingout.length - 1;
  }

  return (
    <LayOut>
      <div className="flex w-80 item-center relative justify-center mb-2">
        <Link to="/my-orders" className="absolute left-0 ">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer " />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.orderCheckingout?.length ? (
          context.orderCheckingout[Number(index)]?.products?.map(
            (product: CheckOutCardProps) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            )
          )
        ) : (
          <p className="text-lg mx-auto mt-10">
            You have not placed any order 😥
          </p>
        )}
      </div>
    </LayOut>
  );
}

export { MyOrder };
