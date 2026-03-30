import { goal } from "@/apptypes/types";
import plans from "@/data/market.json";
import Plans from "../components/Plans";
import OnScroll from "../components/OnScroll";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function GoalsPage() {
  const goals: goal[] = plans.goals;

  const highlights: string[] = [
    "Action & Results Focused",
    "Emotional & Confidence Focused",
    "Short & Punchy",
    "Easy to Understand & Follow",
    "Science-Based & Effective",
  ];

  return (
    <main
      className={`flex-1 w-full max-w-5xl mx-auto px-3 ${rubik.className} ${rubik.style}`}
    >
      <OnScroll>
        <section className="min-h-screen flex flex-col items-center justify-center text-center gap-4 py-20">
          <h1 className="text-white text-3xl sm:text-6xl font-semibold leading-tight">
            Choose Your Fitness Goal
          </h1>

          <h2 className="text-green-400 text-3xl sm:text-6xl font-bold">
            We’ll Build The Stack
          </h2>

          <p className="max-w-2xl text-white/80 text-base sm:text-lg">
            Whether you want to bulk, cut, gain strength, or improve endurance —
            we’ve created scientifically structured supplement stacks to help
            you get there faster.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="#goals"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-green-400 hover:text-green-400  transition-all ease-in duration-300"
            >
              🔥 Explore Goals
            </a>

            <a
              href="#goals"
              className="px-6 py-3 rounded-full bg-green-400 text-black font-medium hover:bg-green-300 transition shadow-lg shadow-green-500/30"
            >
              🚀 Start My Transformation
            </a>
          </div>
        </section>
      </OnScroll>

      <section className="py-16 border-t border-white/10">
        <OnScroll>
          <h1 className="text-3xl font-semibold text-center text-white mb-10">
            How Our Goal Plans Work
          </h1>
        </OnScroll>

        <OnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
              <span className="text-3xl">🎯</span>
              <h2 className="text-white font-semibold text-lg">
                Select Your Goal
              </h2>
              <p className="text-white/70 text-sm">
                Choose the fitness objective that matches your training plan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
              <span className="text-3xl">🧪</span>
              <h2 className="text-white font-semibold text-lg">
                Get a Supplement Stack
              </h2>
              <p className="text-white/70 text-sm">
                We build a science-backed stack tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-green-400/40 transition">
              <span className="text-3xl">📈</span>
              <h2 className="text-white font-semibold text-lg">
                Track Your Progress
              </h2>
              <p className="text-white/70 text-sm">
                Follow the plan consistently and monitor your results.
              </p>
            </div>
          </div>
        </OnScroll>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <OnScroll>
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <h1 className="text-2xl font-semibold text-white mb-4">
                Why Goal-Based Plans?
              </h1>

              <p className="text-white/80 text-base leading-relaxed">
                Instead of falling for flashy marketing or randomly buying
                supplements that end up collecting dust, our goal-based plans
                eliminate confusion, guesswork, and wasted money. By aligning
                your stack with your specific training intensity, recovery
                needs, and nutritional gaps, you finally get that feeling of
                certainty that you’re doing the right thing for your body.
              </p>
            </div>
          </OnScroll>

          <OnScroll>
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <h1 className="text-2xl font-semibold text-white mb-4">
                Our Highlighted Benefits
              </h1>

              <ul className="flex flex-col gap-3">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/80 text-base"
                  >
                    <span className="text-green-400 text-lg">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </OnScroll>
        </div>
      </section>

      <section
        id="goals"
        className="py-16 border-t border-white/10 scroll-mt-24"
      >
        <OnScroll>
          <h1 className="text-3xl font-semibold text-center text-white mb-10">
            Available Goals
          </h1>
        </OnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((e) => (
            <OnScroll key={e.id}>
              <Plans goal={e} />
            </OnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}
