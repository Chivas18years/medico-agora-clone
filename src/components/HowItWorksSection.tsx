const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Cadastre-se",
      description: "Faça seu cadastro na plataforma de forma rápida e simples"
    },
    {
      number: "2", 
      title: "Escolha seu plano",
      description: "Selecione o plano que melhor se adequa às suas necessidades"
    },
    {
      number: "3",
      title: "Agende sua consulta",
      description: "Marque sua consulta médica online 24h por dia, quando precisar"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Como Funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;