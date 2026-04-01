import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, SectionLabel } from "./animations";

const profiles = [
  { title: "Day traders", desc: "Operam WIN, WDO ou mercados globais e buscam capital para escalar." },
  { title: "Traders consistentes", desc: "Já têm resultados mas são limitados pelo tamanho da conta." },
  { title: "Estudantes avançados", desc: "Finalizaram formação e precisam de uma oportunidade real." },
];

const checkItems = [
  "Já opera ou estuda trading seriamente",
  "Busca acesso a capital maior sem risco pessoal",
  "Entende e pratica gestão de risco",
  "Quer escalar resultados com disciplina",
  "Busca uma mesa proprietária séria e transparente",
];

const ForWhoSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <SectionLabel>Para quem é</SectionLabel>
            <motion.h2 className="font-display text-3xl md:text-4xl font-bold mb-6" variants={fadeUp} custom={1}>
              Feita para quem leva o <span className="text-primary">mercado a sério</span>
            </motion.h2>
            <motion.p className="text-muted-foreground text-base mb-8 leading-relaxed" variants={fadeUp} custom={2}>
              A MyProp foi desenhada para traders que já têm o conhecimento — mas precisam de capital e estrutura.
            </motion.p>

            <div className="space-y-3 mb-8">
              {profiles.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="p-5 rounded-xl border border-border hover:border-primary/15 transition-colors duration-300"
                  variants={fadeUp}
                  custom={i + 3}
                >
                  <h3 className="font-display font-bold text-sm mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={6}>
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm px-7 h-11 group">
                Começar meu desafio
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="p-8 md:p-10 rounded-2xl bg-card border border-border"
            variants={fadeUp}
            custom={3}
          >
            <h3 className="font-display text-xl font-bold mb-2">Você se identifica?</h3>
            <p className="text-muted-foreground text-sm mb-8">Se marcar 3 ou mais, a MyProp é para você.</p>
            <div className="space-y-5">
              {checkItems.map((item, i) => (
                <motion.div key={item} className="flex items-start gap-3 group cursor-default" variants={fadeUp} custom={i + 4}>
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ForWhoSection;
