"use client";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/redux/appstore/storeHooks/storeHooks";
import { addToCart } from "@/redux/appstore/cartSlice/cartSlice";
import { item } from "@/apptypes/types";

export const AddToCartButton = ({ item }: { item: item }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(addToCart({ item }))}
      className="w-full h-fit my-2.5 text-xl font-medium text-white bg-green-400 py-2.5 px-1.5 rounded-md flex flex-row flex-nowrap items-center justify-center gap-2.5 cursor-pointer"
    >
      Add to cart <ShoppingCart size={20} />
    </button>
  );
};
