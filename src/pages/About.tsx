import { Mail, MapPin, Linkedin, Download, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import profileImg from "@/assets/profile.jpg";

const About = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6 animate-in">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm <strong className="text-foreground">Kriti Saha</strong>, a Computer Science student with a deep passion for 
              <strong> Artificial Intelligence, Machine Learning, and Data Science</strong>. My journey in tech started with curiosity 
              about how data can transform decision-making, and it has evolved into a commitment to building intelligent, impactful solutions.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I specialize in extracting insights from complex datasets using Python, building predictive models with TensorFlow and 
              scikit-learn, and creating data-driven applications. My experience spans from natural language processing to computer 
              vision, always focusing on practical, real-world applications.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Beyond data science, I'm proficient in <strong>Data Structures & Algorithms</strong>, regularly participating in 
              competitive programming on platforms like LeetCode and CodeChef. I believe strong fundamentals are the foundation of 
              great software.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm actively seeking opportunities in AI/ML engineering, data analysis, and research roles where I can contribute to 
              innovative projects and continue growing as a developer.
            </p>
            <a href="#" className="btn-primary inline-flex mt-4">
              <Download size={16} /> Download Resume
            </a>
          </div>

          {/* Side info card */}
          <div className="animate-in animate-in-delay-2">
            <div className="glass-card rounded-xl p-6 sticky top-24 space-y-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-navy/20">
                <img src={profileImg} alt="Kriti Saha" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold">Kriti Saha</h3>
                <p className="text-sm text-muted-foreground">CS Student & Data Enthusiast</p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-foreground/70">
                  <Mail size={16} className="text-navy shrink-0" />
                  kriti.saha@email.com
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin size={16} className="text-navy shrink-0" />
                  India
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Linkedin size={16} className="text-navy shrink-0" />
                  <a href="https://linkedin.com/in/kritisaha" target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                    linkedin.com/in/kritisaha
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="font-serif font-semibold mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {["AI", "Machine Learning", "Data Science", "DSA", "Python"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-navy/10 text-navy font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
