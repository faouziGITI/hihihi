"use client";
import Form from "next/form";
import type { Categories, Category } from "@/apptypes/types";
import categoriess from "@/data/market.json";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Filter } from "lucide-react";

export default function Filtering() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const categories: Categories = categoriess.categories;
  const category = searchParams.get("category") || "";
  const minprice = searchParams.get("minprice") || "";
  const maxprice = searchParams.get("maxprice") || "";
  const [show, setShow] = useState<boolean>(false);

  function hundleFilters(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div
        className={`w-xs sm:w-full h-fit hidden sm:flex flex-col p-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition`}
      >
        <Form action={"/markets"}>
          <label htmlFor="category" className="text-lg font-medium text-white">
            Category:
          </label>
          <select
            name="category"
            id="category"
            defaultValue={category}
            onChange={(e) => hundleFilters("category", e.target.value)}
            className="w-full h-fit px-2.5 py-3 rounded-sm outline-none border mb-2.5 cursor-pointer border-white/10 bg-white/5 text-white "
          >
            <option className="text-black" value={""}>
              All
            </option>
            {categories && categories.length > 0
              ? categories.map((category: Category) => (
                  <option
                    key={category.id}
                    className="text-black"
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))
              : null}
          </select>
          <div className="w-full h-fit flex flex-row items-center justify-between gap-1.5">
            <div className="w-fit h-fit flex flex-col items-start gap-0.5">
              <label
                htmlFor="maxprice"
                className="text-lg font-medium text-white "
              >
                Max Price
              </label>
              <input
                type="text"
                placeholder="10000"
                className="w-full py-1.5 px-2 outline-none  bg-white/5 backdrop-blur-md border border-white/5 rounded-md hover:border-green-400/40 transition"
                name="maxprice"
                max={10000}
                defaultValue={maxprice}
                onChange={(e) => hundleFilters("maxprice", e.target.value)}
              />
            </div>
            <div className="w-fit h-fit flex flex-col items-start gap-0.5">
              <label
                htmlFor="minprice"
                className="text-lg font-medium text-white "
              >
                Min Price
              </label>
              <input
                type="text"
                className="w-full py-1.5 px-2 outline-none  bg-white/5 backdrop-blur-md border border-white/5 rounded-md hover:border-green-400/40 transition"
                name="minprice"
                placeholder="20"
                min={0}
                defaultValue={minprice}
                onChange={(e) => hundleFilters("minprice", e.target.value)}
              />
            </div>
          </div>
        </Form>
      </div>
      <div className={` w-fit h-fit sm:hidden flex`}>
        <button
          onClick={() => setShow(!show)}
          className="w-full px-2.5 py-2.5 bg-white/5 backdrop-blur-md border border-white/5 rounded-md hover:border-green-400/40 transition"
        >
          <Filter size={25} className="text-white" />
        </button>
        {show && (
          <Form
            className="absolute z-999 top-35 left-1/2 -translate-1/2  w-full sm:w-full h-fit flex flex-col p-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition"
            action={"/markets"}
          >
            <label
              htmlFor="category"
              className="text-lg font-medium text-white"
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              onChange={(e) => hundleFilters("category", e.target.value)}
              className="w-full h-fit px-2.5 py-3 rounded-sm outline-none border mb-2.5 cursor-pointer border-white/10 bg-white/5 text-white "
            >
              <option className="text-black" value={""}>
                All
              </option>
              {categories && categories.length > 0
                ? categories.map((category: Category) => (
                    <option
                      key={category.id}
                      className="text-black"
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))
                : null}
            </select>
            <div className="w-full h-fit flex flex-row items-center justify-between gap-1.5">
              <div className="w-fit h-fit flex flex-col items-start gap-0.5">
                <label
                  htmlFor="maxprice"
                  className="text-lg font-medium text-white "
                >
                  Max Price
                </label>
                <input
                  type="text"
                  placeholder="10000"
                  className="w-full py-1.5 px-2 outline-none  bg-white/5 backdrop-blur-md border border-white/5 rounded-md hover:border-green-400/40 transition"
                  name="maxprice"
                  max={10000}
                  onChange={(e) => hundleFilters("maxprice", e.target.value)}
                />
              </div>
              <div className="w-fit h-fit flex flex-col items-start gap-0.5">
                <label
                  htmlFor="minprice"
                  className="text-lg font-medium text-white "
                >
                  Min Price
                </label>
                <input
                  type="text"
                  className="w-full py-1.5 px-2 outline-none  bg-white/5 backdrop-blur-md border border-white/5 rounded-md hover:border-green-400/40 transition"
                  name="minprice"
                  placeholder="20"
                  min={0}
                  onChange={(e) => hundleFilters("minprice", e.target.value)}
                />
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
}
