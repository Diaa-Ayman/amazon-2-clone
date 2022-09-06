import React from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
function cart() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const total = totalAmount.toFixed(2);
  return (
    <Layout className="">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="cartItems bg-white p-2 m-4 flex-1">
          {items.map((item) => (
            <CartItem
              title={item.title}
              image={item.image}
              description={item.description}
              rating={item.rating}
              category={item.category}
              price={item.price}
              amount={item.amount}
              totalPrice={item.totalPrice}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
        <div className=" bg-white h-36 lg:w-56  my-4 mx-4 flex items-center flex-col p-2 justify-center space-y-4 rounded-md">
          <span>
            Subtotal (<span className="font-semibold">1 item</span>):{" "}
            <span className="font-bold">$ {total}</span>
          </span>
          <button className="button w-64 md:w-44 font-semibold ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default cart;
