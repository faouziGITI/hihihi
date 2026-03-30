import { products } from "@/apptypes/types";

export function filterProducts(
  products: products,
  query: string | undefined,
  category: string | undefined,
  minprice: string | undefined,
  maxprice: string | undefined,
) {
  let result = products;

  if (query) {
    console.log("filtering query");
    result = result.filter(
      (e) =>
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.description.toLowerCase().includes(query.toLowerCase()),
    );
    console.log(result);
  }

  if (category) {
    console.log("filtering category");

    result = result.filter((e) => e.category_id === Number(category));
    console.log(result);
  }
  if (maxprice !== undefined && Number(maxprice)) {
    console.log("filtering maxp");
    result = result.filter((e) => e.price <= Number(maxprice));
    console.log(result);
  }
  if (minprice !== undefined) {
    console.log("filtering minp");
    result = result.filter((e) => e.price >= Number(minprice));
    console.log(result);
  }

  return result;
}
