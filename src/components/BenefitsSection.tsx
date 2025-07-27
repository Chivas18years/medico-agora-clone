import { Clock, Smartphone, User } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <img src="/lovable-uploads/b2264719-0406-46a6-aaa8-d3f227faec2b.png" alt="Atendimento Médico" className="w-16 h-16" />,
      title: "Atendimento Médico 24h",
      description: "Consultas médicas disponíveis 24 horas por dia, 7 dias por semana"
    },
    {
      icon: <img src="/lovable-uploads/9211cea9-3d40-4aad-bc46-f8963cf682cf.png" alt="Atestados Inclusos" className="w-16 h-16" />,
      title: "Incluso atestados e receitas médicas",
      description: "Receba atestados e receitas médicas válidas sem custo adicional"
    },
    {
      icon: <img src="/lovable-uploads/89809907-6f1c-4d67-8191-92aefbf26c0f.png" alt="App Mobile" className="w-16 h-16" />,
      title: "Aplicativo Mobile",
      description: "Acesse nossos serviços pelo aplicativo no seu celular"
    },
    {
      icon: <img src="/lovable-uploads/179584e4-c85f-42c2-baf2-3385de1fa844.png" alt="Pagamento Seguro" className="w-16 h-16" />,
      title: "Pagamento Seguro",
      description: "Transações seguras e protegidas para sua tranquilidade"
    },
    {
      icon: <img src="/lovable-uploads/618913ff-777c-49da-80ba-36297ca6a8c2.png" alt="Plano Família" className="w-16 h-16" />,
      title: "Plano Família",
      description: "Cobertura para toda a família com um único plano"
    },
    {
      icon: <img src="/lovable-uploads/8a2c0e4c-27de-4696-a524-71eba2679b0c.png" alt="Disponibilidade" className="w-16 h-16" />,
      title: "Disponível 24/7",
      description: "Suporte médico sempre que você precisar, sem horário marcado"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Por que escolher o Médico Agora?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;