import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    company: "Tech Company",
    role: "Data Science Intern",
    duration: "Jun 2024 – Aug 2024",
    description: "Developed machine learning models for predictive analytics, automated data cleaning pipelines using Python, and created interactive dashboards for stakeholder reporting. Improved prediction accuracy by 15% through feature engineering.",
  },
  {
    company: "Startup Name",
    role: "ML Engineering Intern",
    duration: "Jan 2024 – Mar 2024",
    description: "Built NLP models for text classification, deployed RESTful APIs for model inference using Flask, and collaborated with the product team to integrate AI features into the core platform.",
  },
  {
    company: "University Research Lab",
    role: "Research Assistant",
    duration: "Sep 2023 – Dec 2023",
    description: "Conducted research on deep learning techniques for medical image analysis. Implemented CNN architectures and evaluated model performance on benchmark datasets.",
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
