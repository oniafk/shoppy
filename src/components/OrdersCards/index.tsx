import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { CheckOutOrder } from "../../interfaces/CheckOutOrder";

function OrdersCards(props: CheckOutOrder) {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border-black w-80 p-4 rounded-md border-2 mt-2">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">Date : 01-02-23</span>
          <span className="font-light">{`Total items: ${totalProducts}`}</span>
        </p>

        <p className="flex items-center justify-between gap-2">
          <span className="font-medium text-xl">{`$${totalPrice}`}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
      <p></p>
    </div>
  );
}

export { OrdersCards };
