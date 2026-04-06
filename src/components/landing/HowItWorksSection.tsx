import { motion } from "framer-motion";
import { ClipboardList, Target, Wallet, TrendingUp } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const steps = [
  {
    num: "01",
    title: "Escolha seu plano",
    desc: "Selecione o desafio ideal para seu perfil e mercado de atuação.",
    detail: "A partir de 497,90",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Complete a avaliação",
    desc: "Demonstre sua consistência operando dentro das regras do desafio. Sem prazo mínimo.",
    detail: "Meta clara e objetiva",
    icon: Target,
  },
  {
    num: "03",
    title: "Seja financiado",
    desc: "Aprovação em até 24h. Opere com capital de até R$ 20.000 sem arriscar patrimônio pessoal.",
    detail: "Até R$ 20.000 de capital",
    icon: Wallet,
  },
  {
    num: "04",
    title: "Receba 90% dos lucros",
    desc: "Sem limite de ganhos. Escale conforme seus resultados crescem.",
    detail: "100% de repasse nos 2 primeiros meses",
    icon: TrendingUp,
  },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32 bg-card" id="como-funciona">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="text-center mb-16">
          <SectionLabel>Como funciona</SectionLabel>
          <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance" variants={fadeUp} custom={1}>
            4 passos para operar <span className="text-primary">financiado</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed" variants={fadeUp} custom={2}>
            Um processo simples, transparente e sem pegadinhas.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="pointer-events-none absolute inset-x-6 -top-6 h-32 bg-primary/15 blur-3xl opacity-70" />
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="group relative flex flex-col gap-4 p-6 md:p-7 rounded-3xl liquid-glass transition-all duration-300 hover:shadow-lg"
                variants={fadeUp}
                custom={i + 3}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-bold">
                      {step.title}
                    </h3>
                  </div>
                  <span className="font-display text-2xl font-bold text-foreground/10 group-hover:text-primary/40 transition-colors">
                    {step.num}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                <span className="inline-flex items-center w-fit px-3 py-1 rounded-full liquid-glass-sm text-primary text-xs font-semibold">
                  {step.detail}
                </span>
              </motion.div>
            );
          })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
