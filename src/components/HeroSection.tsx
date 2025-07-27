import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto Principal */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title mb-6">
              Consultas médicas{" "}
              <span className="text-primary">24h</span>{" "}
              por apenas{" "}
              <span className="text-primary">R$ 14,90</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Atendimento médico completo 24 horas por dia, 7 dias por semana, 
              com atestados médicos inclusos e acesso a especialistas.
            </p>
            
            {/* Box de Oferta */}
            <div className="bg-primary-dark text-white p-6 rounded-[var(--radius)] mb-8 inline-block">
              <div className="price-box">
                <h3 className="text-2xl font-bold mb-2">ASSINATURA FAMÍLIA</h3>
                <div className="text-4xl font-black">R$ 34,90</div>
                <div className="text-sm opacity-90">por mês</div>
              </div>
              <Button 
                onClick={() => navigate("/cadastro-consumidor")}
                className="btn-cta w-full mt-4 bg-cyan-400 hover:bg-cyan-300 text-primary-dark"
              >
                EU QUERO
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="text-center">
            <img 
              src="/lovable-uploads/2d21f8b5-49f1-4253-ae53-1bd2093b380c.png" 
              alt="Médico apresentando o serviço" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;