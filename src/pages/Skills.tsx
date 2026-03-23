import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import excel from "@/assets/excel.png";
import powerbi from "@/assets/powerbi.png";

const skills = [
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, level: 92, category: "Programming Languages" },
  { name: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />, level: 95, category: "Programming Languages" },
  { name: "C++", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />, level: 65, category: "Programming Languages" },

  { name: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, level: 70, category: "Web Technologies" },
  { name: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, level: 70, category: "Web Technologies" },
  { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, level: 65, category: "Web Technologies" },

  { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />, level: 75, category: "Machine Learning & AI" },
  { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />, level: 65, category: "Machine Learning & AI" },
  { name: "Scikit-Learn", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />, level: 86, category: "Machine Learning & AI" },

  { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />, level: 90, category: "Data Science & Analysis" },
  { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" />, level: 88, category: "Data Science & Analysis" },
  { name: "Matplotlib", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" />, level: 85, category: "Data Science & Analysis" },
  { name: "Excel", icon: <img src={excel} alt="Excel" />, level: 90, category: "Data Science & Analysis" },
  { name: "Power BI", icon: <img src={powerbi} alt="PowerBI" />, level: 90, category: "Data Science & Analysis" },

  { name: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />, level: 85, category: "Databases" },

  { name: "GitHub", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />, level: 82, category: "Tools & Platforms" },
  { name: "Visual Studio Code", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />, level: 88, category: "Tools & Platforms" },
  { name: "Google Colab", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" />, level: 90, category: "Tools & Platforms" },
];

const Skills = () => {
  // Group skills
  const groupedSkills = skills.reduce((acc: any, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Order of sections
  const order = [
    "Programming Languages",
    "Machine Learning & AI",
    "Data Science & Analysis",
    "Web Technologies",
    "Databases",
    "Tools & Platforms",
  ];

  return (
    <div className="pt-16">
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="space-y-16">

            {order.map((category) =>
              groupedSkills[category] ? (
                <div key={category}>

                  {/* Category Title */}
                  <h2 className="text-2xl font-bold mb-6 text-gradient">
                    {category}
                  </h2>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {groupedSkills[category].map((skill: any, i: number) => (
                      <div
                        key={skill.name}
                        className="animate-in"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <SkillCard {...skill} />
                      </div>
                    ))}
                  </div>

                </div>
              ) : null
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;