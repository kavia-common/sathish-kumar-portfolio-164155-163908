import { motion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Skills grid with animated appearance and subtle hover states.
 */
export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "TailwindCSS", level: 85 },
    { name: "Framer Motion", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Accessibility", level: 70 },
  ];

  return (
    <section id="skills" className="section container-padded">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="card p-5 hover:shadow-softmd transition-shadow"
            role="group"
            aria-label={`${s.name} skill card`}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold">{s.name}</p>
              <span className="text-sm text-slate-500 dark:text-slate-400">{s.level}%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full group-hover:opacity-90 transition-opacity"
                style={{ width: `${s.level}%` }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
