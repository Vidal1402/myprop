import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Brain, Clock, Banknote } from "lucide-react";
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
  <section
    className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/[0.045] via-background to-muted/30 py-24 md:py-32"
    id="problema"
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/80" aria-hidden />
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 max-w-[50vw] translate-x-1/3 rounded-full bg-primary/10 blur-3xl"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 max-w-[45vw] -translate-x-1/3 translate-y-1/4 rounded-full bg-destructive/[0.06] blur-3xl"
    />

    <div className="container relative z-[1]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <SectionLabel>O problema</SectionLabel>
          <motion.h2
            className="font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl md:leading-[1.08]"
            variants={fadeUp}
            custom={1}
          >
            A maioria dos traders <span className="text-destructive">nunca escala.</span>
          </motion.h2>
          <motion.div
            className="mx-auto mt-5 h-px w-20 max-w-full bg-gradient-to-r from-transparent via-primary/45 to-transparent md:mt-6"
            variants={fadeUp}
            custom={1}
            aria-hidden
          />
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg"
            variants={fadeUp}
            custom={2}
          >
            Conta pequena, capital limitado, risco emocional alto. Mesmo traders consistentes ficam presos nesse loop por
            anos.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div
            className="pointer-events-none absolute inset-x-6 -top-2 h-44 max-w-2xl mx-auto rounded-full bg-primary/14 blur-3xl md:inset-x-12"
            aria-hidden
          />
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {painPoints.map(({ icon: Icon, title, desc }, i) => (
              <motion.article
                key={title}
                variants={fadeUp}
                custom={i + 3}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                className="group relative flex min-h-[168px] flex-col gap-4 overflow-hidden rounded-2xl liquid-glass p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/15 md:min-h-[176px] md:p-6"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-destructive/35 to-transparent opacity-90" />
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive ring-1 ring-destructive/15 transition-colors duration-300 group-hover:bg-destructive/15 md:h-11 md:w-11 md:rounded-[0.65rem]">
                    <Icon className="h-4 w-4 md:h-[1.1rem] md:w-[1.1rem]" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-display text-sm font-semibold leading-snug md:text-base">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">{desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-2xl md:mt-20"
          variants={fadeUp}
          custom={8}
        >
          <div className="rounded-2xl liquid-glass-sm px-8 py-9 text-center md:px-10 md:py-10">
            <div
              className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20 md:mb-6 md:h-14 md:w-14"
              aria-hidden
            >
              <Banknote className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2} />
            </div>
            <p className="text-sm font-medium text-muted-foreground md:text-base">
              A MyProp Trading existe para resolver exatamente isso.
            </p>
            <p className="font-display mt-4 text-xl font-bold leading-snug text-primary md:mt-5 md:text-2xl">
              Nós fornecemos o capital. Você foca no trading.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
