import { Trophy, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const events = [
  {
    name: "Smart India Hackathon",
    year: "2024",
    description: "Built an AI-powered crop disease detection system using computer vision and deep learning for real-time diagnosis.",
    outcome: "Finalist — Top 10 nationally",
  },
  {
    name: "Google Code Jam",
    year: "2024",
    description: "Competed in algorithmic programming challenges testing problem-solving skills across multiple rounds.",
    outcome: "Advanced to Round 2",
  },
  {
    name: "Kaggle ML Competition",
    year: "2023",
    description: "Developed an ensemble ML model for tabular prediction achieving top 5% placement among thousands of participants.",
    outcome: "Top 5% — Silver Medal",
  },
  {
    name: "University Hackathon",
    year: "2023",
    description: "Created a real-time data visualization dashboard for campus energy consumption monitoring using React and D3.js.",
    outcome: "1st Place Winner",
  },
];

const CompetitiveEvents = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Competitive Events" subtitle="Hackathons and coding competitions" />
        <div className="space-y-6">
          {events.map((event, i) => (
            <div key={i} className="glass-card rounded-xl p-6 card-hover animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-serif text-xl font-semibold">{event.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar size={14} /> {event.year}
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-navy bg-navy/10 px-3 py-1.5 rounded-full">
                  <Trophy size={14} /> {event.outcome}
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CompetitiveEvents;
