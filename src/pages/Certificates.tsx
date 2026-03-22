import SectionHeading from "@/components/SectionHeading";
import CertificateCard from "@/components/CertificateCard";
import boardinfinity from "@/certificates/boardinfinity.png";
import cloudcomputing from "@/certificates/cloudcomputing.png";
import bitsandbytescourseragoogle from "@/certificates/bitsandbytescourseragoogle.png";
import csepathshala from "@/certificates/csepathshala.png";
import computercommunications from "@/certificates/computercommunications.png";
import digitalsystems from "@/certificates/digitalsystems.png";
import operatingsystems from "@/certificates/operatingsystems.png";
import FundamentalsofNetworkCommunication from "@/certificates/FundamentalsofNetworkCommunication.png";

const certificates = [
  {name: "Cloud Computing", organization: "NPTEL", date: "2025", image: cloudcomputing, pdfLink: "https://drive.google.com/file/d/1W5CBAy0vjFDpKEdy-8BCRZgNmcjFSrn0/view?usp=sharing" },
  {name: "Operating Systems", organization: "Coursera (IBM)", date: "2024", image: operatingsystems, pdfLink: "https://drive.google.com/file/d/1InEThIb72DNxqP4ai0oJrZUGk6pNeAEO/view?usp=sharing"},
  { name: "Bits and Bytes", organization: "Coursera(Google)", date: "2024", image: bitsandbytescourseragoogle, pdfLink: "https://drive.google.com/file/d/1inpitUcts7k7ge5BNBiUg0_PQjY429r-/view?usp=sharing" },
  {name: "Python towards AI/ML", organization: "CSE Pathshala", date: "2024", image: csepathshala, pdfLink: "https://drive.google.com/file/d/1yalGx0CNjEM1PdFfZiv4NRQZdDDYhNvL/view?usp=sharing" },
  {name: "Fundamentals of Network Communication", organization: "Coursera (University of Colorado)", date: "2024", image: FundamentalsofNetworkCommunication, pdfLink: "https://drive.google.com/file/d/1cxVZw3Z1qSGVaoknDDHfcmgl0W0psqi1/view?usp=sharing" },
  { name: "Python for Data Science", organization: "Board Infinity", date: "2024", image: boardinfinity, pdfLink: "https://drive.google.com/file/d/1yWMGgvDpVozYdlfDkOgSu3qWSTLpqjZR/view?usp=sharing" },
  {name: "Digital Systems", organization: "Coursera (University Autonoma de Barcelona)", date: "2024", image: digitalsystems, pdfLink: "https://drive.google.com/file/d/1020HNC6xJHDeUEeOigqqmwNg0KdivN4b/view?usp=sharing"},
  {name: "Computer Communications", organization: "Coursera", date: "2024", image: computercommunications, pdfLink: "https://drive.google.com/file/d/1MDT50-jpo_7vT_tIUrya-BKF0z4xI26E/view?usp=sharing"},
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
