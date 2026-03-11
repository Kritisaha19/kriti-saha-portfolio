import { Download, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Resume = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Resume" subtitle="A summary of my qualifications and experience" />
        
        <div className="text-center mb-12">
          <a href="#" className="btn-primary">
            <Download size={16} /> Download Full Resume (PDF)
          </a>
        </div>

        <div className="space-y-12">
          {/* Education */}
          <div className="animate-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <GraduationCap size={18} className="text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Education</h3>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-serif text-lg font-semibold">B.Tech in Computer Science & Engineering</h4>
              <p className="text-sm text-navy font-medium mt-1">University Name</p>
              <p className="text-xs text-muted-foreground mt-1">2021 – 2025 | Specialization in AI & Data Science</p>
            </div>
          </div>

          {/* Experience */}
          <div className="animate-in animate-in-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <Briefcase size={18} className="text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Experience</h3>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h4 className="font-serif text-lg font-semibold">Data Science Intern</h4>
              <p className="text-sm text-navy font-medium mt-1">Tech Company</p>
              <p className="text-xs text-muted-foreground mt-1">Summer 2024</p>
              <p className="text-sm text-foreground/70 mt-3">Developed ML models for predictive analytics and automated data pipelines.</p>
            </div>
          </div>

          {/* Skills highlight */}
          <div className="animate-in animate-in-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <Code2 size={18} className="text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Technical Skills</h3>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Languages", value: "Python, JavaScript, SQL, C++" },
                  { label: "ML/AI", value: "TensorFlow, PyTorch, scikit-learn, Keras" },
                  { label: "Data", value: "Pandas, NumPy, Matplotlib, Seaborn, Plotly" },
                  { label: "Web", value: "React, Tailwind CSS, Flask, REST APIs" },
                  { label: "Tools", value: "Git, Jupyter, VS Code, Docker" },
                  { label: "Databases", value: "MySQL, PostgreSQL, MongoDB" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="font-semibold text-navy">{label}:</span>{" "}
                    <span className="text-foreground/70">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resume;
