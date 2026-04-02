import { motion } from "framer-motion";
import { ArrowRight, BarChart3, GraduationCap, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, SectionLabel } from "./animations";

const profiles = [
  {
    title: "Day traders",
    desc: "Operam WIN, WDO ou mercados globais e buscam capital para escalar.",
    icon: Zap,
    tag: "Intraday",
  },
  {
    title: "Traders consistentes",
    desc: "Já têm resultados mas são limitados pelo tamanho da conta.",
    icon: TrendingUp,
    tag: "Escala",
  },
  {
    title: "Estudantes avançados",
    desc: "Finalizaram formação e precisam de uma oportunidade real.",
    icon: GraduationCap,
    tag: "Pronto p/ mesa",
  },
] as const;

const ForWhoDetailSection = () => (
  <section className="relative overflow-x-hidden border-t border-border/60 bg-card/40 py-24 md:py-32" id="para-quem-detalhes">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(129,71,248,0.06),transparent_55%)]" />
    <div className="container relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="grid w-full max-md:justify-items-stretch gap-14 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-stretch lg:gap-x-12 xl:gap-x-16">
          <div className="w-full min-w-0 lg:h-full lg:min-h-0 lg:max-w-xl lg:justify-self-start">
            <SectionLabel>Perfis e encaixe</SectionLabel>
            <motion.h2
              className="font-display text-2xl md:text-3xl font-bold mb-4 text-balance"
              variants={fadeUp}
              custom={1}
            >
              Quem aproveita melhor a <span className="text-primary">MyProp</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-base mb-8 leading-relaxed max-w-xl"
              variants={fadeUp}
              custom={2}
            >
              Traders com base técnica que precisam de capital e de regras claras para escalar com tranquilidade.
            </motion.p>

            <div className="relative mb-8 pl-4 md:pl-5 border-l-2 border-primary/30">
              <motion.div
                className="flex items-center gap-2 text-xs font-semibold text-primary mb-4"
                variants={fadeUp}
                custom={2}
              >
                <BarChart3 className="w-4 h-4" />
                <span className="uppercase tracking-[0.2em]">Perfis na MyProp</span>
              </motion.div>
              <div className="space-y-4 w-full">
                {profiles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.title}
                      className="group relative w-full overflow-hidden rounded-2xl liquid-glass p-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(129,71,248,0.18)]"
                      variants={fadeUp}
                      custom={i + 3}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_right,rgba(129,71,248,0.08),transparent_55%)]" />
                      <div className="relative flex gap-4 p-5 md:p-6">
                        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary/12 ring-1 ring-primary/25 shadow-inner">
                          <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                              {p.tag}
                            </span>
                            <span className="font-mono text-[10px] font-medium text-muted-foreground/80">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="font-display text-lg font-bold leading-tight md:text-base">{p.title}</h3>
                          <p className="mt-2 text-[15px] leading-relaxed text-foreground/75 md:text-sm">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div variants={fadeUp} custom={6} className="flex justify-center md:justify-start">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-8 h-11 shadow-lg shadow-primary/25 group">
                Começar meu desafio
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative flex w-full min-h-[240px] min-w-0 justify-center self-stretch lg:h-full lg:min-h-0 lg:justify-end"
            variants={fadeUp}
            custom={4}
          >
            <div className="relative flex h-full w-full min-h-0 max-w-full items-center justify-center px-3 pb-4 pt-2 lg:translate-x-2 lg:justify-end xl:translate-x-3">
              <div className="pointer-events-none absolute inset-y-2 right-0 left-[10%] rounded-[40%] bg-primary/14 blur-3xl opacity-45 sm:inset-y-4 lg:inset-y-6 lg:left-[20%]" />
              <img
                src="/for-who-phones.png"
                alt="Aplicativo de trading em smartphones — visão da plataforma"
                className="relative z-[1] mx-auto h-full max-h-full w-auto max-w-full object-contain object-center align-middle lg:mx-0 lg:object-right-bottom select-none [filter:drop-shadow(0_14px_32px_rgba(0,0,0,0.11))_drop-shadow(0_12px_28px_rgba(129,71,248,0.28))_drop-shadow(0_22px_48px_rgba(129,71,248,0.18))_drop-shadow(0_36px_72px_rgba(129,71,248,0.1))]"
                width={900}
                height={700}
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ForWhoDetailSection;
