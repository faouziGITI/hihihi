"use client";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Searcher() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <Form action={"/markets"} className="w-full">
      <div className="w-full h-full relative">
        <input
          className="w-full px-2.5 py-2.5 rounded-md border border-white/20 text-white outline-none hover:border-green-400 hover:text-green-400  transition-all ease-in duration-300"
          type="text"
          placeholder="e.g:Isolate"
          defaultValue={query}
        />
        <button className="w-20 h-10 absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer rounded-md text-lg font-medium border border-white/20 text-white hover:border-green-400  transition-all ease-in duration-300">
          Search
        </button>
      </div>
    </Form>
  );
}
