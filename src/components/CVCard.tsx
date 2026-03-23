import { Download } from "lucide-react";

interface CVCardProps {
  file: string;
}

const CVCard = ({ file }: CVCardProps) => {
  return (
    <div className="glass-card rounded-xl p-10 flex flex-col items-center justify-center text-center card-hover">
      
      {/* Title */}
      <h2 className="font-serif text-3xl font-semibold mb-4">My CV</h2>

      {/* Description */}
      <p className="text-muted-foreground mb-6 max-w-md">
        View or download my complete CV.
      </p>

      {/* Button */}
      <a
        href={file}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary flex items-center gap-2 text-lg px-6 py-3"
      >
        <Download size={18} />
        Download CV
      </a>
    </div>
  );
};

export default CVCard;