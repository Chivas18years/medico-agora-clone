import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, CreditCard, UserCheck } from 'lucide-react';

const AdminDashboard = () => {
  const { users } = useAdmin();
  
  const totalUsers = users.length;
  const activeSubscriptions = users.filter(user => user.status === 'Ativo').length;
  const lastFiveUsers = users.slice(-5).reverse();

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600">Visão geral do sistema</p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Usuários cadastrados no sistema
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeSubscriptions}</div>
              <p className="text-xs text-muted-foreground">
                Usuários com pagamento ativo
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalUsers > 0 ? Math.round((activeSubscriptions / totalUsers) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">
                Conversão de cadastro para assinatura
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Últimos Cadastros */}
        <Card>
          <CardHeader>
            <CardTitle>Últimos 5 Cadastros</CardTitle>
            <CardDescription>
              Usuários mais recentes cadastrados no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {lastFiveUsers.length > 0 ? (
              <div className="space-y-4">
                {lastFiveUsers.map((user, index) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.nome}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Cadastro: {user.cadastro}</p>
                      <p className={`text-sm px-2 py-1 rounded-full ${
                        user.status === 'Ativo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                Nenhum usuário cadastrado ainda
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;