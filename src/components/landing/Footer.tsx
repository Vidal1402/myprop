import logoMyprop from "@/assets/logo-myprop.png";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { title: "Produto", links: ["Planos", "Como funciona", "Diferenciais", "FAQ"] },
  { title: "Empresa", links: ["Sobre nós", "Blog", "Carreiras", "Contato"] },
  { title: "Legal", links: ["Termos de uso", "Política de privacidade", "Regulamento"] },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2 md:col-span-1">
          <img src={logoMyprop} alt="MyProp Trading" className="h-8 brightness-0 invert mb-4" />
          <p className="text-sm opacity-35 leading-relaxed max-w-xs">
            Mesa proprietária para traders que buscam capital, estrutura e tecnologia para escalar.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="font-display font-bold text-sm mb-4 opacity-70">{group.title}</h4>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-35 hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs opacity-25">
          © 2026 MyProp Trading. Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          {["Instagram", "Discord", "YouTube"].map((social) => (
            <a key={social} href="#" className="text-xs opacity-35 hover:opacity-70 transition-opacity inline-flex items-center gap-0.5">
              {social}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t border-background/5">
      <div className="container py-4">
        <p className="text-[11px] opacity-15 text-center leading-relaxed max-w-3xl mx-auto">
          Trading envolve riscos significativos. Resultados passados não garantem resultados futuros.
          A participação nos programas da MyProp Trading está sujeita às regras do regulamento.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
