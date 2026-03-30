import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { BiTestTube } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import heroPack from "@/public/heroPackk.png";
import OnScroll from "./components/OnScroll";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default async function Home() {
  return (
    <main
      className={`${montserrat.className} ${montserrat.style} z-1 mt-18.25 md:mt-20 text-white w-full h-full flex flex-col max-w-5xl mx-auto p-2.5`}
    >
      <div className="relative grid w-fit h-fit grid-cols-1 md:grid-cols-2 items-center mb-10 gap-5">
        <OnScroll>
          <div className="w-fit h-full flex flex-col text-center md:text-left">
            <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm font-semibold italic text-white/80 uppercase tracking-wide">
              Science-Backed Nutrition for Serious Results
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-2.5">
              Fuel Your Strength.{" "}
              <span className="text-green-400 drop-shadow-[0_0_15px] drop-shadow-[rgba(34,197,94,0.8)]">
                Build Your Future.
              </span>
            </h1>
            <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-sm font-medium text-white/70 capitalize tracking-wide ">
              Premium supplements designed for
              <span className="italic text-green-400">
                {" "}
                muscle growth, fat loss, and peak performance.
              </span>
            </p>
            <div className="w-full h-fit flex flex-row flex-nowrap justify-center md:justify-start items-center gap-2 mt-2">
              <button className="w-fit h-fit font-medium uppercase text-base text-black bg-white rounded-lg px-3 py-2 cursor-pointer">
                View product
              </button>
              <button className="w-fit h-fit font-medium uppercase text-base text-white bg-green-400 rounded-lg px-3 py-2 cursor-pointer">
                get a goal
              </button>
            </div>
          </div>
        </OnScroll>
        <OnScroll>
          <div className="w-full h-full relative drop-shadow-xl drop-shadow-black">
            <div className="absolute left-1/2 top-1/2 z-[-1] -translate-1/2 bg-transparent w-xs h-10 backdrop-blur-2xl shadow-green-400 shadow-[0px_0px_470px_40px]"></div>
            <Image
              src={heroPack}
              alt="HeroPackPng"
              className="w-full h-full max-w-lg justify-self-center z-10 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              placeholder="blur"
            />
          </div>
        </OnScroll>
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        <OnScroll>
          <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-sm drop-shadow-green-200 backdrop-blur-lg">
            <h2 className="text-xl font-bold text-white flex flex-row flex-nowrap items-center gap-1">
              <HiBadgeCheck size={25} color="white" />
              Guarantee
            </h2>
            <p className="text-sm">
              Your performance matters to us. If you're not completely satisfied
              with your purchase, we offer a hassle-free money-back guarantee.
            </p>
          </div>
        </OnScroll>
        <OnScroll>
          <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-sm drop-shadow-green-200 backdrop-blur-lg">
            <h2 className="text-xl font-bold text-white flex flex-row flex-nowrap items-center gap-1">
              {" "}
              <BiTestTube size={25} color="white" />
              Lab Tested
            </h2>
            <p className="text-sm">
              Every product we offer is independently tested in certified
              laboratories to ensure purity, potency, and safety.Train hard —
              we've got your back.
            </p>
          </div>
        </OnScroll>
        <OnScroll>
          <div className="w-full h-full text-center flex flex-col items-center justify-center gap-1 bg-white/10 rounded-md p-5 drop-shadow-sm drop-shadow-green-200 backdrop-blur-lg">
            <h2 className="text-xl font-bold text-white flex flex-row flex-nowrap items-center gap-1">
              {" "}
              <FaShippingFast size={25} color="white" />
              Free Shipping
            </h2>
            <p className="text-sm">
              Fuel your progress without extra costs. Enjoy fast and secure
              delivery on all orders over $50 — because investing in your health
              shouldn't come with hidden fees
            </p>
          </div>
        </OnScroll>
      </div>
    </main>
  );
}
