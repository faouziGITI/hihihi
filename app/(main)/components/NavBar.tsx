"use client";
import { Lato } from "next/font/google";
import { Store, Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleUserRound, Languages, ShoppingBasket } from "lucide-react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaPaperclip } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import Logo from "@/public/nutrlogo.png";
import Image from "next/image";
import { useState } from "react";
import { useAppSelector } from "@/redux/appstore/storeHooks/storeHooks";

const rubik = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
});

export default function NavBar() {
  const isLogedIn = useAppSelector((state) => state.userSlice.isLoggedIn);
  const cartItems = useAppSelector((state) => state.cartSlice.cart.length);
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`${theme === "dark" ? " bg-black/20" : "bg-black/20 drop-shadow-violet-400"} hidden z-999 fixed top-0 w-full h-fit p-2.5 backdrop-blur-xl drop-shadow-sm md:flex flex-row flex-nowrap items-center justify-between  ${rubik.className} ${rubik.style.fontStyle} font-medium`}
      >
        <div className="w-full h-full max-w-5xl mx-auto flex flex-row flex-nowrap items-center justify-between ">
          <div
            className={`${theme === "dark" && "drop-shadow-green-300/80 drop-shadow-md"} w-fit h-fit flex flex-nowrap items-center justify-center gap-1`}
          >
            <Image
              src={Logo}
              width={60}
              alt="NutritionMarketLogo"
              quality={75}
              placeholder="blur"
            />
            <h1 className="text-3xl text-white font-bold">NutirutioN</h1>
          </div>
          <ul className="w-fit h-full flex flex-nowrap items-center justify-center gap-2.5">
            <li>
              <Link
                className={`${pathname === "/" ? "text-white" : "text-white/40"} w-full h-fit flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-2xl font-medium border border-transparent rounded-xl px-2 py-2 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/"}
              >
                <Dumbbell size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname.startsWith("/markets") ? "text-white" : "text-white/40"} flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-xl font-medium border border-transparent rounded-xl px-2 py-1 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/markets"}
              >
                <Store size={20} />
                Markets
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/about" ? "text-white" : "text-white/40"} flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-xl font-medium border border-transparent rounded-xl px-2 py-1 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/about"}
              >
                <FaPaperclip size={20} />
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/goals" ? "text-white" : "text-white/40"} flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-xl font-medium border border-transparent rounded-xl px-2 py-1 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/goals"}
              >
                <GoGoal size={20} />
                Goals
              </Link>
            </li>
          </ul>
          <ul className="w-fit h-full flex flex-nowrap items-center justify-center gap-2.5">
            <li>
              <Link href={"/"}>
                <Languages size={30} className="text-white cursor-pointer" />
              </Link>
            </li>
            <li>
              <Link className="relative" href={"/cart"}>
                <ShoppingBasket
                  size={30}
                  className="text-white cursor-pointer"
                />
                <span className="w-4 h-4 absolute bottom-0 right-0 text-xs bg-amber-300 rounded-full text-center">
                  {cartItems}
                </span>
              </Link>
            </li>
            <li>
              {isLogedIn ? (
                <Link className={`text-white cursor-pointer`} href={"/"}>
                  <CircleUserRound size={30} />
                </Link>
              ) : (
                <Link
                  href={"/sign-up"}
                  className="w-fit px-2.5 py-1.5 rounded-md bg-green-400 text-white font-semibold"
                >
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={`${theme === "dark" ? " bg-black/20" : "bg-black/20 drop-shadow-violet-400"} flex z-999 fixed top-0 w-full h-fit p-2.5 backdrop-blur-xl drop-shadow-sm md:hidden flex-row flex-nowrap items-center justify-between  ${rubik.className} ${rubik.style.fontStyle} font-medium`}
      >
        <div
          className={`${theme === "dark" && "drop-shadow-green-300/80 drop-shadow-md"} w-fit h-fit flex flex-nowrap items-center justify-center gap-1`}
        >
          <Image
            src={Logo}
            width={60}
            alt="NutritionMarketLogo"
            quality={75}
            placeholder="blur"
          />
          <h1 className="text-3xl text-white font-bold">NutirutioN</h1>
        </div>
        <div className="w-fit h-fit flex flex-nowrap flex-row items-center gap-2.5">
          <Link className="relative" href={"/cart"}>
            <ShoppingBasket size={30} className="text-white cursor-pointer" />
            <span className="w-4 h-4 absolute bottom-0 right-0 text-xs text-white bg-amber-300 rounded-full text-center">
              {cartItems}
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen((pre) => !pre)}
            className="w-fit h-fit cursor-pointer"
          >
            <CgMenuRightAlt size={30} color="white" />
          </button>
        </div>
        <div
          className={`${mobileMenuOpen ? "left-0" : "left-full"} ${rubik.className} ${rubik.style.fontStyle} fixed top-18 z-999 w-full h-screen bg-black/80 p-2.5 backdrop-blur-xl duration-500 ease-in-out transition-all`}
        >
          <ul className="w-full h-fit flex flex-col items-start gap-1.5 mb-2.5">
            <li>
              <Link
                className={`${pathname === "/" ? "text-white" : "text-white/40"} w-full h-fit flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-2xl font-medium border border-transparent rounded-xl px-2 py-2 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/"}
              >
                <Dumbbell size={25} />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/markets" ? "text-white" : "text-white/40"} w-full h-fit flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-2xl font-medium border border-transparent rounded-xl px-2 py-2 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/markets"}
              >
                <Store size={25} />
                Markets
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/about" ? "text-white" : "text-white/40"} w-full h-fit flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-2xl font-medium border border-transparent rounded-xl px-2 py-2 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/about"}
              >
                <FaPaperclip size={25} />
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/goals" ? "text-white" : "text-white/40"} w-full h-fit flex flex-row flex-nowrap items-center gap-1 cursor-pointer text-2xl font-medium border border-transparent rounded-xl px-2 py-2 hover:text-white duration-300 ease-in-out transition-all`}
                href={"/goals"}
              >
                <GoGoal size={25} />
                Goals
              </Link>
            </li>
          </ul>
          <div className="w-full h-fit flex flex-row flex-nowrap items-center gap-2.5 justify-center">
            <button className="w-full px-2.5 py-1.5 text-xl rounded-md bg-green-400 text-white font-semibold">
              Sing In
            </button>
            <button className="w-full px-2.5 py-1.5 text-xl rounded-md bg-green-400 text-white font-semibold">
              Sing Up
            </button>
          </div>
          <div className="py-2 border-y border-white/40 my-2">
            <h4 className="font-normal text-lg text-white ">
              Choose Language:
            </h4>
            <ul className="w-full h-fit flex flex-nowrap items-center justify-center gap-2.5">
              <li className="cursor-pointer bg-white/80 text-black/80 w-fit h-fit px-2 py-1 rounded-md">
                Ar
              </li>
              <li className="cursor-pointer bg-white/80 text-black/80 w-fit h-fit px-2 py-1 rounded-md">
                Fr
              </li>
              <li className="cursor-pointer bg-white/80 text-black/80 w-fit h-fit px-2 py-1 rounded-md">
                En
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
