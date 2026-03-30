"use client";
import type { Categories, Category, item, product } from "@/apptypes/types";
import TempoPic from "@/public/heroPack.webp";
import categories from "@/data/market.json";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { addToCart } from "@/redux/appstore/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/appstore/storeHooks/storeHooks";

export default function Cards({ product }: { product: product }) {
  const categoriess: Categories = categories.categories;
  const category: Category = categoriess.find(
    (e) => e.id === product.category_id,
  )!;

  const item: item = {
    id: Number(product.id),
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const dispatch = useAppDispatch();

  return (
    <div className="group w-full h-full flex flex-col rounded-xl p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 transition-all duration-300 hover:border-green-400/40 hover:shadow-green-500/20">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={TempoPic}
          alt="productpng"
          quality={90}
          placeholder="blur"
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase text-green-400 tracking-wide">
            {category.name}
          </span>

          <span className="text-white/60">Stock: {product.stock}</span>
        </div>

        <Link href={`/product/${product._id}`}>
          <h1
            title={product.name}
            className="text-lg font-semibold text-white leading-tight hover:text-green-400 transition-colors"
          >
            {product.name.length > 18
              ? product.name.slice(0, 18) + "..."
              : product.name}
          </h1>
        </Link>

        <p className="text-sm text-white/70 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-xl font-bold text-green-400">
            ${product.price}
          </span>

          <button
            onClick={() => dispatch(addToCart({ item: item }))}
            className="flex items-center justify-center p-2 rounded-lg cursor-pointer bg-green-400 text-black transition-all duration-200 hover:bg-green-300 hover:scale-105 active:scale-95 shadow-md shadow-green-500/30"
          >
            <PlusIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}