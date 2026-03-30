import CartDisplay from "./components/CartDisplay";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function CartPage() {
  return (
    <main
      className={`mt-18.25 w-full h-fit max-w-6xl mx-auto flex-1 ${montserrat.className} ${montserrat.style} p-2.5`}
    >
      <CartDisplay />
    </main>
  );
}
