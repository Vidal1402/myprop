import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Brain, Clock } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Capital insuficiente",
    desc: "Você tem a técnica, mas o tamanho da conta limita cada operação.",
  },
  {
    icon: TrendingDown,
    title: "Crescimento lento",
    desc: "Reinvestir lucros de uma conta pequena leva anos para escalar.",
  },
  {
    icon: Brain,
    title: "Pressão emocional",
    desc: "Operar com dinheiro próprio gera medo, ansiedade e decisões ruins.",
  },
  {
    icon: Clock,
    title: "Tempo desperdiçado",
    desc: "Enquanto espera crescer organicamente, oportunidades passam.",
  },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="text-center mb-16">
          <SectionLabel>O problema</SectionLabel>
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance"
            variants={fadeUp}
            custom={1}
          >
            A maioria dos traders <span className="text-destructive">nunca escala.</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            Conta pequena, capital limitado, risco emocional alto.
            Mesmo traders consistentes ficam presos nesse loop por anos.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="pointer-events-none absolute inset-x-10 -top-6 h-32 bg-primary/15 blur-3xl opacity-70" />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {painPoints.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card/90 backdrop-blur-sm hover:border-destructive/40 hover:bg-card transition-all duration-300"
                variants={fadeUp}
                custom={i + 3}
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive/15">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm md:text-base mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="text-center mt-14" variants={fadeUp} custom={8}>
          <p className="text-muted-foreground mb-3 text-base">
            A MyProp Trading existe para resolver exatamente isso.
          </p>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">
            Nós fornecemos o capital. Você foca no trading.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
