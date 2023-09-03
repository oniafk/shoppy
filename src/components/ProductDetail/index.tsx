import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ProductDetail(): JSX.Element {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`
      ${context.isProductDetailOpen ? "flex" : "hidden"}
       product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="h-6 w-6 text-grey-300 cursor-pointer"
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.showProductOnDescriptionPanel.image}
          alt={context.showProductOnDescriptionPanel.description}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-large text-2xl mb-2">
          {context.showProductOnDescriptionPanel.title}
        </span>
        <span className="font-medium text-xl">
          ${context.showProductOnDescriptionPanel.price}
        </span>
        <span className="font-light text-sm">
          {context.showProductOnDescriptionPanel.description}
        </span>
      </p>
    </aside>
  );
}

export { ProductDetail };
