import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, SectionLabel } from "./animations";

const faqItems = [
  { q: "O que é a MyProp Trading?", a: "A MyProp Trading é uma mesa proprietária que fornece capital, infraestrutura e tecnologia para traders operarem mercados financeiros (WIN, WDO, futuros globais) mediante avaliação de desempenho. Você não arrisca seu dinheiro — opera com o nosso capital." },
  { q: "Preciso investir meu próprio dinheiro?", a: "Não. Você paga apenas a taxa do plano escolhido (a partir de R$290) para participar do programa de financiamento. Todo o capital operacional é fornecido pela MyProp após aprovação." },
  { q: "Quanto posso ganhar?", a: "Não existe limite de ganhos. Você recebe até 90% de todo lucro gerado nas suas operações. Quanto mais consistente e disciplinado, mais você ganha." },
  { q: "Quanto tempo leva para ser aprovado?", a: "Depende da sua consistência. Não há prazo mínimo — se atingir a meta respeitando as regras, pode ser aprovado em dias. Após aprovação, sua conta financiada é liberada em até 24 horas." },
  { q: "Quais mercados posso operar?", a: "Mini índice (WIN), mini dólar (WDO) e mercados futuros globais como S&P 500 e Nasdaq. As plataformas incluem MetaTrader 5, Rithmic e CQG." },
  { q: "E se eu não passar no desafio?", a: "Sem problema. Você pode tentar novamente quantas vezes quiser, adquirindo um novo plano. Muitos traders de sucesso passaram após 2 ou 3 tentativas." },
  { q: "Como funciona o drawdown?", a: "O drawdown é o limite máximo de perda permitido. Cada plano tem seu valor definido previamente. Se atingido, a avaliação é encerrada." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-balance" variants={fadeUp} custom={1}>
              Perguntas <span className="text-primary">frequentes</span>
            </motion.h2>
            <motion.p className="text-muted-foreground text-base" variants={fadeUp} custom={2}>
              Tudo que você precisa saber antes de começar.
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  open === i ? "border-primary/20 bg-card" : "border-border hover:border-foreground/10"
                }`}
                variants={fadeUp}
                custom={i + 3}
              >
                <button
                  className="w-full flex flex-col items-center text-center gap-2 p-5 md:flex-row md:items-center md:justify-between md:text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-sm md:text-base group-hover:text-primary transition-colors md:pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
