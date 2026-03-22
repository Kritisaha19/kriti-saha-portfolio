import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    company: "CodSoft Solutions",
    role: "Data Science Intern",
    duration: "July 2024 – August 2024",
    description: "Developed machine learning models for predictive analytics, automated data cleaning pipelines using Python, and created interactive dashboards for stakeholder reporting. Improved prediction accuracy by 15% through feature engineering.",
    certificateLink: "https://drive.google.com/file/d/1OHWt3nH4SO-IEUuzIUJ-tMw4ozAzJ84_/view?usp=sharing",
  },
];

const Internships = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="Internships and work experience" />
        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <ExperienceCard {...exp} isLast={i === experiences.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Internships;
