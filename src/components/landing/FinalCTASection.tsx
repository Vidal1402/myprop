import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./animations";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          variants={fadeUp}
          custom={0}
        >
          Seu próximo nível no trading{" "}
          <span className="text-primary">começa aqui.</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-relaxed"
          variants={fadeUp}
          custom={1}
        >
          Junte-se a milhares de traders que já estão operando com capital
          profissional e recebendo até 90% dos lucros.
        </motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <Button
            size="lg"
            className="text-base px-10 h-14 font-bold rounded-full group bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Começar meu desafio
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
