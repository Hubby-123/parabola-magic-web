
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes
  
  // Sample data for work requests and projects
  const [workRequests, setWorkRequests] = useState([
    { 
      id: 1, 
      name: 'João Silva', 
      email: 'joao@example.com', 
      phone: '912345678', 
      description: 'Instalação elétrica completa para nova residência', 
      date: '2023-06-15', 
      status: 'pending'
    },
    { 
      id: 2, 
      name: 'Ana Costa', 
      email: 'ana@example.com', 
      phone: '935678901', 
      description: 'Reparação de quadro elétrico', 
      date: '2023-06-18', 
      status: 'in_progress'
    },
    { 
      id: 3, 
      name: 'Miguel Santos', 
      email: 'miguel@example.com', 
      phone: '968765432', 
      description: 'Orçamento para iluminação exterior', 
      date: '2023-06-20', 
      status: 'pending'
    },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: 'Instalação Quadro Elétrico', description: 'Instalação completa de quadro elétrico' },
    { id: 2, title: 'Manutenção Industrial', description: 'Serviço de manutenção preventiva' },
    { id: 3, title: 'Projeto de Iluminação', description: 'Projeto e instalação de sistema de iluminação' },
  ]);

  // Check for authentication
  useEffect(() => {
    // In a real application, you would check if the user is authenticated
    // For this demo, we'll just simulate it
    const checkAuth = setTimeout(() => {
      // For demonstration, we'll stay logged in
      // setIsLoggedIn(false);
    }, 2000);
    
    return () => clearTimeout(checkAuth);
  }, [navigate]);

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
    navigate('/area-reservada');
  };

  const updateRequestStatus = (id: number, status: string) => {
    setWorkRequests(prev => 
      prev.map(request => 
        request.id === id ? { ...request, status } : request
      )
    );
  };

  const deleteRequest = (id: number) => {
    setWorkRequests(prev => prev.filter(request => request.id !== id));
  };

  const renderStatusBadge = (status: string) => {
    if (status === 'pending') {
      return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pendente</span>;
    } else if (status === 'in_progress') {
      return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Em Andamento</span>;
    } else {
      return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Concluído</span>;
    }
  };

  if (!isLoggedIn) {
    navigate('/area-reservada');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-parabola-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">Painel de Administração</h1>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-parabola-800" onClick={handleLogout}>
              Sair
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="work-requests">
          <TabsList className="mb-8">
            <TabsTrigger value="work-requests">Pedidos de Trabalho</TabsTrigger>
            <TabsTrigger value="projects">Trabalhos Realizados</TabsTrigger>
            <TabsTrigger value="contacts">Informações de Contacto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work-requests">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <h2 className="text-xl font-semibold p-6 border-b">Gestão de Pedidos de Trabalho</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Nome</th>
                      <th className="py-3 px-6 text-left">Contacto</th>
                      <th className="py-3 px-6 text-left">Descrição</th>
                      <th className="py-3 px-6 text-left">Data</th>
                      <th className="py-3 px-6 text-left">Estado</th>
                      <th className="py-3 px-6 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm">
                    {workRequests.map(request => (
                      <tr key={request.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6">{request.name}</td>
                        <td className="py-4 px-6">
                          {request.phone}<br/>
                          <span className="text-xs text-gray-500">{request.email}</span>
                        </td>
                        <td className="py-4 px-6">{request.description}</td>
                        <td className="py-4 px-6">{request.date}</td>
                        <td className="py-4 px-6">{renderStatusBadge(request.status)}</td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex justify-center space-x-2">
                            <button 
                              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                              onClick={() => updateRequestStatus(request.id, 'in_progress')}
                            >
                              Em Progresso
                            </button>
                            <button 
                              className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                              onClick={() => updateRequestStatus(request.id, 'completed')}
                            >
                              Concluído
                            </button>
                            <button 
                              className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                              onClick={() => deleteRequest(request.id)}
                            >
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {workRequests.length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-gray-500">Não há pedidos de trabalho pendentes.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="projects">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Gestão de Trabalhos Realizados</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Adicionar Novo Trabalho</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Título</label>
                    <Input placeholder="Título do trabalho" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">Categoria</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option>Instalações</option>
                      <option>Quadros Elétricos</option>
                      <option>Manutenção</option>
                      <option>Iluminação</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium">Descrição</label>
                    <textarea 
                      className="w-full border border-gray-300 rounded-md p-2" 
                      rows={3}
                      placeholder="Descrição do trabalho"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium">Imagem</label>
                    <input type="file" className="w-full" />
                  </div>
                </div>
                <Button className="mt-4 bg-parabola-700 hover:bg-parabola-800">
                  Adicionar Trabalho
                </Button>
              </div>
              
              <h3 className="text-lg font-medium mb-4">Trabalhos Existentes</h3>
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.map(project => (
                    <div key={project.id} className="border rounded-md p-4">
                      <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">
                        <span className="text-gray-400">Imagem</span>
                      </div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex space-x-2">
                        <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                          Editar
                        </button>
                        <button className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Não há trabalhos realizados cadastrados.</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="contacts">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Informações de Contacto</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Telefone</label>
                  <Input defaultValue="+351 123 456 789" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Email</label>
                  <Input defaultValue="info@parabolamagica.pt" />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">Endereço</label>
                  <Input defaultValue="Rua dos Electricistas, 123, 1000-001 Lisboa" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Horário de Funcionamento</label>
                  <Input defaultValue="Segunda a Sexta: 9:00 - 18:00" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Dias de Funcionamento</label>
                  <Input defaultValue="Fins de semana: Fechado" />
                </div>
              </div>
              
              <Button className="mt-6 bg-parabola-700 hover:bg-parabola-800">
                Guardar Alterações
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;

// This is a placeholder for the Input component since we're assuming it exists in ui components
function Input(props: any) {
  return <input className="w-full border border-gray-300 rounded-md p-2" {...props} />;
}
