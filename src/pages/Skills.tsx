import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const skills = [
  { name: "Python", icon: "🐍", level: 92, category: "Programming" },
  { name: "Machine Learning", icon: "🤖", level: 85, category: "AI/ML" },
  { name: "Data Analysis", icon: "📊", level: 90, category: "Data Science" },
  { name: "SQL", icon: "🗄️", level: 85, category: "Database" },
  { name: "React", icon: "⚛️", level: 78, category: "Web Development" },
  { name: "JavaScript", icon: "📜", level: 80, category: "Programming" },
  { name: "TensorFlow", icon: "🧠", level: 80, category: "AI/ML" },
  { name: "Data Structures", icon: "🌳", level: 88, category: "CS Fundamentals" },
  { name: "Pandas", icon: "🐼", level: 90, category: "Data Science" },
  { name: "NumPy", icon: "🔢", level: 88, category: "Data Science" },
  { name: "Flask", icon: "🌶️", level: 72, category: "Web Development" },
  { name: "Git", icon: "📦", level: 82, category: "Tools" },
  { name: "Deep Learning", icon: "🔮", level: 75, category: "AI/ML" },
  { name: "NLP", icon: "💬", level: 78, category: "AI/ML" },
  { name: "C++", icon: "⚡", level: 75, category: "Programming" },
  { name: "Matplotlib", icon: "📈", level: 85, category: "Data Visualization" },
];

const Skills = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className="animate-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
