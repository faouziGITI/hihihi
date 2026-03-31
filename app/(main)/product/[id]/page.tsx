import { NutritionFacts, ProductById } from "@/apptypes/types";
import JsonDumm from "@/data/market.json";
import Image from "next/image";
import isolate from "@/public/isolate.webp";
import Link from "next/link";
import { CheckCircle2, Star, StarHalf } from "lucide-react";
import Plans from "@/app/(main)/components/Plans";
import type { item } from "@/apptypes/types";
import { AddToCartButton } from "../component/AddToCartButton";

export default async function productPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    cache: "no-store",
  });
  const product: ProductById = await res.json();

  const item: item = {
    id: Number(product.id),
    name: product.name,
    price: product.price,
    image: product.image ?? "/isolate.webp", // ✅ single image
    quantity: 1,
  };

  const nutKeys = Object.keys(
    product.nutritionFacts ?? {}
  ) as (keyof NutritionFacts)[];

  const goals = JsonDumm.goals.filter((e) =>
    e.productIds.includes(Number(product.id)),
  );

  return (
    <main className="mt-20 max-w-6xl mx-auto px-3 text-white flex flex-col gap-16">
      <section className="grid md:grid-cols-2 gap-10">
        <div className="flex gap-4">
          {/* ✅ Single thumbnail */}
          <div className="flex flex-col gap-3">
            <Image
              src={product.image ?? isolate}
              alt={product.name}
              width={90}
              height={90}
              className="rounded-lg border border-white/10 p-1 cursor-pointer hover:border-green-400 transition"
            />
          </div>

          {/* ✅ Main image */}
          <Image
            src={product.image ?? isolate}
            alt={product.name}
            width={420}
            height={420}
            className="rounded-xl border border-white/10 shadow-lg shadow-green-400/10"
          />
        </div>

        <div className="space-y-5">
          <ul className="flex gap-2 text-sm text-white/50">
            <li>
              <Link href="/">NutritioN</Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/markets">Markets</Link>
            </li>
            <li>&gt;</li>
            <li className="text-white">{product.name}</li>
          </ul>

          <h1 className="text-4xl font-bold">{product.name}</h1>

          <div className="flex flex-wrap gap-6 items-center text-sm">
            <p className="text-white/70">Brand: {product.brand}</p>

            <div className="flex items-center gap-1">
              <span>{product.rating}</span>

              {product.rating && product.rating % 1 === 0 ? (
                [...Array(Math.max(0, product.rating))].map((_, i) => (
                  <Star key={i} size={15} color="yellow" fill="yellow" />
                ))
              ) : product.rating ? (
                <>
                  {[...Array(Math.max(0, Math.floor(product.rating)))].map((_, i) => (
                    <Star key={i} size={15} color="yellow" fill="yellow" />
                  ))}
                  <StarHalf size={15} color="yellow" fill="yellow" />
                </>
              ) : null}
            </div>
          </div>

          <div className="flex gap-2">
            {product.category && (
              <span
                title="category"
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10"
              >
                {product.category}
              </span>
            )}

            {product.subCategory && (
              <span
                title="subcategory"
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-green-400/40"
              >
                {product.subCategory}
              </span>
            )}
          </div>

          <p className="text-white/80">{product.shortDescription}</p>

          <span
            className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${
              product.stock
                ? "bg-green-400 text-black"
                : "bg-red-400 text-black"
            }`}
          >
            {product.stock ? "Available" : "Sold Out"}
          </span>

          <div className="text-4xl font-bold text-green-400">
            ${product.price}
          </div>

          {product.reviewsCount && (
            <span className="text-sm text-white/60 italic">
              {Math.floor((product.rating * product.reviewsCount) / 5)} of{" "}
              {product.reviewsCount} satisfied reviews
            </span>
          )}

          <AddToCartButton item={item} />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Highlights</h2>

          <ul className="space-y-2">
            {(product.highlights ?? []).map((e: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-white/80">
                <CheckCircle2 size={18} className="text-green-400" />
                {e}
              </li>
            ))}
          </ul>

          {product.ingredients?.length > 0 && (
            <>
              <h3 className="text-xl font-semibold">Ingredients</h3>
              <ul className="space-y-1 text-white/70">
                {product.ingredients.map((e: string, i: number) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </>
          )}

          <h3 className="text-xl font-semibold">Why {product.name}?</h3>

          <p className="text-white/80">{product.longDescription?.intro}</p>

          {product.longDescription?.sections?.map((e, i: number) => (
            <div key={i}>
              <h4 className="font-semibold text-green-400">{e.title}</h4>
              <p className="text-white/70">{e.content}</p>
            </div>
          ))}

          <p className="italic text-white/60">
            {product.longDescription?.conclusion}
          </p>
        </div>

        <div className="sticky top-24 h-fit bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Nutritional Facts</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/60">
                <th className="text-left py-2">Value</th>
                <th>100g</th>
                <th>30g</th>
              </tr>
            </thead>
            <tbody>
              {nutKeys.map((e, i: number) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-2">{e.toUpperCase()}</td>
                  <td>{product.nutritionFacts?.[e]}</td>
                  <td>{product.nutritionFacts?.[e]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-white/10 pt-10">
        <h2 className="text-2xl font-semibold mb-6">Recommended Goals</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((e) => (
            <Plans key={e.id} goal={e} />
          ))}
        </div>
      </section>
    </main>
  );
}