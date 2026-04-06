import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./animations";
import TradingGrid from "./TradingGrid";

const stats = [
  { value: "$10M+", label: "Capital operado" },
  { value: "2.500+", label: "Traders avaliados" },
  { value: "$2M", label: "Pagos em repasses" },
];

const HeroSection = () => (
  <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
    <TradingGrid />
    <div className="absolute inset-0 bg-background/90" />

    <div className="container relative z-10 pt-28 pb-16 md:pt-40 md:pb-28">
      <div className="grid place-items-center gap-12 lg:gap-20 lg:grid-cols-[1.05fr_minmax(0,1.25fr)] lg:items-stretch lg:place-items-stretch">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl lg:max-w-2xl mx-auto text-center lg:text-left px-2"
        >
        <motion.div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-tint mb-8 mx-auto lg:mx-0"
          variants={fadeUp}
          custom={0}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-muted-foreground tracking-wide">
            A Próxima Geração de Mesas Proprietárias
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 text-center lg:text-left"
          variants={fadeUp}
          custom={1}
        >
          <span className="inline-block max-w-[16ch] mx-auto lg:max-w-none -ml-4 sm:ml-0">
            <span className="whitespace-nowrap">Transforme sua</span>{" "}
            consistência <span className="text-primary">em capital.</span>
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          variants={fadeUp}
          custom={2}
        >
          A MyProp Trading permite que traders escalem seus resultados operando
          contas financiadas com até 90% de repasse sobre os lucros.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-16"
          variants={fadeUp}
          custom={3}
        >
          <Button
            size="lg"
            className="text-sm px-8 h-12 font-semibold rounded-full group bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Começar desafio
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-sm px-6 h-12 font-medium rounded-full"
            asChild
          >
            <a href="#planos">Ver planos</a>
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-14"
          variants={fadeUp}
          custom={4}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex h-full items-center justify-center lg:justify-end lg:min-h-[560px] mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-none">
            <img
              src="/hero-platform.png"
              alt="Plataforma completa de trading"
              className="relative w-full h-full object-contain scale-105 sm:scale-110 lg:scale-125 lg:translate-x-6"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
