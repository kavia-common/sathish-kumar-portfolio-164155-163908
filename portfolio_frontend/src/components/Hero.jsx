import { motion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Hero section with animated text and subtle background accents.
 */
export default function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="container-padded grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-primary/70">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Sathish Kumar
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A modern, innovative, and detail-oriented software engineer crafting performant web experiences with React, animations, and clean UX.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-6"
        >
          <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 grid place-items-center">
            <span className="text-6xl" role="img" aria-label="Laptop">💻</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
