import { Trophy, Target, Flame, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { icon: Trophy, label: "LeetCode Problems Solved", value: "500+", color: "text-yellow-600" },
  { icon: Target, label: "LeetCode Contest Rating", value: "1750+", color: "text-emerald-600" },
  { icon: Flame, label: "Max Streak", value: "120 days", color: "text-orange-500" },
  { icon: Star, label: "CodeChef Rating", value: "4★", color: "text-navy" },
];

const achievements = [
  "Solved 500+ problems on LeetCode across multiple topics",
  "Ranked in Top 10% in LeetCode Weekly Contests",
  "4-star rated on CodeChef",
  "Participated in Google Kickstart & Code Jam",
  "Top 5% on Kaggle for ML competitions",
  "Published data analysis project featured on Analytics Vidhya",
];

const Achievements = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements" subtitle="Milestones in my coding journey" />
        
        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, label, value, color }, i) => (
            <div key={label} className="glass-card rounded-xl p-6 text-center card-hover animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <Icon size={32} className={`mx-auto mb-3 ${color}`} />
              <p className="font-serif text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Achievement list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {achievements.map((a, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4 card-hover animate-in" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                <Star size={14} className="text-navy" />
              </div>
              <p className="text-foreground/80">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Achievements;
