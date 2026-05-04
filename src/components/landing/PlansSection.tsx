import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Diamond, FileSearch, Shield, Award, Lock } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

type PlanNoTest = {
  slug: string;
  name: string;
  margin: string;
  contracts: number;
  drawdown: string;
  reactivation: string;
  oldPriceLabel: string;
  installment: string;
  cashPrice: string;
};

const plansNoTest: PlanNoTest[] = [
  {
    slug: "LAUNCH",
    name: "PLANO LAUNCH",
    margin: "4.500",
    contracts: 10,
    drawdown: "3.500",
    reactivation: "350,00",
    oldPriceLabel: "DE R$ 1.000,00 POR:",
    installment: "12x R$58,90",
    cashPrice: "589,90",
  },
  {
    slug: "HORIZON",
    name: "PLANO HORIZON",
    margin: "7.000",
    contracts: 15,
    drawdown: "5.000",
    reactivation: "450,00",
    oldPriceLabel: "DE R$ 1.300,00 POR:",
    installment: "12x R$89,90",
    cashPrice: "897,90",
  },
  {
    slug: "PULSE",
    name: "PLANO PULSE",
    margin: "10.000",
    contracts: 25,
    drawdown: "6.900",
    reactivation: "690,00",
    oldPriceLabel: "DE R$ 1.997,90 POR:",
    installment: "12x R$129,90",
    cashPrice: "1.297,90",
  },
  {
    slug: "ORBIT",
    name: "PLANO ORBIT",
    margin: "13.000",
    contracts: 30,
    drawdown: "8.500",
    reactivation: "850,00",
    oldPriceLabel: "DE R$ 3.497,90 POR:",
    installment: "12x R$199,90",
    cashPrice: "1.997,90",
  },
];

type PlanWithTest = {
  slug: string;
  name: string;
  meta: string;
  contracts: number;
  bullets: string[];
};

const plansWithTest: PlanWithTest[] = [
  {
    slug: "PLAYER",
    name: "PLANO PLAYER",
    meta: "5.000,00",
    contracts: 20,
    bullets: [
      "PERDA MÁX/DRAWDOWN: 5.200",
      "TAXA DE ATIVAÇÃO 270",
      "SEM LIMITES DE GANHOS",
      "SAQUE NO MINIMO 20%",
      "MINIMO 7 DIAS",
      "90% REPASSE",
    ],
  },
  {
    slug: "BASIC",
    name: "PLANO BASIC",
    meta: "7.500,00",
    contracts: 25,
    bullets: [
      "PERDA MÁX/DRAWDOWN: 7.700",
      "TAXA DE ATIVAÇÃO 350",
      "SEM LIMITES DE GANHOS",
      "SAQUE NO MINIMO 20%",
      "MINIMO 7 DIAS",
      "90% REPASSE",
    ],
  },
  {
    slug: "ELITE",
    name: "PLANO ELITE",
    meta: "17.500",
    contracts: 60,
    bullets: [
      "PERDA MÁX/DRAWDOWN: 13.500",
      "TAXA DE ATIVAÇÃO 500",
      "SEM LIMITES DE GANHOS",
      "SAQUE NO MINIMO 20%",
      "MINIMO 7 DIAS",
      "90% REPASSE",
    ],
  },
  {
    slug: "MASTER",
    name: "PLANO MASTER",
    meta: "30.000,00",
    contracts: 100,
    bullets: [
      "PERDA MÁX/DRAWDOWN: 34.100",
      "TAXA DE ATIVAÇÃO 750",
      "SEM LIMITES DE GANHOS",
      "SAQUE NO MINIMO 20%",
      "MINIMO 7 DIAS",
      "90% REPASSE",
    ],
  },
];

const rulesWithTest = [
  "OPERE 7 DIAS",
  "FAÇA NO MINIMO 20%",
  "RECEBA EM ATÉ 48H APÓS A ANALISE",
  "REGRA DOS 30%",
  "NÃO ATINJA OS LIMITES DE PERDA",
  "NÃO ATINJA O DRAWDOWN",
];

const sharedBulletsNoTest = (drawdown: string, reactivation: string) => [
  "SEM TESTE",
  `DRAWDOWN: ${drawdown}`,
  `REATIVAÇÃO: ${reactivation}`,
  "SEM LIMITES DE GANHOS",
  "Máximo de dias: 30",
  "90% de Repasse",
];

const trustItems = [
  { icon: Shield, label: "Compra Segura" },
  { icon: Award, label: "Satisfação Garantida" },
  { icon: Lock, label: "Privacidade Protegida" },
];

const PlanCardNoTest = ({ plan, index }: { plan: PlanNoTest; index: number }) => {
  const bullets = sharedBulletsNoTest(plan.drawdown, plan.reactivation);
  return (
    <motion.div
      className="relative flex flex-col rounded-3xl border-2 border-primary/50 bg-zinc-950 text-zinc-100 p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/70"
      variants={fadeUp}
      custom={index + 4}
    >
      <div className="flex flex-col items-center text-center mb-5">
        <Diamond className="w-7 h-7 text-primary mb-3" strokeWidth={1.75} aria-hidden />
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">SEM TESTE</p>
        <h3 className="font-display text-lg md:text-xl font-bold tracking-wide text-white uppercase">{plan.name}</h3>
      </div>

      <p className="text-center text-sm text-zinc-300 mb-1">
        MARGEM: <span className="font-semibold text-white">{plan.margin}</span>
      </p>
      <p className="text-center font-sans text-2xl md:text-3xl font-black uppercase tracking-[0.13em] text-primary mb-5">
        <span className="tabular-nums">{plan.contracts}</span> CONTRATOS
      </p>

      <div className="h-px w-full bg-white/10 mb-5" />

      <ul className="flex-1 space-y-2.5 mb-6">
        {bullets.map((line) => (
          <li key={line} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300 leading-snug">
            <Diamond className="w-3 h-3 text-primary shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="text-center mb-5">
        <p className="text-[11px] md:text-xs text-zinc-500 line-through uppercase tracking-wide mb-2">{plan.oldPriceLabel}</p>
        <p className="font-display text-2xl md:text-3xl font-black text-primary">{plan.installment}</p>
        <p className="text-sm text-zinc-400 mt-1">ou R$ {plan.cashPrice} à vista</p>
      </div>

      <div className="space-y-2.5 mt-auto">
        <Button className="w-full rounded-2xl font-bold h-11 text-xs uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90">
          QUERO O PLANO {plan.slug}
        </Button>
        <Button
          variant="outline"
          className="w-full rounded-2xl font-bold h-11 text-xs uppercase tracking-wide border-primary text-primary bg-transparent hover:bg-primary/10"
        >
          TAXA DE REATIVAÇÃO
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 pt-5 border-t border-white/10">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-[10px] text-zinc-400 uppercase tracking-wider">
            <Icon className="w-3.5 h-3.5 text-zinc-300 shrink-0" strokeWidth={1.5} aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PlanCardWithTest = ({ plan, index }: { plan: PlanWithTest; index: number }) => (
  <motion.div
    className="relative flex flex-col rounded-3xl border-2 border-primary/50 bg-zinc-950 text-zinc-100 p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/70"
    variants={fadeUp}
    custom={index + 4}
  >
    <div className="flex flex-col items-center text-center mb-5">
      <Diamond className="w-7 h-7 text-primary mb-3" strokeWidth={1.75} aria-hidden />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">COM TESTE</p>
      <h3 className="font-display text-lg md:text-xl font-bold tracking-wide text-white uppercase">{plan.name}</h3>
    </div>

    <p className="text-center text-sm text-zinc-300 mb-1">
      META: <span className="font-semibold text-white">{plan.meta}</span>
    </p>
    <p className="text-center font-sans text-2xl md:text-3xl font-black uppercase tracking-[0.13em] text-primary mb-5">
      <span className="tabular-nums">{plan.contracts}</span> CONTRATOS
    </p>

    <div className="h-px w-full bg-primary/40 mb-5" />

    <ul className="flex-1 space-y-2.5 mb-6">
      {plan.bullets.map((line) => (
        <li key={line} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300 leading-snug">
          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
          <span>{line}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto">
      <Button className="w-full rounded-2xl font-bold h-11 text-xs uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90">
        QUERO O PLANO {plan.slug}
      </Button>
    </div>

    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 pt-5 border-t border-white/10">
      {trustItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-1.5 text-[10px] text-zinc-400 uppercase tracking-wider">
          <Icon className="w-3.5 h-3.5 text-zinc-300 shrink-0" strokeWidth={1.5} aria-hidden />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const PlansSection = () => (
  <section className="py-24 md:py-32 bg-card" id="planos">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        {/* ——— Planos com teste ——— */}
        <div className="text-center mb-10 md:mb-12">
          <SectionLabel>Planos com teste</SectionLabel>
          <div
            className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 pb-8 border-b-2 border-primary/35 max-w-5xl mx-auto"
            role="list"
            aria-label="Regras dos planos com teste"
          >
            {rulesWithTest.map((rule) => (
              <span
                key={rule}
                role="listitem"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-zinc-950/80 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-zinc-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                  !
                </span>
                {rule}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
            <FileSearch className="w-12 h-12 text-primary" strokeWidth={1.5} aria-hidden />
            <motion.h2
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance uppercase tracking-tight text-[#7B61FF]"
              variants={fadeUp}
              custom={1}
            >
              Selecione seu plano com teste:
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-[1400px] mx-auto items-stretch mb-24 md:mb-32">
          {plansWithTest.map((plan, i) => (
            <PlanCardWithTest key={plan.slug} plan={plan} index={i} />
          ))}
        </div>

        {/* ——— Planos sem teste ——— */}
        <div className="text-center mb-12 md:mb-14">
          <SectionLabel>Planos sem teste</SectionLabel>
          <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance uppercase tracking-tight" variants={fadeUp} custom={1}>
            Entre direto no desafio
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-xl mx-auto" variants={fadeUp} custom={2}>
            Quatro opções com margem e contratos definidos — sem fase de teste, com preço promocional e parcelamento.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-[1400px] mx-auto items-stretch">
          {plansNoTest.map((plan, i) => (
            <PlanCardNoTest key={plan.slug} plan={plan} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlansSection;
