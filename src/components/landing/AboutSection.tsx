import { motion } from "framer-motion";
import { fadeUp, SectionLabel } from "./animations";
import { Shield, Target, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", desc: "Democratizar o acesso a capital profissional para traders consistentes em todo o Brasil." },
  { icon: Shield, title: "Transparência", desc: "Regras claras, resultados públicos e repasses pontuais. Sem letras miúdas." },
  { icon: Users, title: "Comunidade", desc: "Mais de 2.500 traders fazem parte do ecossistema MyProp, compartilhando conhecimento e resultados." },
];

const AboutSection = () => (
  <section className="py-24 md:py-32" id="sobre">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <SectionLabel>Sobre a MyProp</SectionLabel>
            <motion.h2 className="font-display text-3xl md:text-4xl font-bold mb-5" variants={fadeUp} custom={1}>
              Criada por traders, para transformar o mercado.
            </motion.h2>
            <motion.p className="text-muted-foreground leading-relaxed mb-4" variants={fadeUp} custom={2}>
              A MyProp Trading nasceu da frustração de traders talentosos que não conseguiam escalar por falta de capital. Combinamos tecnologia de ponta, infraestrutura institucional e um modelo justo de repasse para que você possa focar no que faz de melhor: operar.
            </motion.p>
            <motion.p className="text-muted-foreground leading-relaxed" variants={fadeUp} custom={3}>
              Nossa plataforma já avaliou mais de 2.500 traders e distribuiu mais de $2M em repasses. Operamos com os mais altos padrões de segurança e transparência do mercado.
            </motion.p>
          </div>

          <motion.div className="space-y-4" variants={fadeUp} custom={4}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
