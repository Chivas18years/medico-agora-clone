import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/39fde8b4-76b7-4d2b-adde-073d4d5f42cb.png" 
              alt="Médico Agora" 
              className="h-10 md:h-12"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-primary font-semibold hover:underline hidden md:inline"
            >
              ENTRAR
            </a>
            <Button 
              onClick={() => navigate("/cadastro-consumidor")}
              className="btn-cta"
            >
              ASSINAR PLATAFORMA
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;