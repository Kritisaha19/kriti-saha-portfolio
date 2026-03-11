import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="section-dark py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-bold mb-4">Kriti Saha</h3>
          <p className="text-cream/70 text-sm leading-relaxed">
            Data Analyst & ML Enthusiast building intelligent solutions with AI, data science, and modern software development.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {["Projects", "Skills", "Contact"].map((l) => (
              <a key={l} href={`/${l.toLowerCase()}`} className="block text-cream/70 hover:text-cream transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/kritisaha" },
              { icon: Linkedin, href: "https://linkedin.com/in/kritisaha" },
              { icon: Mail, href: "mailto:kriti.saha@email.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-white/20 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-sm text-cream/60">
            <div className="flex items-center gap-2">
              <Mail size={14} /> kriti.saha@email.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> India
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} Kriti Saha. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
