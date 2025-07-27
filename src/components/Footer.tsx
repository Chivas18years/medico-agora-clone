const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/423afa33-42c6-4183-b699-3c34858a882a.png" 
              alt="Help Global" 
              className="h-12 mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm opacity-90">
              Conectando você aos melhores profissionais de saúde
            </p>
          </div>

          {/* Links Úteis */}
          <div className="text-center">
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:underline">Termos e Condições</a></li>
              <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
              <li><a href="#" className="hover:underline">LGPD</a></li>
              <li><a href="#" className="hover:underline">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Central de Atendimento:</p>
              <p className="font-semibold">(11) 4000-0000</p>
              <p>atendimento@medicoagora.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Médico Agora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;