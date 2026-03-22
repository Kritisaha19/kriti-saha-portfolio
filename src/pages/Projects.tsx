import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import lyricscomposer from "@/assets/lyricscomposer.png";
import automl_screenshot from "@/assets/automl_screenshot.png";
import os from "@/assets/os.png";
import codesync from "@/assets/codesync.png";
import crimeprediction from "@/assets/crimeprediction.png";
import tradingstrategy from "@/assets/tradingstrategy.png";
const projects = [
  {
    title: "Code-Sync: Collaborative Code Editor",
    description: "Real-time collaborative code editor that enables multiple users to write, edit, and execute code simultaneously with live synchronization.",
    image: codesync,
    technologies: ["React.js", "Node.js", "Express.js", "WebSockets", "Python", "REST APIs", "MongoDB", "Git"],
    github: "https://github.com/Kritisaha19/CODE-SYNC-real-time-collaborative-code-editor",
  },
  {
    title: "AutoML Pipeline for Tabular Data",
    description: "Automated machine learning pipeline that streamlines preprocessing, model selection, and hyperparameter tuning to deliver optimized models with minimal manual effort.",
    image: automl_screenshot,
    technologies: ["Python", "Scikit-learn", "PyCaret", "Matplotlib"],
    github: "https://github.com/Kritisaha19/automl-pipeline-builder",
  },
  {
    title: "Real-Time Memory Allocation Tracker",
    description: "Interactive system for real-time visualization of memory allocation techniques including paging, segmentation, and fragmentation.",
    image: os,
    technologies: ["Python", "Tkinter","Numpy", "Operating Systems", "Data Visualization"],
    github: "https://github.com/Kritisaha19/Real-Time-Memory-Allocation-Tracker",
  },
  {
    title: "Crime Arrest Prediction",
    description: "Machine learning model that predicts arrest outcomes based on crime data patterns and influencing factors.",
    image: crimeprediction,
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Logistic Regression"],
    github: "https://github.com/Kritisaha19/Crime-Arrest-Prediction-ML",
  },
  {
    title: "Personalized AI Lyric Composer",
    description: "AI-powered chatbot that generates personalized song lyrics based on mood, genre, and artist style.",
    image: lyricscomposer,
    technologies: ["Python", "NLP", "Transformers", "Streamlit"],
    github: "https://github.com/Kritisaha19/Lyric-Composer-Personalized-AI-lyric-Composer",
  },
  {
    title: "AI-ML Trading Strategy Engine",
    description: "AI-powered trading simulator that predicts market trends and executes strategies using machine learning and technical indicators.",
    image: tradingstrategy,
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning", "Algorithmic Trading"],
    github: "https://github.com/Kritisaha19/ai-ml-trading-strategy-engine",
  },
];

const Projects = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="A collection of my work and experiments" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} className="animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
