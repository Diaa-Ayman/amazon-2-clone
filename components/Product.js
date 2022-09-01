import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ product }) {
  const { id, title, image, category, price, description } = product;
  const [rating, setRating] = useState();

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);
  return (
    <div className="flex flex-col space-y-2 p-2 m-4 font-semibold z-30 bg-white relative">
      <span className="text-xs font-bold text-gray-500 italic right-0 top-0 absolute mr-2">
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
      <span className="font-bold">${price}</span>
      <button className="mt-auto button">Add To Cart</button>
    </div>
  );
}

export default Product;
