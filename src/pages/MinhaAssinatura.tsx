import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, CreditCard, QrCode, Gift } from "lucide-react";
import Footer from "@/components/Footer";

const MinhaAssinatura = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("mensal");
  const [paymentMethod, setPaymentMethod] = useState("cartao");

  const plans = {
    mensal: {
      name: "Assinatura Individual",
      price: "R$ 19,90",
      period: "por mês",
      benefits: [
        "Consultas 24h com clínico geral por apenas R$ 14,90",
        "Psicologia por R$ 39,90 à sessão de terapia",
        "Consulta Psiquiátrica por apenas R$ 89,90",
        "Sem limite de uso",
        "Acesso total ao clube de benefícios"
      ]
    },
    familiar: {
      name: "Assinatura Família",
      price: "R$ 34,90",
      period: "por mês",
      benefits: [
        "Consultas 24h com clínico geral por apenas R$ 14,90",
        "Psicologia por R$ 39,90 à sessão de terapia",
        "Consulta Psiquiátrica por apenas R$ 89,90",
        "Válido para titular + 3 dependentes",
        "Acesso total ao clube de benefícios"
      ]
    },
    unica: {
      name: "Consulta Única",
      price: "R$ 44,50",
      period: "por consulta",
      benefits: [
        "Consulta 24h com clínico geral",
        "Sem limite de uso",
        "Não tem fidelidade",
        "Não tem carência",
        "Comece a usar agora mesmo"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header da Área Logada */}
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
            
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold">Saldo Disponível: R$ 0,00</span>
              <a href="#" className="text-primary font-semibold hover:underline">
                Minha Conta
              </a>
              <Button 
                variant="outline"
                onClick={() => navigate("/")}
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Aviso de Assinatura Inativa */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <div>
            <h3 className="font-semibold text-yellow-800">Atenção!</h3>
            <p className="text-yellow-700">Sua assinatura está inativa. Efetue o pagamento para continuar usando nossos serviços.</p>
          </div>
        </div>

        {/* Box de Seleção de Plano */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Escolha a opção que melhor atende à sua necessidade</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={selectedPlan === "mensal" ? "default" : "outline"}
              onClick={() => setSelectedPlan("mensal")}
              className="px-8 py-3"
            >
              Plano Mensal
            </Button>
            <Button
              variant={selectedPlan === "familiar" ? "default" : "outline"}
              onClick={() => setSelectedPlan("familiar")}
              className="px-8 py-3"
            >
              Plano Familiar
            </Button>
            <Button
              variant={selectedPlan === "unica" ? "default" : "outline"}
              onClick={() => setSelectedPlan("unica")}
              className="px-8 py-3"
            >
              Consulta Única
            </Button>
          </div>
        </div>

        {/* Seção de Pagamento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card de Resumo do Plano */}
          <div className="lg:col-span-1">
            <Card className="bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-center">{plans[selectedPlan].name}</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold">{plans[selectedPlan].price}</div>
                  <div className="text-sm opacity-90">{plans[selectedPlan].period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plans[selectedPlan].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tabs de Pagamento */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="pagamento" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pagamento">Pagamento</TabsTrigger>
                <TabsTrigger value="historico">Histórico de Pagamentos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pagamento" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Forma de Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <Button
                        variant={paymentMethod === "cartao" ? "default" : "outline"}
                        onClick={() => setPaymentMethod("cartao")}
                        className="flex items-center gap-2"
                      >
                        <CreditCard className="h-4 w-4" />
                        Cartão de Crédito
                      </Button>
                      <Button
                        variant={paymentMethod === "pix" ? "default" : "outline"}
                        onClick={() => setPaymentMethod("pix")}
                        className="flex items-center gap-2"
                      >
                        <QrCode className="h-4 w-4" />
                        PIX
                      </Button>
                      <Button
                        variant={paymentMethod === "voucher" ? "default" : "outline"}
                        onClick={() => setPaymentMethod("voucher")}
                        className="flex items-center gap-2"
                      >
                        <Gift className="h-4 w-4" />
                        Voucher
                      </Button>
                    </div>

                    {paymentMethod === "cartao" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Número do Cartão</Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Nome no Cartão</Label>
                          <Input id="card-name" placeholder="Nome completo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-expiry">Validade</Label>
                          <Input id="card-expiry" placeholder="MM/AA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-cvv">CVV</Label>
                          <Input id="card-cvv" placeholder="000" />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <Label htmlFor="installments">Parcelas</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o número de parcelas" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1x de {plans[selectedPlan].price}</SelectItem>
                              <SelectItem value="2">2x de R$ {(parseFloat(plans[selectedPlan].price.replace('R$ ', '').replace(',', '.')) / 2).toFixed(2).replace('.', ',')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "voucher" && (
                      <div className="space-y-2">
                        <Label htmlFor="voucher-code">Código do Voucher</Label>
                        <Input id="voucher-code" placeholder="Digite o código do voucher" />
                      </div>
                    )}

                    <Button className="w-full btn-cta">
                      Ativar {plans[selectedPlan].name}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="historico">
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Pagamentos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Fatura</TableHead>
                          <TableHead>Assinatura</TableHead>
                          <TableHead>Data de Geração</TableHead>
                          <TableHead>Descrição</TableHead>
                          <TableHead>Valor</TableHead>
                          <TableHead>Situação</TableHead>
                          <TableHead>Ação</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                            Nenhum pagamento encontrado
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MinhaAssinatura;