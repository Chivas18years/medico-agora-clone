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
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/323f196f-ff9b-4c5e-9daa-5f423c58b7ad.png" 
            alt="Logos dos parceiros" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;