import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const CadastroConsumidor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    genero: "",
    cpf: "",
    celular: "",
    dataNascimento: "",
    cep: "",
    senha: "",
    confirmacaoSenha: "",
    aceitarTermos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmacaoSenha) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.aceitarTermos) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos e condições.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Cadastro realizado!",
      description: "Seu cadastro foi realizado com sucesso.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/39fde8b4-76b7-4d2b-adde-073d4d5f42cb.png" 
                alt="Médico Agora" 
                className="h-12"
              />
            </div>
            <div className="flex items-center gap-4">
              <a href="/" className="text-primary font-semibold hover:underline">
                Voltar
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Formulário de Cadastro */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cadastro de Consumidor
            </h1>
            <p className="text-muted-foreground text-lg">
              Preencha os dados abaixo para criar sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="genero">Gênero *</Label>
                <Select onValueChange={(value) => handleInputChange("genero", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione seu gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                    <SelectItem value="prefiro-nao-informar">Prefiro não informar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF *</Label>
                <Input
                  id="cpf"
                  type="text"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                  placeholder="000.000.000-00"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="celular">Celular *</Label>
                <Input
                  id="celular"
                  type="tel"
                  value={formData.celular}
                  onChange={(e) => handleInputChange("celular", e.target.value)}
                  placeholder="(00) 00000-0000"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  id="cep"
                  type="text"
                  value={formData.cep}
                  onChange={(e) => handleInputChange("cep", e.target.value)}
                  placeholder="00000-000"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha *</Label>
                <Input
                  id="senha"
                  type="password"
                  value={formData.senha}
                  onChange={(e) => handleInputChange("senha", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmacaoSenha">Confirmação de Senha *</Label>
                <Input
                  id="confirmacaoSenha"
                  type="password"
                  value={formData.confirmacaoSenha}
                  onChange={(e) => handleInputChange("confirmacaoSenha", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox
                id="terms"
                checked={formData.aceitarTermos}
                onCheckedChange={(checked) => handleInputChange("aceitarTermos", checked as boolean)}
              />
              <div className="text-sm">
                <label htmlFor="terms" className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Li e concordo com os{" "}
                  <a href="#" className="text-primary hover:underline">
                    Termos e Condições
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-primary hover:underline">
                    Lei Geral de Proteção de Dados
                  </a>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="btn-primary w-full h-14 text-lg"
              >
                CADASTRAR
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroConsumidor;