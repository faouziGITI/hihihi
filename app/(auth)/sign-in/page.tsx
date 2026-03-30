import { Montserrat } from "next/font/google";
import Logo from "@/public/nutrlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function SignIn() {
  return (
    <main
      className={`min-h-screen w-full flex items-center justify-center p-4 ${montserrat.className}`}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transition-all">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={90}
              height={90}
              className="drop-shadow-lg"
            />
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase mt-2">
              Welcome Back
            </h2>
            <p className="text-emerald-100/80 font-medium text-sm text-center">
              Enter your information to access your dashboard
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <label
                className="text-sm sm:text-lg font-semibold text-white/90 ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label
                className="text-sm sm:text-lg font-semibold text-white/90 ml-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2 text-white/80 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-white/20 bg-white/10 accent-green-500"
              />
              Remember me
            </label>
            <Link
              href="/"
              className="text-emerald-300 hover:text-emerald-100 transition-colors font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full py-3.5 bg-green-500/80 hover:bg-green-400 cursor-pointer text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all active:scale-[0.98] uppercase tracking-wide">
            Login
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-white/40 backdrop-blur-sm">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="text-sm sm:text-lg flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
            <FaGoogle color="ff6467" /> Google
          </button>
          <button className="text-sm sm:text-lg flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
            <FaFacebook color="#51a2ff" /> Facebook
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-green-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
