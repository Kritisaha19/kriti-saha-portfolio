import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, github, live, image }: ProjectCardProps) => (
  <div className="glass-card rounded-xl overflow-hidden card-hover group">
    <div className="h-48 bg-secondary overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-fullobject-contain group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/10 to-navy/5">
          <span className="font-serif text-2xl text-navy/30">{title[0]}</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-xs rounded-full bg-navy/10 text-navy font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm !px-4 !py-2">
            <Github size={14} /> Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !px-4 !py-2">
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
