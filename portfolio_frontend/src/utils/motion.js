/**
 * PUBLIC_INTERFACE
 * Simple motion variants used across sections (optional).
 */
export const fadeInUp = (delay = 0, distance = 16) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
});
