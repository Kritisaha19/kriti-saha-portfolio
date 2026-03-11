import SectionHeading from "@/components/SectionHeading";
import CertificateCard from "@/components/CertificateCard";

const certificates = [
  { name: "Machine Learning Specialization", organization: "Coursera (Stanford / Andrew Ng)", date: "2024" },
  { name: "Deep Learning Specialization", organization: "Coursera (deeplearning.ai)", date: "2024" },
  { name: "Data Science Professional Certificate", organization: "IBM (Coursera)", date: "2023" },
  { name: "Python for Data Science", organization: "NPTEL", date: "2023" },
  { name: "SQL for Data Analysis", organization: "Udacity", date: "2023" },
  { name: "AWS Cloud Practitioner", organization: "Amazon Web Services", date: "2024" },
];

const Certificates = () => (
  <div className="pt-16">
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certificates" subtitle="Professional certifications and courses" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <div key={cert.name} className="animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <CertificateCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Certificates;
