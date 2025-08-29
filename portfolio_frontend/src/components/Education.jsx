import { motion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Education timeline section with cards.
 */
export default function Education() {
  const items = [
    {
      school: "University of Technology",
      degree: "B.E. Computer Science",
      period: "2015 — 2019",
      detail: "Focused on software engineering, web technologies, and UI/UX."
    }
  ];
  return (
    <section id="education" className="section container-padded">
      <h2 className="text-3xl font-bold mb-10">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((e, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="card p-5"
          >
            <h3 className="text-xl font-semibold">{e.degree}</h3>
            <p className="text-primary">{e.school}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{e.period}</p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
