import { LayOut } from "../../components/Layout";
import { OrdersCards } from "../../components/OrdersCards";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <LayOut>
      <div className="flex w-80 item-center relative justify-center">
        <h1 className="font-medium text-xl mb-4">My Orders</h1>
      </div>

      {context.orderCheckingout.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCards
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice.toFixed(2)}
            />
          </Link>
        );
      })}
    </LayOut>
  );
}

export { MyOrders };
