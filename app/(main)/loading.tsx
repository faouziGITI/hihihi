import Image from "next/image";
import Logo from "@/public/nutrlogo.png";

export default function Loading() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center z-999 bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <Image
          src={Logo}
          alt="LogoLoading"
          width={200}
          height={200}
          quality={100}
        />
      </div>
    </div>
  );
}
