
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  // These would typically come from an API/database in a real application
  const contactInfo = {
    phone: '+351 123 456 789',
    email: 'info@parabolamagica.pt',
    address: 'Rua dos Electricistas, 123, 1000-001 Lisboa',
    workingHours: 'Segunda a Sexta: 9:00 - 18:00',
    workingDays: 'Fins de semana: Fechado',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-parabola-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Contactos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Estamos disponíveis para responder a todas as suas questões. Entre em contacto connosco.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-8 text-parabola-900">Formulário de Contacto</h2>
                <ContactForm />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-8 text-parabola-900">Informações de Contacto</h2>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-parabola-700">Endereço</h3>
                    <p className="text-gray-700">{contactInfo.address}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-parabola-700">Telefone</h3>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-parabola-700">Email</h3>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-parabola-700">Horário de Funcionamento</h3>
                    <p className="text-gray-700">{contactInfo.workingHours}</p>
                    <p className="text-gray-700">{contactInfo.workingDays}</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Mapa Google aqui</p>
                  {/* In a real application, you would embed a Google Map here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
