import { Award, Download } from "lucide-react";

interface CertificateCardProps {
  name: string;
  organization: string;
  date: string;
  image?: string;
  pdfLink?: string;
}

const CertificateCard = ({ name, organization, date, image, pdfLink }: CertificateCardProps) => (
  <div className="glass-card rounded-xl overflow-hidden card-hover">
    <div className="h-40 bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <Award size={48} className="text-navy/30" />
      )}
    </div>
    <div className="p-5">
      <h3 className="font-serif text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground">{organization}</p>
      <p className="text-xs text-muted-foreground mt-1">{date}</p>
      {pdfLink && (
        <a href={pdfLink} className="btn-outline text-xs !px-3 !py-1.5 mt-4 inline-flex">
          <Download size={12} /> Download PDF
        </a>
      )}
    </div>
  </div>
);

export default CertificateCard;
