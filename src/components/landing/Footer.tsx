import logoMyprop from "@/assets/logo-myprop.png";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const footerLinks = [
  { title: "Produto", links: ["Planos", "Como funciona", "Diferenciais", "FAQ"] },
  { title: "Empresa", links: ["Sobre nós", "Blog", "Carreiras", "Contato"] },
  { title: "Legal", links: ["Termos de uso", "Política de privacidade"] },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 max-md:justify-items-center">
        <div className="col-span-2 md:col-span-1 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
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
        <div>
          <h4 className="font-display font-bold text-sm mb-4 opacity-70">Regulamento</h4>
          <ul className="space-y-2.5">
            <li>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm opacity-35 hover:opacity-70 transition-opacity underline underline-offset-4 decoration-dotted">
                    Ver regulamento
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                  <DialogHeader>
                    <DialogTitle>Regulamento MyProp Trading</DialogTitle>
                  </DialogHeader>
                  <div className="mt-2 flex-1 overflow-y-auto pr-2 space-y-4 text-sm text-muted-foreground">
                    <p>
                      Ao contratar qualquer plano da <strong>MyProp Trading</strong>, o trader confirma ciência e
                      concordância integral com os termos abaixo.
                    </p>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">1. Sobre a MyProp Trading</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          A MyProp Trading é uma <strong>mesa proprietária de capital</strong>, com foco em traders
                          independentes.
                        </li>
                        <li>
                          O trader inicia escolhendo planos com teste ou sem testes no{" "}
                          <strong>simulador remunerado</strong>, onde os resultados já são reconhecidos e pagos pela
                          MyProp Trading dentro de suas regras.
                        </li>
                        <li>
                          O objetivo é <strong>avaliar o operacional</strong> de cada trader para futura{" "}
                          <strong>migração ao capital real</strong>, priorizando consistência e disciplina.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">2. Planos e Estrutura</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          Cada plano possui: <strong>margem, número de contratos, limites de perda diário</strong> e
                          condições específicas, que devem ser respeitadas integralmente.
                        </li>
                        <li>
                          <strong>Profit One incluso em todos os planos</strong>, sem custo adicional e sem cobrança de
                          mensalidade.
                        </li>
                        <li>
                          Todos os planos têm <strong>validade de 30 dias corridos</strong> a partir da ativação.
                        </li>
                        <li>
                          Os planos da MyProp Trading possuem <strong>drawdown</strong>: a redução do saldo após
                          sequência de perdas. Ao atingir o limite de perda, o trader pode optar por pagar uma{" "}
                          <strong>taxa de reativação</strong> para continuar operando, quando disponível.
                        </li>
                        <li>
                          Ao expirar a validade, o trader pode <strong>renovar o mesmo plano ou migrar para outro</strong>.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">3. Condutas Proibidas</h3>
                      <p className="mb-1">É expressamente proibido:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <strong>Copy trade, arbitragem, hedge entre contas, replicação de sinais.</strong>
                        </li>
                        <li>
                          <strong>Uso de robôs/algoritmos automatizados</strong>, salvo autorização prévia.
                        </li>
                        <li>
                          <strong>Compartilhar conta, operar por terceiros ou manipular resultados.</strong>
                        </li>
                      </ul>
                      <p className="mt-2">
                        ⚠️ A MyProp Trading se reserva o direito de{" "}
                        <strong>encerrar contas sem aviso prévio</strong> em caso de infração, sem direito a reembolso.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">4. Performance e Reconhecimento</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          Os resultados obtidos no simulador são{" "}
                          <strong>remunerados de forma real</strong> pela MyProp Trading, conforme regras de cada plano.
                        </li>
                        <li>
                          Apenas traders consistentes, disciplinados e com histórico limpo poderão migrar para operar
                          capital real.
                        </li>
                        <li>
                          A MyProp Trading prioriza <strong>operacionais sólidos e sustentáveis</strong>, e não
                          estratégias artificiais ou de risco descontrolado.
                        </li>
                        <li>
                          É exigido um <strong>lucro mínimo de 20%</strong> dentro da validade do plano para habilitar
                          repasses, salvo indicação diversa em condições específicas do plano.
                        </li>
                        <li>
                          <strong>Regra dos 30% – Consistência Operacional:</strong> nenhum único dia poderá representar
                          mais de 30% do lucro total acumulado no período. Caso ultrapasse, o trader deverá seguir
                          operando até que equilibre o lucro.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">5. Repasse e Saques</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          Em conta simulador e real: <strong>90% do lucro é repassado ao trader</strong>, salvo
                          condições específicas de determinados planos.
                        </li>
                        <li>
                          O repasse é processado <strong>uma vez por semana</strong>, mediante análise.
                        </li>
                        <li>
                          Após aprovação, o saque é liberado em até <strong>48 horas úteis</strong>.
                        </li>
                        <li>
                          Saques podem ser solicitados a cada{" "}
                          <strong>7 dias corridos com no mínimo 20% de lucro</strong>, respeitando o regulamento.
                        </li>
                        <li>
                          ⚠️ Para solicitar repasse, a{" "}
                          <strong>conta do trader deve estar ativa dentro da validade de 30 dias do plano</strong>.
                          Contas expiradas não são elegíveis.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">6. Penalidades</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          Violações de regras implicam <strong>encerramento imediato da conta, sem direito a reembolso</strong>.
                        </li>
                        <li>
                          Casos graves (fraude, manipulação de mercado, bots não autorizados) resultam em{" "}
                          <strong>banimento permanente</strong> da mesa.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">7. Compromisso MyProp Trading</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          <strong>Profit One incluso, sem mensalidade extra</strong>, quando aplicável ao plano
                          contratado.
                        </li>
                        <li>
                          <strong>Planos claros, validade de 30 dias e risco já embutido</strong>.
                        </li>
                        <li>
                          <strong>Repasse rápido</strong>: aprovado em até 48h após análise semanal.
                        </li>
                        <li>
                          <strong>Capital real para traders consistentes</strong>.
                        </li>
                        <li>
                          <strong>Limite de perda diário e margem</strong> são critérios eliminatórios.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">8. Transparência Financeira</h3>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>
                          A MyProp Trading não cobra <strong>taxas de saque adicionais</strong>, salvo encargos de
                          terceiros (bancos, meios de pagamento etc.).
                        </li>
                        <li>
                          Emolumentos e custos operacionais podem variar conforme o mercado e serão informados nos
                          canais oficiais.
                        </li>
                        <li>
                          Todos os pagamentos de repasse serão realizados{" "}
                          <strong>exclusivamente em nome do titular da conta</strong>, mediante{" "}
                          <strong>KYC (validação de identidade e dados bancários)</strong> para segurança.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-semibold text-foreground mb-1">9. Disclaimer</h3>
                      <p>
                        <strong>Atenção:</strong> resultados passados não são garantia de resultados futuros. Ao adquirir
                        qualquer produto você concorda com este regulamento.
                      </p>
                      <p className="mt-2">
                        A <strong>MyProp Trading</strong> não atua nem presta serviços como corretora ou depositária.
                        Todas as informações fornecidas destinam-se exclusivamente a fins educacionais relacionados à
                        trading nos mercados financeiros.
                      </p>
                      <p className="mt-2">
                        Todas as operações ocorrem em ambiente de trading ao vivo simulado ou conforme especificado em
                        cada plano. Os valores pagos à MyProp Trading são utilizados para participação em desafios de
                        trading e para cobrir custos operacionais, e{" "}
                        <strong>não constituem depósitos financeiros</strong>.
                      </p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 max-md:text-center">
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
