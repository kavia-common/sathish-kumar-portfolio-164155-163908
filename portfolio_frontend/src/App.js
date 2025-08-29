import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import AIChat from "./components/AIChat";
import smoothscroll from "smoothscroll-polyfill";

/**
 * PUBLIC_INTERFACE
 * App root that composes all sections. Initializes smooth scroll polyfill.
 */
function App() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <AIChat />
    </div>
  );
}

export default App;
