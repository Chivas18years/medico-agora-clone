import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      type: "ASSINATURA INDIVIDUAL",
      price: "R$ 19,90",
      period: "por mês",
      features: [
        "Consultas 24h com clínico geral por apenas R$ 14,90 por consulta;",
        "Psicologia por R$ 39,90 à sessão de terapia;", 
        "Consulta Psiquiátrica por apenas R$ 89,90 à consulta;",
        "Sem limite de uso, use quantas vezes precisar;",
        "Não tem fidelidade, cancele quando quiser;",
        "Não tem carência, comece a usar agora mesmo;",
        "Acesso total ao nosso clube de benefícios."
      ],
      disclaimer: "Válido apenas para o titular do cadastro.",
      fee: "Taxa de adesão de R$ 20,00 paga apenas uma vez.",
      buttonStyle: "bg-cyan-400 hover:bg-cyan-300 text-primary-dark"
    },
    {
      type: "ASSINATURA FAMÍLIA", 
      price: "R$ 34,90",
      period: "por mês",
      features: [
        "Consultas 24h com clínico geral por apenas R$ 14,90 por consulta;",
        "Psicologia por R$ 39,90 à sessão de terapia;",
        "Consulta Psiquiátrica por apenas R$ 89,90 à consulta;", 
        "Sem limite de uso, use quantas vezes precisar;",
        "Não tem fidelidade, cancele quando quiser;",
        "Não tem carência, comece a usar agora mesmo;",
        "Acesso total ao nosso clube de benefícios."
      ],
      disclaimer: "Válido para o titular do cadastro e 3 dependentes.",
      fee: "Taxa de adesão de R$ 20,00 paga apenas uma vez.",
      buttonStyle: "bg-cyan-400 hover:bg-cyan-300 text-primary-dark"
    },
    {
      type: "ASSINATURA EMPRESARIAL",
      price: "Consulte",
      period: "valores especiais",
      features: [
        "Planos corporativos personalizados;",
        "Atendimento dedicado para empresas;",
        "Relatórios de uso detalhados;",
        "Integração com sistemas corporativos;",
        "Suporte técnico prioritário;",
        "Treinamento da equipe incluído;",
        "Condições especiais de pagamento."
      ],
      disclaimer: "Válido para empresas com mais de 10 funcionários.",
      fee: "Entre em contato para mais informações.",
      buttonStyle: "bg-cyan-400 hover:bg-cyan-300 text-primary-dark"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Assinaturas e Planos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="price-card">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4">{plan.type}</h3>
                <div className="price-box">
                  <div className="text-3xl font-black">{plan.price}</div>
                  <div className="text-sm opacity-90">{plan.period}</div>
                </div>
              </div>
              
              <ul className="benefit-list text-sm mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="benefit-item">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white/10 p-4 rounded-lg mb-4 text-sm">
                <p className="mb-2">{plan.disclaimer}</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg mb-6 text-sm">
                <p>{plan.fee}</p>
              </div>
              
              <Button 
                onClick={() => navigate("/cadastro-consumidor")}
                className={`w-full py-3 rounded-full font-bold uppercase ${plan.buttonStyle}`}
              >
                EU QUERO
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;