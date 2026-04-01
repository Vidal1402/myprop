import { motion } from "framer-motion";
import { TrendingUp, FileCheck, Cpu, Percent, HeadphonesIcon, Globe, Shield, Users } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const differentials = [
  { icon: TrendingUp, title: "Capital escalável", desc: "Comece com R$25k e escale até R$250k conforme prova resultados." },
  { icon: Cpu, title: "Infraestrutura profissional", desc: "Servidores co-localizados, execução ultra-rápida e plataformas de ponta." },
  { icon: FileCheck, title: "Regras claras e justas", desc: "Drawdown, meta e prazos definidos antes de começar. Sem surpresas." },
  { icon: Percent, title: "Repasse rápido de 90%", desc: "Um dos maiores repasses do mercado, pago de forma ágil e transparente." },
  { icon: Globe, title: "WIN, WDO e globais", desc: "Opere mini índice, mini dólar, S&P, Nasdaq e mais." },
  { icon: Shield, title: "Gestão de risco", desc: "Proteção automática de drawdown que protege seu capital." },
  { icon: HeadphonesIcon, title: "Suporte dedicado", desc: "Equipe de traders reais disponível por chat e calls." },
  { icon: Users, title: "Comunidade de traders", desc: "Acesse uma rede de traders que compartilham conhecimento e resultados." },
];

const DifferentialSection = () => (
  <section className="py-24 md:py-32" id="diferenciais">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="text-center mb-16">
          <SectionLabel>Diferenciais</SectionLabel>
          <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance" variants={fadeUp} custom={1}>
            Construído por traders, <span className="text-primary">para traders</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed" variants={fadeUp} custom={2}>
            A infraestrutura completa para escalar como profissional.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {differentials.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                variants={fadeUp}
                custom={i + 3}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-bold mb-1.5">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default DifferentialSection;
