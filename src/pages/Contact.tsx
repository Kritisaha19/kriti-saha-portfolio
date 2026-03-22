import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — could integrate with email service
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="section-light py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a chat" />
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-in">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-navy focus:border-transparent outline-none transition-all text-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="animate-in animate-in-delay-2">
              <div className="glass-card rounded-xl p-8 h-full flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="mailto:kriti.saha@email.com" className="flex items-center gap-4 text-foreground/70 hover:text-navy transition-colors">
                      <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                        <Mail size={18} className="text-navy" />
                      </div>
                      kriti.kri.saha@email.com
                    </a>
                    <div className="flex items-center gap-4 text-foreground/70">
                      <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                        <MapPin size={18} className="text-navy" />
                      </div>
                      India
                    </div>
                    <a href="https://linkedin.com/in/kritisaha-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/70 hover:text-navy transition-colors">
                      <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                        <Linkedin size={18} className="text-navy" />
                      </div>
                      linkedin.com/in/kritisaha
                    </a>
                    <a href="https://github.com/kritisaha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/70 hover:text-navy transition-colors">
                      <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                        <Github size={18} className="text-navy" />
                      </div>
                      github.com/kritisaha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
