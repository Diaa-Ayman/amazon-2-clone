import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

function CartItem({
  id,
  title,
  image,
  description,
  category,
  rating,
  price,
  amount,
  totalPrice,
}) {
  const dispatch = useDispatch();
  const decreaseHandler = () => {
    dispatch(CartActions.removeItemFromCart(id));
  };
  const increaseHandler = () => {
    dispatch(
      CartActions.addItemToCart({
        id,
        title,
        image,
        description,
        category,
        rating,
        price,
      })
    );
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row items-center justify-between border-b border-gray-200 m-4 p-2 pb-4">
      <div className="grid md:grid-cols-4 space-x-3">
        {/* <div className="grid place-items-center md:flex mb-4 md:mb-0 none"> */}
        <Image src={image} height={200} width={200} objectFit="contain" />
        {/* </div> */}
        <div className="flex md:col-span-3 space-y-2 flex-col mt-4 md:mt-0">
          <span className="font-semibold">{title}</span>
          <div className="flex space-x-1">
            <StarIcon className="h-5 w-5 text-orange-500" />
            <StarIcon className="h-5 w-5 text-orange-500" />
            <StarIcon className="h-5 w-5 text-orange-500" />
          </div>
          <span className="md:w-2/4 text-xs">{description}</span>
          <span>
            $<span className="font-bold">{totalPrice}</span>
          </span>
          <div></div>
        </div>
      </div>
      <div className="flex items-center space-x-28  md:space-x-2 justify-between">
        <button
          className="button font-bold text-lg px-2 py-1"
          onClick={decreaseHandler}
        >
          -
        </button>
        <span className="font-bold text-center">{amount}</span>
        <button
          className="button font-bold text-lg px-2 py-1"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
