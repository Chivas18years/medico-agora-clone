import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ConsultaUnicaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Ou Pague Apenas Quando Precisar
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Card de Consulta Única */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/d50bddbd-19a7-4b98-ab7f-002bffaead7e.png" 
                  alt="Consulta Única por R$ 44,50" 
                  className="w-full max-w-sm h-auto"
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4/5">
                  <Button 
                    onClick={() => navigate("/cadastro-consumidor")}
                    className="btn-cta w-full bg-cyan-400 hover:bg-cyan-300 text-primary-dark py-3 text-lg font-bold"
                  >
                    EU QUERO
                  </Button>
                </div>
              </div>
            </div>

            {/* Texto Explicativo */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Consulta Médica Quando Você Precisar
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Não quer uma assinatura mensal? Sem problemas! 
                  Com nossa modalidade de <strong>Consulta Única</strong>, 
                  você paga apenas quando precisa de atendimento médico.
                </p>
                <p>
                  Por apenas <strong className="text-primary">R$ 44,50</strong>, 
                  tenha acesso a consultas médicas 24 horas por dia com 
                  clínicos gerais experientes.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sem mensalidade, pague apenas quando usar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Atendimento médico 24h disponível</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sem carência, use imediatamente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Não tem fidelidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultaUnicaSection;