import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const logos = [
  "B3", "MetaTrader 5", "Rithmic", "TradingView", "CQG", "NinjaTrader"
];

const SocialProofBar = () => (
  <section className="py-14 border-y border-border/60 bg-background/80">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-3xl liquid-glass px-6 py-7 md:px-8 md:py-8"
      >
        <motion.p
          className="text-center text-[11px] md:text-xs text-foreground/50 mb-6 uppercase tracking-[0.25em] font-semibold"
          variants={fadeUp}
          custom={0}
        >
          Integração com as maiores plataformas do mercado
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12"
          variants={fadeUp}
          custom={1}
        >
          {logos.map((name) => (
            <span
              key={name}
              className="font-display font-semibold text-base md:text-lg text-foreground/50 hover:text-foreground transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SocialProofBar;
