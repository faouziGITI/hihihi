import AboutImage from "@/public/aboutheropage.webp";
import Image from "next/image";
import { ScrollCircle, ScrollLine, ShowCards } from "../components/AboutPrgrs";
import OnScroll from "../components/OnScroll";
import { AboutForm } from "./component/AboutForm";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <main
      className={`mt-20 max-w-5xl mx-auto px-3 ${rubik.className} text-white flex flex-col`}
    >
      <OnScroll>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">
              Built For Athletes
              <span className="block text-green-400">Designed For Results</span>
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              NutritioN was created to simplify supplement choices and eliminate
              confusion. We provide goal-oriented stacks, lab-tested products,
              and transparent information so you can focus on training — not
              guessing.
            </p>
          </div>

          <div>
            <Image
              src={AboutImage}
              alt="about hero"
              className="rounded-xl border border-white/10 shadow-lg shadow-green-500/20"
            />
          </div>
        </section>
      </OnScroll>

      <ShowCards>
        <section className="text-center py-20 border-t border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR STORY</h1>

          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias
            numquam autem cupiditate. Eum, fuga officia beatae in exercitationem
            nesciunt provident, laudantium nam veniam dignissimos inventore
            tenetur quam, velit quaerat!
          </p>
        </section>
      </ShowCards>

      <div className="block">
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0">
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Research:
              </h2>
              <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-yellow-600/80 italic font-medium px-1.5 text-center py-2 rounded-xl bg-green-300/80 drop-shadow-xs drop-shadow-green-200 my-2">
                SUPER CLEAN WORK
              </span>
            </div>
          </ShowCards>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <div></div>
        </div>
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0 ">
          <div></div>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Product Selection:
              </h2>
              <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-emerald-600 italic font-medium px-1.5 text-center py-2 rounded-xl bg-indigo-300/80 drop-shadow-xs drop-shadow-green-200 my-2">
                GOOD VISION
              </span>
            </div>
          </ShowCards>
        </div>
        <div className="w-full h-full block sm:grid items-center justify-center sm:grid-cols-[1fr_50px_1fr] relative my-80 sm:my-0 ">
          <ShowCards>
            <div className="w-full p-2.5 rounded-lg bg-white/10 outline-2 backdrop-blur-md outline-white/40 drop-shadow-sm drop-shadow-white/80 z-11 relative hover:-translate-y-5 transition-all ease-in-out duration-300">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold my-1.5">
                Stack Building:
              </h2>
              <p className="text-white/60 text-sm sm:text-base md:text-lg font-medium my-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                at delectus ducimus voluptatibus repellendus, ratione sed optio
                eveniet excepturi ea, asperiores, nulla laboriosam aperiam
                perspiciatis quam quod magnam labore perferendis.
              </p>
              <span className="block text-gray-900 italic font-medium px-1.5 text-center py-2 rounded-xl bg-gray-300/40 drop-shadow-xs drop-shadow-green-200 my-2">
                STACK BUILDING
              </span>
            </div>
          </ShowCards>
          <div className="w-fit flex justify-center absolute sm:relative -top-50 sm:top-0 left-1/2">
            <ScrollCircle />
            <ScrollLine />
          </div>
          <div></div>
        </div>
      </div>

      <section className="py-20 border-t border-white/10">
        <h1 className="text-4xl font-semibold text-center mb-10">
          Our Approach
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
            <h2 className="text-2xl font-semibold mb-2">🧧 50+ Products</h2>
            <p className="text-white/70">
              Carefully selected supplements designed for performance and
              recovery.
            </p>
          </div>

          <div className="p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
            <h2 className="text-2xl font-semibold mb-2">🎯 5 Goal Programs</h2>
            <p className="text-white/70">
              Structured supplement stacks tailored to specific fitness goals.
            </p>
          </div>

          <div className="p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
            <h2 className="text-2xl font-semibold mb-2">💪 1000+ Athletes</h2>
            <p className="text-white/70">
              A growing community of athletes achieving better results.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 border-t border-white/10">
        <OnScroll>
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
            CONTACT US
          </h2>
        </OnScroll>

        <OnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AboutForm />

            <div className="space-y-8 p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
              <div>
                <h2 className="text-xl sm:text-3xl font-semibold mb-3">
                  Anything in mind?
                </h2>

                <p className="text-white/70 text-base sm:text-lg">
                  If you have any questions about supplements, stacks, or
                  training support — feel free to contact us anytime.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-green-400 text-sm uppercase tracking-wide">
                  Join our newsletter
                </span>

                <form className="flex flex-wrap sm:flex-nowrap gap-2 mt-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 rounded-lg bg-white text-black"
                  />

                  <button className="px-4 py-2 flex-1 sm:flex-0 rounded-lg bg-green-400 text-black font-medium hover:bg-green-300 transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </OnScroll>
      </section>
    </main>
  );
}
