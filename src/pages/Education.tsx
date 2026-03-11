import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    university: "University Name",
    year: "2021 – 2025",
    specialization: "AI & Data Science",
    coursework: ["Machine Learning", "Data Structures & Algorithms", "Database Management", "Artificial Intelligence", "Statistics & Probability", "Computer Networks"],
  },
  {
    degree: "Higher Secondary (XII)",
    university: "School Name",
    year: "2019 – 2021",
    specialization: "Science (PCM + CS)",
    coursework: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
  },
  {
    degree: "Secondary (X)",
    university: "School Name",
    year: "2019",
    specialization: "General",
    coursework: ["Mathematics", "Science", "English", "Computer Applications"],
  },
];

const Education = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic journey" />
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6 animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-accent-foreground" />
                </div>
                {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-12">
                <div className="glass-card rounded-xl p-6 card-hover">
                  <span className="text-xs font-medium text-navy bg-navy/10 px-3 py-1 rounded-full">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold mt-3">{item.degree}</h3>
                  <p className="text-sm font-medium text-navy mt-1">{item.university}</p>
                  <p className="text-sm text-muted-foreground mt-1">Specialization: {item.specialization}</p>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((c) => (
                        <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-foreground/70">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Education;
