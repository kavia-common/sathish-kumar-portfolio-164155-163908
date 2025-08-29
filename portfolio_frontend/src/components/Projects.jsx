import { motion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Projects section with responsive grid cards.
 */
export default function Projects() {
  const projects = [
    {
      title: "Interactive Portfolio",
      desc: "A sleek portfolio with animations and dark mode.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "#",
      repo: "#"
    },
    {
      title: "Analytics Dashboard",
      desc: "Responsive dashboard with charts and filters.",
      tech: ["React", "TypeScript"],
      live: "#",
      repo: "#"
    },
    {
      title: "Design System",
      desc: "Reusable UI components and tokens.",
      tech: ["React", "Storybook"],
      live: "#",
      repo: "#"
    }
  ];

  return (
    <section id="projects" className="section container-padded">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            className="card overflow-hidden"
          >
            <div className="aspect-video grid place-items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              <span className="text-5xl" role="img" aria-label="Project">🧩</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
              <ul className="flex flex-wrap gap-2 mt-3 text-xs text-slate-600 dark:text-slate-300">
                {p.tech.map((t) => (
                  <li key={t} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                <a href={p.live} className="btn btn-secondary" aria-label={`Open ${p.title} live link`}>Live</a>
                <a href={p.repo} className="btn btn-primary" aria-label={`Open ${p.title} repository`}>Code</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
