import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ product }) {
  const { id, title, image, category, price, description } = product;
  const [added, setAdded] = useState(false);
  const PRICE = price.toFixed(2);
  const [rating, setRating] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);

  const addToCartHandler = () => {
    dispatch(
      CartActions.addItemToCart({
        id,
        title,
        image,
        category,
        price: PRICE,
        description,
      })
    );
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col space-y-3 px-2 py-4 m-4 font-semibold z-30 bg-white relative rounded-md shadow-md">
      <span className=" capitalize text-xs font-bold text-gray-500 italic right-0 top-0 absolute mr-2 mb-2">
        {category}
      </span>
      <div className="text-center">
        <Image
          src={image}
          alt="product_Image"
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <span className="line-clamp-1">{title}</span>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((rate, index) => (
            <StarIcon className="h-5 w-5 text-orange-500" key={index} />
          ))}
      </div>
      <span className="text-xs line-clamp-2 my-2">{description}</span>
      <span className="font-bold">${PRICE}</span>
      <button className="mt-auto button mx-4" onClick={addToCartHandler}>
        {added ? (
          <span className="text-red-500 animate-pulse">Added To Cart</span>
        ) : (
          <span>Add To Cart</span>
        )}
      </button>
    </div>
  );
}

export default Product;
