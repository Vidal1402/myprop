import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const testimonials = [
  { text: "Passei no desafio em 8 dias e já recebi meu primeiro repasse de R$4.200. A MyProp mudou minha carreira como trader.", name: "Rafael S.", role: "Trader de WIN", payout: "R$4.200" },
  { text: "A estrutura profissional que a MyProp oferece me deu confiança para operar sem a pressão do capital próprio. Resultado: consistência.", name: "Amanda L.", role: "Trader de WDO", payout: "R$7.800" },
  { text: "Depois de 2 anos operando sozinho, encontrei na MyProp a parceira ideal. Capital, suporte e regras justas.", name: "Carlos M.", role: "Trader de Futuros", payout: "R$12.500" },
  { text: "O processo de avaliação é transparente e justo. Fui financiada rapidamente e os repasses chegam no prazo.", name: "Juliana P.", role: "Day Trader", payout: "R$6.300" },
  { text: "As regras são claras desde o início. Sem pegadinhas. Melhor mesa proprietária que já trabalhei.", name: "Ana C.", role: "Swing Trader", payout: "R$5.100" },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 md:py-32 bg-card" id="depoimentos">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <div className="text-center mb-14">
            <SectionLabel>Prova social</SectionLabel>
            <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance" variants={fadeUp} custom={1}>
              Resultados <span className="text-primary">reais</span>
            </motion.h2>
            <motion.p className="text-muted-foreground text-base max-w-md mx-auto" variants={fadeUp} custom={2}>
              Veja o que nossos traders estão conquistando.
            </motion.p>
          </div>

          <motion.div className="max-w-2xl mx-auto" variants={fadeUp} custom={3}>
            <div className="relative bg-background rounded-2xl border border-border p-8 md:p-10 min-h-[260px] flex flex-col justify-between">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm">{testimonials[current].name}</p>
                      <p className="text-muted-foreground text-xs">{testimonials[current].role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Repasse</p>
                      <p className="font-display font-bold text-primary text-lg">{testimonials[current].payout}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground/30 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-foreground/30 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
