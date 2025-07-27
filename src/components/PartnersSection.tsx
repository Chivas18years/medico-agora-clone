const PartnersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Descontos Exclusivos
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Acesse nosso clube de benefícios com descontos em grandes marcas
        </p>
        
        <div className="max-w-6xl mx-auto">
          <img 
            src="/lovable-uploads/f1343e3a-ac5d-48ef-abec-265126c7d96a.png" 
            alt="Logos dos parceiros - Droga Raia, Burger King, Marisa, Pague Menos, Centauro, Renner, Casas Bahia, Drogasil, Cinemark, Magalu, Netshoes, Riachuelo" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;