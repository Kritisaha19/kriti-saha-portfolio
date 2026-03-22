import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  certificateLink?: string;
  isLast?: boolean;
}

const ExperienceCard = ({ company, role, duration, description, certificateLink, isLast }: ExperienceCardProps) => (
  <div className="flex gap-6">
    {/* Timeline line */}
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
        <Briefcase size={18} className="text-accent-foreground" />
      </div>
      {!isLast && <div className="w-0.5 flex-1 bg-border mt-2" />}
    </div>
    {/* Content */}
    <div className="pb-10">
      <div className="glass-card rounded-xl p-6 card-hover">
        <span className="text-xs font-medium text-navy bg-navy/10 px-3 py-1 rounded-full">{duration}</span>
        <h3 className="font-serif text-xl font-semibold mt-3">{role}</h3>
        <p className="text-sm font-medium text-navy mt-1">{company}</p>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{description}</p>
        {certificateLink && (
  <a
    href={certificateLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-navy text-white hover:opacity-90 transition"
  >
    View Certificate
  </a>
)}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
