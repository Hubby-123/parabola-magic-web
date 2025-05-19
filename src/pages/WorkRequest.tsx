
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkRequestForm from '@/components/WorkRequestForm';

const WorkRequest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-parabola-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Pedidos de Trabalho</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Preencha o formulário abaixo para solicitar um orçamento ou agendar um serviço.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-parabola-900">Formulário de Pedido</h2>
                <WorkRequestForm />
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Precisa de ajuda adicional?</h3>
                <p className="text-gray-700 mb-6">
                  Se preferir, pode contactar-nos diretamente através do telefone ou email.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <div>
                    <p className="font-medium">Telefone:</p>
                    <p>+351 123 456 789</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>info@parabolamagica.pt</p>
                  </div>
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

export default WorkRequest;
