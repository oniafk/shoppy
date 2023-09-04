import { XMarkIcon } from "@heroicons/react/24/solid";

import { CheckOutCardProps } from "../../interfaces/CheckOutCard";

function OrderCard(props: CheckOutCardProps): JSX.Element {
  const { title, image, price, id, handleDeleteProduct } = props;

  let renderXMarkIcon;

  if (handleDeleteProduct) {
    renderXMarkIcon = (
      <div>
        <XMarkIcon
          onClick={() => handleDeleteProduct()}
          className="h-6 w-6 text-grey-300 cursor-pointer "
        />
      </div>
    );
  } else {
  }

  return (
    <div className="flex justify-between items-center p-3 ">
      <div className="flex items-center gap-2 ">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex flex-col justify-end items-end">
        {renderXMarkIcon}

        <p className=" text-lg font-medium flex items-center justify-between">
          {`$${price}`}
        </p>
      </div>
    </div>
  );
}

export { OrderCard };
