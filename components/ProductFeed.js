import Image from "next/image";
import React from "react";
import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-col-4  md:-mt-52 lg:-mt-64  z-30 ">
      {products.slice(0, 4).map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        alt="imm"
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductFeed;
