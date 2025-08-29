import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * PUBLIC_INTERFACE
 * Navbar component with sticky positioning, smooth scroll links, and theme toggle with persistence.
 */
export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-700/60" : "bg-transparent"}`}
      aria-label="Primary"
    >
      <nav className="container-padded h-16 flex items-center justify-between" aria-label="Main Navigation">
        <a href="#home" className="font-semibold text-lg tracking-tight" aria-label="Sathish Kumar portfolio home">
          <span className="text-secondary">Sathish</span> Kumar
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="hover:text-secondary transition-colors"
                href={item.href}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="btn btn-primary !px-3 !py-2"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title="Toggle theme"
        >
          {theme === "light" ? <FiMoon aria-hidden /> : <FiSun aria-hidden />}
        </button>
      </nav>
    </header>
  );
}
