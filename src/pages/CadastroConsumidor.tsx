import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAdmin } from "@/contexts/AdminContext";
import InputMask from "react-input-mask";

const CadastroConsumidor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addUser } = useAdmin();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    genero: "",
    cpf: "",
    celular: "",
    dataNascimento: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    senha: "",
    confirmacaoSenha: "",
    aceitarTermos: false,
  });

  const handleCepChange = async (value: string) => {
    const cleanCep = value.replace(/\D/g, "");
    setFormData(prev => ({ ...prev, cep: value }));
    
    if (cleanCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            uf: data.uf || ""
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

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

    // Adicionar usuário ao sistema admin
    addUser({
      nome: formData.nome,
      email: formData.email,
      cpf: formData.cpf,
      celular: formData.celular,
      plano: 'Não selecionado'
    });

    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Você será redirecionado para sua área de assinatura.",
    });
    
    setTimeout(() => {
      navigate("/minha-assinatura");
    }, 2000);
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
              <button 
                onClick={() => navigate("/")}
                className="text-primary font-semibold hover:underline"
              >
                Voltar
              </button>
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
                <InputMask
                  mask="999.999.999-99"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange("cpf", e.target.value)}
                >
                  {(inputProps: any) => 
                    <Input
                      {...inputProps}
                      id="cpf"
                      placeholder="000.000.000-00"
                      required
                      className="h-12"
                    />
                  }
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="celular">Celular *</Label>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.celular}
                  onChange={(e) => handleInputChange("celular", e.target.value)}
                >
                  {(inputProps: any) => 
                    <Input
                      {...inputProps}
                      id="celular"
                      placeholder="(00) 00000-0000"
                      required
                      className="h-12"
                    />
                  }
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                <InputMask
                  mask="99/99/9999"
                  value={formData.dataNascimento}
                  onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                >
                  {(inputProps: any) => 
                    <Input
                      {...inputProps}
                      id="dataNascimento"
                      placeholder="00/00/0000"
                      required
                      className="h-12"
                    />
                  }
                </InputMask>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="cep">CEP *</Label>
                <InputMask
                  mask="99999-999"
                  value={formData.cep}
                  onChange={(e) => handleCepChange(e.target.value)}
                >
                  {(inputProps: any) => 
                    <Input
                      {...inputProps}
                      id="cep"
                      placeholder="00000-000"
                      required
                      className="h-12"
                    />
                  }
                </InputMask>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logradouro">Endereço</Label>
                <Input
                  id="logradouro"
                  type="text"
                  value={formData.logradouro}
                  onChange={(e) => handleInputChange("logradouro", e.target.value)}
                  placeholder="Rua, número"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  id="bairro"
                  type="text"
                  value={formData.bairro}
                  onChange={(e) => handleInputChange("bairro", e.target.value)}
                  placeholder="Bairro"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange("cidade", e.target.value)}
                  placeholder="Cidade"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="uf">UF</Label>
                <Select value={formData.uf} onValueChange={(value) => handleInputChange("uf", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">AC</SelectItem>
                    <SelectItem value="AL">AL</SelectItem>
                    <SelectItem value="AP">AP</SelectItem>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="BA">BA</SelectItem>
                    <SelectItem value="CE">CE</SelectItem>
                    <SelectItem value="DF">DF</SelectItem>
                    <SelectItem value="ES">ES</SelectItem>
                    <SelectItem value="GO">GO</SelectItem>
                    <SelectItem value="MA">MA</SelectItem>
                    <SelectItem value="MT">MT</SelectItem>
                    <SelectItem value="MS">MS</SelectItem>
                    <SelectItem value="MG">MG</SelectItem>
                    <SelectItem value="PA">PA</SelectItem>
                    <SelectItem value="PB">PB</SelectItem>
                    <SelectItem value="PR">PR</SelectItem>
                    <SelectItem value="PE">PE</SelectItem>
                    <SelectItem value="PI">PI</SelectItem>
                    <SelectItem value="RJ">RJ</SelectItem>
                    <SelectItem value="RN">RN</SelectItem>
                    <SelectItem value="RS">RS</SelectItem>
                    <SelectItem value="RO">RO</SelectItem>
                    <SelectItem value="RR">RR</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="SP">SP</SelectItem>
                    <SelectItem value="SE">SE</SelectItem>
                    <SelectItem value="TO">TO</SelectItem>
                  </SelectContent>
                </Select>
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
                className="btn-cta w-full h-14 text-lg"
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