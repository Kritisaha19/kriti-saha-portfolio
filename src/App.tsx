import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

import Home from "@/pages/Home";
import About from "@/pages/About";
import CV from "@/pages/CV";
import Education from "@/pages/Education";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Certificates from "@/pages/Certificates";
import Achievements from "@/pages/Achievements";
import Internships from "@/pages/Internships";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <main className="min-h-screen bg-background text-foreground dark:bg-navy-dark dark:text-cream transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* ✅ FIXED: use lowercase */}
            <Route path="/cv" element={<CV />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;