
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample projects - in a real app, these would come from an API/database
  const featuredProjects = [
    {
      id: 1,
      title: 'Instalação Quadro Elétrico',
      description: 'Instalação completa de quadro elétrico para edifício residencial.',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Manutenção Industrial',
      description: 'Serviço de manutenção preventiva em instalações elétricas industriais.',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'Projeto de Iluminação',
      description: 'Projeto e instalação de sistema de iluminação para escritório corporativo.',
      imageUrl: ''
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <section className="py-16 bg-parabola-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-parabola-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-parabola-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Instalações Elétricas</h3>
                <p className="text-gray-600">Serviços completos de instalações elétricas para residências, comércios e indústrias.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-parabola-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-parabola-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quadros Elétricos</h3>
                <p className="text-gray-600">Montagem e instalação de quadros elétricos personalizados para todas as necessidades.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-parabola-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-parabola-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Manutenção</h3>
                <p className="text-gray-600">Serviços de manutenção preventiva e corretiva para todos os tipos de instalações elétricas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Trabalhos Realizados</h2>
              <Link to="/trabalhos-realizados">
                <Button variant="outline" className="mt-4 md:mt-0 border-parabola-700 text-parabola-700 hover:bg-parabola-700 hover:text-white">
                  Ver Todos
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  title={project.title} 
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link="/trabalhos-realizados"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-parabola-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Precisa de um orçamento?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacte-nos hoje para obter um orçamento gratuito para o seu projeto elétrico.
            </p>
            <Link to="/pedidos-de-trabalho">
              <Button className="bg-white text-parabola-900 hover:bg-parabola-100 text-lg px-8 py-6">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
