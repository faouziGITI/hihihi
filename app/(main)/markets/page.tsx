import { product, products, searchparam } from "@/apptypes/types";
import Searcher from "./components/Search";
import { filterProducts } from "@/lib/fun";
import GridCards from "./components/GridCards";
import Filtering from "./components/Filter";

export default async function Markets({
  searchParams,
}: {
  searchParams: Promise<searchparam>;
}) {
  //JSON file fetch dont forget to do json-server --w -port 5000 ./data/market.json
  // make sure the port is 5000 so it can run as expected
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  //BACkEND FETCH

  // const res = await fetch(`http://localhost:5000/api/products/${id}`, {
  //   cache: "no-store",
  // });
  const products: products = await res.json();
  const { query, category, minprice, maxprice } = await searchParams;

  const filtredProduct = filterProducts(
    products,
    query,
    category,
    minprice,
    maxprice,
  );
  const condition = products.every((e) => filtredProduct.includes(e));
  console.log(condition);

  return (
    <main className="mt-18.25 text-white w-full h-full max-w-6xl mx-auto p-2.5">
      <h1 className={`text-white text-5xl text-center mb-10 font-medium`}>
        Discover Our Markets:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-5">
        <div className="w-full h-fit flex flex-row flex-nowrap relative sm:flex-col gap-2.5 sm:sticky sm:top-24">
          <Searcher />
          <Filtering />
        </div>
        {query && query.length > 0 ? <h4>Search: {query}</h4> : null}
        <GridCards products={condition ? products : filtredProduct} />
      </div>
    </main>
  );
}
