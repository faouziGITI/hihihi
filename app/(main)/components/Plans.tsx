import { goal } from "@/apptypes/types";
import { CheckCircle2, Goal } from "lucide-react";

export default function Plans({ goal }: { goal: goal }) {
  return (
    <div className="group w-full h-full flex flex-col justify-between rounded-xl p-4 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 transition-all duration-300 hover:border-green-400/40 hover:shadow-green-500/20">
      <h1 className="text-white font-semibold text-2xl mb-3">{goal.name}</h1>

      <ul className="flex flex-col gap-2">
        {goal.highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-white/80 text-sm"
          >
            <CheckCircle2 size={18} className="text-green-400" />
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-white/70">{goal.description}</p>

      <span className="text-2xl font-bold text-green-400 mt-4">
        ${goal.price}
      </span>

      <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-green-400 text-black font-medium py-2 transition-all duration-200 hover:bg-green-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-green-500/30">
        <Goal size={20} />
        View Plan
      </button>
    </div>
  );
}
