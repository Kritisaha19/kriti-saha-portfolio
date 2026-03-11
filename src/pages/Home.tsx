import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, ArrowRight, Code2, ChevronRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";

const quickSkills = [
  { name: "Python", icon: "🐍", level: 90, category: "Programming" },
  { name: "Machine Learning", icon: "🤖", level: 85, category: "AI/ML" },
  { name: "Data Analysis", icon: "📊", level: 88, category: "Data Science" },
  { name: "SQL", icon: "🗄️", level: 82, category: "Database" },
];

const featuredProjects = [
  {
    title: "Sentiment Analysis Engine",
    description: "NLP-powered sentiment classifier using BERT transformers for real-time social media analysis.",
    technologies: ["Python", "BERT", "Flask", "React"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM neural network model predicting stock movements with 87% accuracy using historical data.",
    technologies: ["Python", "TensorFlow", "Pandas", "Plotly"],
    github: "https://github.com/kritisaha",
  },
  {
    title: "COVID-19 Data Dashboard",
    description: "Interactive visualization dashboard tracking global pandemic trends with real-time data updates.",
    technologies: ["React", "D3.js", "REST API", "Tailwind"],
    github: "https://github.com/kritisaha",
  },
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <section
      className="section-dark min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-navy-dark/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile */}
          <div className="flex justify-center lg:justify-start animate-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img src={profileImg} alt="Kriti Saha" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-navy flex items-center justify-center animate-float">
                <Code2 size={28} className="text-cream" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <p className="text-cream/60 font-medium tracking-widest uppercase text-sm mb-4 animate-in animate-in-delay-1">
              Hello, I'm
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-4 animate-in animate-in-delay-2">
              Kriti Saha
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-6 animate-in animate-in-delay-3">
              Data Analyst{" "}
              <span className="text-cream/40">|</span>{" "}
              Machine Learning Enthusiast{" "}
              <span className="text-cream/40">|</span>{" "}
              AI Developer
            </p>
            <p className="text-cream/60 max-w-lg mb-8 leading-relaxed animate-in animate-in-delay-4">
              Passionate Computer Science student specializing in turning complex data into actionable insights. 
              I build intelligent solutions using AI, ML, and modern development tools to solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-in animate-in-delay-4">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href="#" className="btn-outline-light">
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-8 justify-center lg:justify-start animate-in animate-in-delay-4">
              {[
                { icon: Github, href: "https://github.com/kritisaha", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/kritisaha", label: "LinkedIn" },
                { icon: () => <span className="text-sm font-bold">LC</span>, href: "https://leetcode.com/kritisaha", label: "LeetCode" },
                { icon: () => <span className="text-sm font-bold">CC</span>, href: "https://codechef.com/users/kritisaha", label: "CodeChef" },
                { icon: () => <span className="text-sm font-bold">K</span>, href: "https://kaggle.com/kritisaha", label: "Kaggle" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-white/20 transition-all duration-300"
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Quick contact */}
            <div className="flex flex-wrap gap-6 mt-6 justify-center lg:justify-start text-sm text-cream/50 animate-in animate-in-delay-4">
              <span className="flex items-center gap-1.5"><Mail size={14} /> kriti.saha@email.com</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> India</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Preview */}
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Core Skills" subtitle="Technologies and tools I work with" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickSkills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/skills" className="btn-outline">
            See All Skills <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="btn-outline">
            View All Projects <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-dark py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">Let's Work Together</h2>
        <p className="text-cream/70 text-lg mb-8">
          I'm open to internships, collaborations, and exciting projects in AI and data science.
        </p>
        <Link to="/contact" className="btn-primary text-lg">
          Get In Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
