import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Save, Key } from 'lucide-react';

const AdminSettings = () => {
  const { pixKey, updatePixKey } = useAdmin();
  const [newPixKey, setNewPixKey] = useState(pixKey);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simular delay de salvamento
    setTimeout(() => {
      updatePixKey(newPixKey);
      toast({
        title: "Configurações salvas!",
        description: "A chave PIX foi atualizada com sucesso.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Configurações do Sistema</h2>
          <p className="text-gray-600">Gerencie as configurações da plataforma</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configurações de Pagamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Configurações de Pagamento
              </CardTitle>
              <CardDescription>
                Configure a chave PIX para geração de QR Codes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pixKey">Chave PIX Global para Geração de QR Code</Label>
                <Input
                  id="pixKey"
                  type="text"
                  value={newPixKey}
                  onChange={(e) => setNewPixKey(e.target.value)}
                  placeholder="Digite a chave PIX (email, CPF, telefone ou chave aleatória)"
                />
                <p className="text-sm text-gray-600">
                  Esta chave será utilizada para gerar todos os QR Codes de pagamento via PIX na plataforma.
                </p>
              </div>

              <Button 
                onClick={handleSave}
                disabled={isLoading}
                className="w-full"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? "Salvando..." : "Salvar Configurações"}
              </Button>
            </CardContent>
          </Card>

          {/* Informações do Sistema */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Sistema</CardTitle>
              <CardDescription>
                Dados técnicos da plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Versão:</p>
                  <p className="text-gray-600">1.0.0</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Ambiente:</p>
                  <p className="text-gray-600">Produção</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Última Atualização:</p>
                  <p className="text-gray-600">{new Date().toLocaleDateString('pt-BR')}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Status:</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Online
                  </span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-medium text-gray-700 mb-2">Chave PIX Atual:</p>
                <p className="text-sm bg-gray-100 p-2 rounded border font-mono">
                  {pixKey || 'Não configurada'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;