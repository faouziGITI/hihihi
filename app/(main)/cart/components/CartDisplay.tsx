"use client";

import { useAppSelector } from "@/redux/appstore/storeHooks/storeHooks";
import { ShoppingBag } from "lucide-react";
import CartCard from "./CartCard";
import Checkout from "./Checkout";

export default function CartDisplay() {
  const cart = useAppSelector((state) => state.cartSlice.cart);

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="w-full h-full grid grid-cols-1 gap-2.5">
            {cart.map((e) => (
              <CartCard key={e.id} cart={e} />
            ))}
          </div>
          <Checkout />
        </div>
      ) : (
        <div className="mt-5 w-full h-fit flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-medium text-white">
            Your Cart is Empty!
          </h1>
          <ShoppingBag size={50} color={"orange"} />
        </div>
      )}
    </>
  );
}
