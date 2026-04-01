import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, SectionLabel } from "./animations";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Percent, TrendingUp, Wallet } from "lucide-react";

const capitalOptions = [10000, 25000, 50000, 100000, 200000];

const ProfitSimulator = () => {
  const [capitalIndex, setCapitalIndex] = useState(2);
  const [returnPct, setReturnPct] = useState(10);

  const capital = capitalOptions[capitalIndex];
  const profit = capital * (returnPct / 100);
  const traderPayout = profit * 0.9;

  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <div className="text-center mb-14">
            <SectionLabel>Simulador</SectionLabel>
            <motion.h2 className="font-display text-3xl md:text-5xl font-bold mb-5 text-balance" variants={fadeUp} custom={1}>
              Simule seus <span className="text-primary">ganhos</span>
            </motion.h2>
            <motion.p className="text-muted-foreground text-base max-w-md mx-auto" variants={fadeUp} custom={2}>
              Veja quanto você pode ganhar operando com capital da MyProp.
            </motion.p>
          </div>

          <motion.div
            className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10"
            variants={fadeUp}
            custom={3}
          >
            {/* Capital */}
            <div className="mb-8">
              <label className="text-sm font-semibold text-foreground mb-3 block">
                Capital da conta
              </label>
              <div className="flex gap-2 flex-wrap">
                {capitalOptions.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => setCapitalIndex(i)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      capitalIndex === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-foreground/20"
                    }`}
                  >
                    {fmt(c)}
                  </button>
                ))}
              </div>
            </div>

            {/* Return */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-foreground">
                  Retorno mensal
                </label>
                <span className="font-display text-lg font-bold text-primary">{returnPct}%</span>
              </div>
              <Slider
                value={[returnPct]}
                onValueChange={([v]) => setReturnPct(v)}
                min={1}
                max={30}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: DollarSign, label: "Capital", value: fmt(capital) },
                { icon: Percent, label: "Retorno", value: `${returnPct}%` },
                { icon: TrendingUp, label: "Lucro total", value: fmt(profit) },
                { icon: Wallet, label: "Seu repasse (90%)", value: fmt(traderPayout), highlight: true },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 text-center ${
                      item.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border"
                    }`}
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-2 ${item.highlight ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    <p className={`text-xs mb-1 ${item.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {item.label}
                    </p>
                    <p className="font-display font-bold text-lg">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitSimulator;
