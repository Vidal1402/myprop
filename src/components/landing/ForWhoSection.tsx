import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ClipboardCheck, Info, Sparkles } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const checkItems = [
  "Já opera ou estuda trading seriamente",
  "Busca acesso a capital maior sem risco pessoal",
  "Entende e pratica gestão de risco",
  "Quer escalar resultados com disciplina",
  "Busca uma mesa proprietária séria e transparente",
];

const ForWhoSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden" id="para-quem">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(129,71,248,0.12),transparent_50%)]" />
    <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
    <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

    <div className="container relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="max-w-5xl mx-auto w-full">
          <div className="max-md:flex max-md:justify-center md:text-left">
            <SectionLabel>Para quem é</SectionLabel>
          </div>

          <div className="grid w-full gap-x-12 gap-y-10 lg:grid-cols-2 lg:gap-x-20 lg:items-start max-md:justify-items-stretch">
            <div className="w-full min-w-0 flex flex-col gap-5 max-md:text-center md:mx-0">
            <motion.h2 className="font-display text-3xl md:text-4xl font-bold" variants={fadeUp} custom={1}>
              Feita para quem leva o <span className="text-primary">mercado a sério</span>
            </motion.h2>
            <motion.div className="space-y-4" variants={fadeUp} custom={2}>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                A MyProp é para traders com conhecimento que precisam de <span className="text-foreground/90 font-medium">capital e estrutura</span> para escalar com{" "}
                <span className="text-foreground/90 font-medium">disciplina e clareza nas regras</span> — não para quem busca atalhos ou promessas vazias.
              </p>
              <p className="max-md:flex max-md:justify-center">
                <a
                  href="#para-quem-detalhes"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Ver perfis em detalhe
                  <ArrowRight className="h-3.5 w-3.5 opacity-80" />
                </a>
              </p>
            </motion.div>
            </div>

            <div className="w-full min-w-0 flex flex-col gap-5">
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              variants={fadeUp}
              custom={3}
            >
              <div className="space-y-2 min-w-0 max-md:text-center md:text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.2em] max-md:justify-center">
                  <ClipboardCheck className="h-4 w-4 shrink-0" />
                  <span>Checklist rápido</span>
                </div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">Você se identifica?</h3>
                <p className="max-w-md text-sm leading-relaxed text-foreground/70 mx-auto md:mx-0">
                  Se marcar <span className="font-semibold text-foreground">3 ou mais</span>, a MyProp foi feita para você.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-primary max-md:justify-center">
                <Sparkles className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">
                  <span className="font-display text-foreground tabular-nums">{checkItems.length}</span> critérios
                </span>
              </div>
            </motion.div>

            <ul className="flex flex-col gap-3">
              {checkItems.map((item, i) => (
                <motion.li key={item} className="flex gap-3.5 items-start" variants={fadeUp} custom={i + 4}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" strokeWidth={2} />
                  <div className="min-w-0 flex-1 flex gap-3 sm:gap-4 items-start justify-between">
                    <p className="text-sm leading-relaxed text-foreground/85">{item}</p>
                    <span className="shrink-0 font-mono text-[10px] font-medium tabular-nums text-muted-foreground/70 pt-0.5 hidden sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex gap-3 border-l-2 border-primary/25 pl-4 max-md:border-l-0 max-md:pl-0 max-md:text-center max-md:flex-col max-md:items-center pt-1"
              variants={fadeUp}
              custom={12}
            >
              <Info className="h-4 w-4 shrink-0 text-primary mt-0.5 max-md:mx-auto" strokeWidth={2} />
              <p className="text-xs leading-relaxed text-muted-foreground text-left max-md:text-center">
                Metas, limites e repasses ficam claros antes de você iniciar — sem letras miúdas.
              </p>
            </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ForWhoSection;
