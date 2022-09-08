import React from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import Link from "next/link";
function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const TOTAL_AMOUNT = totalAmount.toFixed(2);
  const NO_CART_ITEMS = items.length < 1;

  return (
    <Layout className="">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="cartItems bg-white p-2 flex-1 m-4 shadow-lg rounded-md   h-[433px] overflow-auto scrollbar-hide">
          {!NO_CART_ITEMS ? (
            items.map((item) => (
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
            ))
          ) : (
            <span className="grid place-items-center font-semibold text-xl md:mt-20 py-4 md:py-2">
              Your cart is Empty!
              <Link href="/signin">
                <span className="button text-xs font-semibold cursor-pointer mt-4 px-8">
                  Sign in to your account
                </span>
              </Link>
              <span className="text-xs font-bold mt-2 text-gray-900">Or</span>
              <Link href="/signup">
                <span className="button text-xs font-semibold cursor-pointer mt-2 px-8">
                  Sign up
                </span>
              </Link>
            </span>
          )}
        </div>
        <div className=" bg-white h-36 lg:w-56  my-4 mx-4 flex items-center flex-col p-2 justify-center space-y-4 rounded-md">
          <span>
            Subtotal (
            <span className="font-semibold">{totalQuantity} item</span>):{" "}
            <span className="font-bold">$ {TOTAL_AMOUNT}</span>
          </span>
          <button className="button w-64 md:w-44 font-semibold ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
