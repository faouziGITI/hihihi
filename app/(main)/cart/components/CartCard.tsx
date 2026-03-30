"use client";
import { item } from "@/apptypes/types";
import { useState } from "react";
import Link from "next/link";
import imaging from "@/public/isolate.webp";
import Image from "next/image";
import {
  addToCart,
  decrementQuantity,
  removeElement,
} from "@/redux/appstore/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/appstore/storeHooks/storeHooks";
import { Trash2Icon } from "lucide-react";

export default function CartCard({ cart }: { cart: item }) {
  const dispatch = useAppDispatch();
  const [quantityNum, setQuantityNum] = useState<number>(1);
  return (
    <div className="w-full h-fit grid grid-cols-[150px_1fr]  bg-white/5 border border-white/10 rounded-md p-2.5">
      <Image
        src={imaging}
        alt={`${cart.name}_png`}
        width={150}
        className="aspect-square"
        placeholder="blur"
        quality={75}
      />
      <div className="w-full h-full flex flex-col items-start gap-1.5 justify-center">
        <Link href={`/markets/product/${cart.id}`}>
          <h1 className="text-white font-semibold text-2xl">{cart.name}</h1>
        </Link>
        <h4 className="text-white font-medium text-lg">Price: {cart.price}$</h4>
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-1.5">
          <button
            className="text-white w-8 h-8 cursor-pointer hover:opacity-80  bg-white/5 border border-white/10 rounded-sm"
            onClick={() =>
              dispatch(
                decrementQuantity({ id: cart.id, quantities: quantityNum }),
              )
            }
          >
            -
          </button>
          <input
            className="w-15 outline-2 rounded-md text-white pl-1 outline-gray-400"
            type="number"
            min={1}
            value={quantityNum}
            onChange={(e) => setQuantityNum(Number(e.target.value))}
            placeholder="1"
          />
          <button
            className="text-white w-8 h-8 cursor-pointer hover:opacity-80 bg-white/5 border border-white/10 rounded-sm"
            onClick={() =>
              dispatch(addToCart({ item: cart, quantities: quantityNum }))
            }
          >
            +
          </button>
        </div>
        <span className="text-white/80 text-sm font-medium">
          Quantity: {cart.quantity}
        </span>
      </div>
      <div className="w-full h-full py-1.5 px-1.5 col-span-2">
        <button
          className="w-full h-full py-1.5 rounded-md bg-transparent border border-white/10 justify-center items-center cursor-pointer flex flex-row text-xl font-semibold text-gray-500 hover:text-red-400 hover:bg-green-100 transition-all duration-300 ease-in"
          onClick={() => dispatch(removeElement(cart))}
        >
          Remove <Trash2Icon />
        </button>
      </div>
    </div>
  );
}
