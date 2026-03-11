import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "NLP-powered sentiment classifier using BERT transformers for real-time social media analysis with interactive dashboard.",
    technologies: ["Python", "BERT", "Flask", "React"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM neural network model predicting stock price movements with 87% accuracy using historical market data.",
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "COVID-19 Data Dashboard",
    description: "Interactive visualization dashboard tracking global pandemic trends with real-time data updates and forecasting.",
    technologies: ["React", "D3.js", "REST API", "Tailwind"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "Image Classification System",
    description: "CNN-based image classifier achieving 95% accuracy on custom dataset using transfer learning with ResNet.",
    technologies: ["Python", "PyTorch", "OpenCV", "Streamlit"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "Customer Churn Prediction",
    description: "ML pipeline predicting customer churn with feature engineering and XGBoost for a telecom company dataset.",
    technologies: ["Python", "XGBoost", "scikit-learn", "Seaborn"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "Movie Recommendation System",
    description: "Collaborative filtering and content-based hybrid recommendation engine using matrix factorization techniques.",
    technologies: ["Python", "Surprise", "Flask", "React"],
    github: "https://github.com/kritisaha",
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
