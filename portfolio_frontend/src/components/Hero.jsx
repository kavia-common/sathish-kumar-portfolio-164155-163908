import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * PUBLIC_INTERFACE
 * Hero section with animated text and immersive 3D parallax preview.
 *
 * Accessibility:
 * - Respects prefers-reduced-motion via Framer Motion's useReducedMotion.
 * - All interactive elements are keyboard focusable and have clear labels.
 * - Decorative layers are aria-hidden.
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Mouse-based 3D tilt for the visual card
  const ref = useRef(null);
  const [bounds, setBounds] = useState({ w: 0, h: 0, left: 0, top: 0 });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setBounds({ w: rect.width, h: rect.height, left: rect.left + window.scrollX, top: rect.top + window.scrollY });
    const onResize = () => {
      const r = el.getBoundingClientRect();
      setBounds({ w: r.width, h: r.height, left: r.left + window.scrollX, top: r.top + window.scrollY });
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const x = e.pageX - bounds.left;
    const y = e.pageY - bounds.top;

    const px = (x / Math.max(bounds.w, 1)) * 2 - 1; // -1 to 1
    const py = (y / Math.max(bounds.h, 1)) * 2 - 1; // -1 to 1

    // Subtle tilt
    rotateY.set(px * 10); // left/right
    rotateX.set(-py * 10); // up/down

    // Glare position as percent
    glareX.set((x / Math.max(bounds.w, 1)) * 100);
    glareY.set((y / Math.max(bounds.h, 1)) * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  const glareStyle = {
    background: useMotionTemplate`radial-gradient(600px 600px at ${glareX}% ${glareY}%, rgba(255,255,255,0.25), transparent 50%)`,
  };

  // Scroll-based parallax for background blobs and layers
  const { scrollY } = useScroll();
  const blobUp = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : -40]);
  const blobDown = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : 30]);

  // Foreground image pieces parallax
  const layer1 = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : -12]);
  const layer2 = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : 12]);

  return (
    <section id="home" className="section relative overflow-hidden">
      {/* Background parallax accents */}
      <motion.div
        style={{ y: blobUp }}
        className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: blobDown }}
        className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-padded grid md:grid-cols-2 items-center gap-10">
        {/* Copy column */}
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
            <a href="#projects" className="btn btn-secondary" aria-label="View projects section">View Projects</a>
            <a href="#contact" className="btn btn-primary" aria-label="Contact me section">Contact Me</a>
          </div>
        </motion.div>

        {/* 3D Parallax Visual */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            role="img"
            aria-label="Stylized 3D workstation preview"
            className="card p-0 overflow-hidden rounded-2xl"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Base gradient background */}
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              {/* Glare overlay */}
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={glareStyle}
                />
              )}

              {/* Layered parallax items */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center"
                style={{ y: layer1, transform: "translateZ(25px)" }}
              >
                <span className="text-6xl md:text-7xl select-none">💻</span>
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute inset-0 flex items-end justify-center pb-8"
                style={{ y: layer2, transform: "translateZ(50px)" }}
              >
                <div className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur text-xs md:text-sm font-medium shadow-soft border border-slate-200/60 dark:border-slate-700/60">
                  React • Framer Motion • Tailwind
                </div>
              </motion.div>

              {/* Decorative corner shapes */}
              <motion.div
                aria-hidden="true"
                className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-secondary/30 blur-lg"
                style={{ y: layer1 }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-accent/30 blur-xl"
                style={{ y: layer2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
