import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import excel from "@/assets/excel.png";
import powerbi from "@/assets/powerbi.png";

const skills = [
  { name: "Python",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />,
    level: 92,
    category: "Programming", },
  { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />, level: 85, category: "AI/ML" },
  { name: "Scikit-Learn", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />, level: 75, category: "AI/ML" },
  { name: "Matplotlib", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />, level: 85, category: "Data Visualization" },
  { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />, level: 80, category: "AI/ML" },
  { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />, level: 90, category: "Data Science" },
  { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />, level: 88, category: "Data Science" },
  { name: "Excel", icon: <img src={excel} alt="Excel" />, level: 90, category: "Data Science" },
  { name: "PowerBi", icon: <img src={powerbi} alt="PowerBi" />, level: 90, category: "Data Science" },
  { name: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />, level: 85, category: "Database" },
  { name: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />, level: 90, category: "Web Development" },
  { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />, level: 80, category: "Programming" },
  { name: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />, level: 72, category: "Web Development" },
  { name: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />, level: 72, category: "Web Development" },
  { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />, level: 72, category: "Web Development" },
  { name: "GitHub", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />, level: 82, category: "Tools" },
  { name: "Visual Studio Code", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />, level: 88, category: "Tools"},
  { name: "Google Colab", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" />, level: 90, category: "Tools" },
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
