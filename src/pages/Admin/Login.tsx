
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is just a mockup for demonstration
    // In a real application, you would verify credentials against a server
    setTimeout(() => {
      setIsLoading(false);
      
      // Temporary login logic (for demo only)
      if (formData.username === 'admin' && formData.password === 'password') {
        toast({
          title: "Login bem-sucedido",
          description: "Bem-vindo à área de administração.",
        });
        navigate('/admin/dashboard');
      } else {
        setError('Nome de utilizador ou senha inválidos.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-parabola-light py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <AlertTriangle className="h-12 w-12 text-parabola-700" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">Área Reservada</h1>
          <p className="mt-2 text-sm text-gray-600">
            Faça login para aceder ao painel de administração
          </p>
        </div>
        
        <div className="mt-8 bg-white py-8 px-4 shadow-md rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Utilizador
              </label>
              <div className="mt-1">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className={error ? 'border-red-300' : ''}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={error ? 'border-red-300' : ''}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-parabola-700 hover:bg-parabola-800"
                disabled={isLoading}
              >
                {isLoading ? 'A processar...' : 'Entrar'}
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="text-center text-sm">
              <p className="text-gray-600">
                Esqueceu a senha? Contacte o administrador do sistema.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <a href="/" className="text-sm text-parabola-700 hover:text-parabola-800">
            Voltar à página principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
