import { motion, type Easing } from "framer-motion";

export const ease: Easing = [0.25, 0.46, 0.45, 0.94];

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease },
  }),
};

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6"
    variants={fadeUp}
    custom={0}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">{children}</span>
  </motion.div>
);
