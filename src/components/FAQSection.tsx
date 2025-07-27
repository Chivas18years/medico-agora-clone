import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Como funciona o atendimento médico online?",
      answer: "O atendimento é realizado através de videochamada com médicos licenciados. Após a consulta, você recebe atestados e receitas válidas por e-mail."
    },
    {
      question: "Os atestados médicos são válidos?",
      answer: "Sim, todos os atestados e receitas são emitidos por médicos licenciados e têm validade legal em todo território nacional."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, não há fidelidade. Você pode cancelar sua assinatura a qualquer momento através do aplicativo ou site."
    },
    {
      question: "Quanto tempo demora para ser atendido?",
      answer: "Nosso atendimento está disponível 24 horas por dia. O tempo médio de espera é de 5 a 15 minutos."
    },
    {
      question: "Quais especialidades estão disponíveis?",
      answer: "Oferecemos clínico geral, psicologia e psiquiatria. Outras especialidades podem ser adicionadas conforme demanda."
    },
    {
      question: "Como funciona o plano família?",
      answer: "O plano família permite que o titular e até 3 dependentes utilizem todos os serviços da plataforma."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleItem(index)}
                className="faq-trigger"
              >
                <span className="text-left">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;