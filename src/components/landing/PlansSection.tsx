import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Infinity, Headphones } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

type PlanFeature = { label: string; value: string };

type Plan = {
  name: string;
  price: string;
  oldPrice: string;
  featured?: boolean;
  cta: string;
  features: PlanFeature[];
};

const plans: Plan[] = [
  {
    name: "1-Step Standard",
    price: "$27.95",
    oldPrice: "$43.00",
    cta: "Comece com 1 passo",
    features: [
      { label: "Profit Target", value: "$500.00" },
      { label: "Daily Loss", value: "$150.00" },
      { label: "Max Drawdown", value: "$300.00" },
      { label: "Drawdown Type", value: "Trailing" },
      { label: "Min. Trading Days", value: "3 days" },
      { label: "Activation Fee", value: "No" },
      { label: "Consistency", value: "No" },
      { label: "Reward Cycle", value: "14 days" },
    ],
  },
  {
    name: "2-Step Standard",
    price: "$47.25",
    oldPrice: "$63.00",
    featured: true,
    cta: "Comece com 2 etapas",
    features: [
      { label: "Profit Target P1", value: "$500.00" },
      { label: "Profit Target P2", value: "$250.00" },
      { label: "Daily Loss", value: "$250.00" },
      { label: "Max Drawdown", value: "$500.00" },
      { label: "Drawdown Type", value: "Static" },
      { label: "Min. Trading Days", value: "3 days" },
      { label: "Activation Fee", value: "No" },
      { label: "Consistency", value: "No" },
      { label: "Reward Cycle", value: "14 Days" },
    ],
  },
  {
    name: "Instant Funding",
    price: "$56.25",
    oldPrice: "$75.00",
    cta: "Financiamento instantâneo",
    features: [
      { label: "Daily Loss", value: "$150.00" },
      { label: "Max Drawdown", value: "$250.00" },
      { label: "Drawdown Type", value: "Trailing" },
      { label: "Trailing Lock On", value: "Yes" },
      { label: "Drawdown Lock On Payout", value: "Yes" },
      { label: "Consistency", value: "20%" },
      { label: "Reward Cycle", value: "14 Days" },
    ],
  },
];

const highlights = [
  { icon: Star, text: "Até 90% de repasse" },
  { icon: Infinity, text: "Sem limite de ganhos" },
  { icon: Headphones, text: "Suporte ativo" },
];

const PlanCard = ({ plan }: { plan: Plan }) => (
  <motion.div
    className={`relative flex flex-col rounded-3xl overflow-hidden liquid-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.55)] ${
      plan.featured ? "ring-2 ring-primary/35" : ""
    }`}
    variants={fadeUp}
  >
    {plan.featured && (
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-[11px] font-semibold text-center py-1.5 uppercase tracking-[0.18em]">
        Mais popular
      </div>
    )}

    <div className="px-7 pt-7 pb-5">
      <p className="font-display text-base font-semibold mb-2 text-muted-foreground/80">
        {plan.name}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl font-black tracking-tight">{plan.price}</span>
        <span className="text-sm line-through text-muted-foreground/70">{plan.oldPrice}</span>
      </div>
      <div className="mt-3 inline-flex items-center gap-1 rounded-full liquid-glass-sm px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Taxa única, sem mensalidade
        </span>
      </div>
    </div>

    <div className="flex-1 px-7 pb-5 space-y-2">
      {plan.features.map((f) => (
        <div
          key={f.label}
          className="flex items-center justify-between gap-4 py-2.5 border-t border-border/60 first:border-t-0"
        >
          <span className="text-xs text-muted-foreground">{f.label}</span>
          <span className="font-semibold text-sm text-foreground text-right">{f.value}</span>
        </div>
      ))}
    </div>

    <div className="px-7 pb-7 pt-2">
      <Button
        className={`w-full rounded-full font-semibold h-11 text-sm transition-all duration-300 group ${
          plan.featured
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-foreground text-background hover:bg-foreground/90"
        }`}
      >
        {plan.cta}
        <ArrowRight className="ml-1.5 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
      </Button>
    </div>
  </motion.div>
);

const PlansSection = () => (
  <section className="py-24 md:py-32 bg-card" id="planos">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="text-center mb-6">
          <SectionLabel>Planos</SectionLabel>
          <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance" variants={fadeUp} custom={1}>
            Escolha seu caminho
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-md mx-auto" variants={fadeUp} custom={2}>
            Planos flexíveis para todo perfil de trader. Sem mensalidade.
          </motion.p>
        </div>

        <motion.div
          className="flex justify-center flex-wrap gap-4 md:gap-6 mb-14"
          variants={fadeUp}
          custom={3}
        >
          {highlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/60 px-4 py-2 text-xs md:text-sm text-muted-foreground"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 max-w-6xl mx-auto items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlansSection;
