import { useAppSelector } from "@/redux/appstore/storeHooks/storeHooks";

export default function Checkout() {
  const cart = useAppSelector((state) => state.cartSlice.cart);
  const price = useAppSelector((state) => state.cartSlice.price);
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="w-full h-fit md:sticky md:top-24  bg-white/5 border border-white/10 rounded-md p-6">
      <h1 className="text-2xl font-medium text-white self-center uppercase text-center">
        Your Bill:
      </h1>
      <div className="w-full h-fit flex flex-row items-center justify-between my-1 border-b border-gray-400 pb-1">
        <h3 className="text-xl font-medium text-white/80">Total Items:</h3>
        <span className="text-xl font-bold text-white">{cart.length}</span>
      </div>
      <div className="w-full h-fit flex flex-row items-center justify-between my-1 border-b border-gray-400 pb-1">
        <h3 className="text-xl font-medium text-white/80">Total Quantity:</h3>
        <span className="text-xl font-bold text-white">{totalQuantity}</span>
      </div>
      <div className="w-full h-fit flex flex-row items-center justify-between my-1 border-b border-gray-400 pb-1">
        <h3 className="text-xl font-medium text-white/80">Total Price:</h3>
        <span className="text-xl font-bold text-white">
          {price.toFixed(2)}$
        </span>
      </div>
      <button className="w-full  border border-green-200/40 hover:border-green-400  hover:bg-green-400 text-white hover:text-black drop-shadow-md drop-shadow-gree-200 transition-all ease-in duration-300 cursor-pointer self-center font-bold py-2 px-4 rounded mt-1.5">
        Proceed to Checkout
      </button>
    </div>
  );
}
