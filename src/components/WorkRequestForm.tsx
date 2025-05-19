
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WorkRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    desiredDate: '',
    budget: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.description) newErrors.description = 'Descrição do trabalho é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Pedido enviado",
        description: "Obrigado pelo seu pedido. Entraremos em contacto em breve.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        desiredDate: '',
        budget: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Nome*
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          Telefone*
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+351 123 456 789"
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium">
          Descrição do Trabalho*
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descreva o trabalho que deseja realizar..."
          rows={5}
          className={errors.description ? 'border-red-500' : ''}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="desiredDate" className="block mb-2 text-sm font-medium">
            Data Desejada
          </label>
          <Input
            id="desiredDate"
            name="desiredDate"
            type="date"
            value={formData.desiredDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="budget" className="block mb-2 text-sm font-medium">
            Orçamento Máximo (€)
          </label>
          <Input
            id="budget"
            name="budget"
            type="number"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Orçamento aproximado"
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-parabola-700 hover:bg-parabola-800" disabled={isLoading}>
        {isLoading ? 'A enviar pedido...' : 'Enviar Pedido de Trabalho'}
      </Button>
      <p className="text-sm text-gray-500 mt-2">* Campos obrigatórios</p>
    </form>
  );
};

export default WorkRequestForm;
