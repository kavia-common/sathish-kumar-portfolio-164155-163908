import { motion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Experience section displayed as a vertical timeline.
 */
export default function Experience() {
  const items = [
    {
      company: "TechNova",
      role: "Senior Frontend Engineer",
      period: "2023 — Present",
      desc: "Leading React/TypeScript initiatives, building scalable design systems, and performance tuning."
    },
    {
      company: "InnoSoft",
      role: "Frontend Engineer",
      period: "2021 — 2023",
      desc: "Developed interactive dashboards and animations with Framer Motion; improved accessibility."
    },
    {
      company: "WebCraft",
      role: "Junior Developer",
      period: "2019 — 2021",
      desc: "Contributed to responsive UI builds and component libraries with React."
    },
  ];

  return (
    <section id="experience" className="section container-padded">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
        <ul className="space-y-8">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="card p-5"
            >
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-secondary border-2 border-white dark:border-slate-800" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
