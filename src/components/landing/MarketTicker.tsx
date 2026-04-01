import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, DollarSign, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const marketData = [
  { symbol: "WIN", name: "Mini Índice", basePrice: 128450, icon: BarChart3 },
  { symbol: "WDO", name: "Mini Dólar", basePrice: 5685, icon: DollarSign },
  { symbol: "IBOV", name: "Ibovespa", basePrice: 131250, icon: Activity },
  { symbol: "S&P 500", name: "S&P Futures", basePrice: 5890, icon: TrendingUp },
  { symbol: "BTC", name: "Bitcoin", basePrice: 98450, icon: BarChart3 },
  { symbol: "NDX", name: "Nasdaq 100", basePrice: 21340, icon: Activity },
];

const MarketTicker = () => {
  const [prices, setPrices] = useState(
    marketData.map((m) => ({
      ...m,
      price: m.basePrice,
      change: +(Math.random() * 2 - 0.5).toFixed(2),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * item.basePrice * 0.001;
          const newPrice = +(item.price + delta).toFixed(item.basePrice > 10000 ? 0 : 2);
          const change = +(((newPrice - item.basePrice) / item.basePrice) * 100).toFixed(2);
          return { ...item, price: newPrice, change };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const duplicated = [...prices, ...prices, ...prices];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-foreground text-background overflow-hidden">
      <motion.div
        className="flex items-center gap-10 py-2.5 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => {
          const Icon = item.icon;
          const isUp = item.change >= 0;
          return (
            <div key={i} className="flex items-center gap-2 text-xs">
              <Icon className="w-3.5 h-3.5 text-primary" />
              <span className="font-display font-bold">{item.symbol}</span>
              <span className="font-mono opacity-70">{item.price.toLocaleString("pt-BR")}</span>
              <span className={`font-bold ${isUp ? "text-emerald-400" : "text-red-400"}`}>
                {isUp ? <TrendingUp className="w-3 h-3 inline mr-0.5" /> : <TrendingDown className="w-3 h-3 inline mr-0.5" />}
                {isUp ? "+" : ""}{item.change}%
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarketTicker;
