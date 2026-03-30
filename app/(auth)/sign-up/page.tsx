import { Montserrat } from "next/font/google";
import Logo from "@/public/nutrlogo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function SignUp() {
  return (
    <main
      className={`min-h-screen w-full flex items-center justify-center p-4  ${montserrat.className}`}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 transition-all">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
              Create Account
            </h2>
            <p className="text-emerald-100/80 font-medium text-sm text-center">
              Join us to start your healthy journey
            </p>
          </div>

          <div className="grid gap-3">
            {/* Full Name */}
            <div className="space-y-1">
              <label
                className="text-sm sm:text-lg font-semibold text-white/90 ml-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
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
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            {/* Password Grid (Côte à côte sur tablette/PC pour gagner de la place) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
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
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label
                  className="text-sm sm:text-lg font-semibold text-white/90 ml-1"
                  htmlFor="confirm-password"
                >
                  Confirm
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
            </div>
          </div>

          <button className="w-full py-3.5 mt-2 bg-green-500 hover:bg-green-400 text-slate-900 font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-wide">
            Register Now
          </button>
        </form>

        {/* Séparateur */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-white/40 backdrop-blur-sm">
              Or sign up with
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

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-green-400 font-semibold hover:underline transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
