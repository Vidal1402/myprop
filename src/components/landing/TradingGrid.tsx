import { useEffect, useRef, useCallback } from "react";

const TradingGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const candles: { x: number; open: number; close: number; high: number; low: number }[] = [];
    let price = 50;
    for (let i = 0; i < 80; i++) {
      const open = price;
      const change = (Math.random() - 0.48) * 3;
      const close = open + change;
      const high = Math.max(open, close) + Math.random() * 1.5;
      const low = Math.min(open, close) - Math.random() * 1.5;
      price = close;
      candles.push({ x: i, open, close, high, low });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Interactive grid — lines glow near mouse
      const gridSize = 50;
      for (let x = 0; x < w; x += gridSize) {
        const dist = Math.abs(x - mx);
        const alpha = Math.max(0.03, 0.12 - dist * 0.0003);
        ctx.strokeStyle = `rgba(120, 97, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        const dist = Math.abs(y - my);
        const alpha = Math.max(0.03, 0.12 - dist * 0.0003);
        ctx.strokeStyle = `rgba(120, 97, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Mouse glow
      if (mx > 0 && my > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        grd.addColorStop(0, "rgba(120, 97, 255, 0.06)");
        grd.addColorStop(1, "rgba(120, 97, 255, 0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      }

      // Candlesticks
      const candleW = w / 80;
      const minP = Math.min(...candles.map((c) => c.low));
      const maxP = Math.max(...candles.map((c) => c.high));
      const range = maxP - minP;
      const toY = (p: number) => h - ((p - minP) / range) * h * 0.5 - h * 0.25;

      const visible = Math.floor((time * 0.15) % 80);

      candles.forEach((c, i) => {
        if (i > visible) return;
        const fade = Math.max(0.04, 1 - (visible - i) * 0.025);
        const cx = c.x * candleW + candleW / 2;
        const isGreen = c.close >= c.open;

        ctx.strokeStyle = isGreen
          ? `rgba(120, 97, 255, ${fade * 0.25})`
          : `rgba(158, 161, 173, ${fade * 0.2})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(cx, toY(c.high));
        ctx.lineTo(cx, toY(c.low));
        ctx.stroke();

        const bodyTop = toY(Math.max(c.open, c.close));
        const bodyBot = toY(Math.min(c.open, c.close));
        ctx.fillStyle = isGreen
          ? `rgba(120, 97, 255, ${fade * 0.15})`
          : `rgba(158, 161, 173, ${fade * 0.1})`;
        ctx.fillRect(cx - candleW * 0.35, bodyTop, candleW * 0.7, Math.max(bodyBot - bodyTop, 1));
      });

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default TradingGrid;
