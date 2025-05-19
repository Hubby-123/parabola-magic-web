
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

// Sample projects data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: 'Instalação Quadro Elétrico Residencial',
    description: 'Instalação completa de quadro elétrico para edifício residencial de 12 apartamentos.',
    category: 'Quadros Elétricos',
    imageUrl: ''
  },
  {
    id: 2,
    title: 'Manutenção Industrial',
    description: 'Serviço de manutenção preventiva em instalações elétricas para fábrica de processamento alimentar.',
    category: 'Manutenção',
    imageUrl: ''
  },
  {
    id: 3,
    title: 'Projeto de Iluminação Comercial',
    description: 'Projeto e instalação de sistema de iluminação para loja de retalho no centro comercial.',
    category: 'Iluminação',
    imageUrl: ''
  },
  {
    id: 4,
    title: 'Instalação Elétrica Residencial',
    description: 'Instalação elétrica completa para moradia de 3 pisos com sistema de domótica.',
    category: 'Instalações',
    imageUrl: ''
  },
  {
    id: 5,
    title: 'Quadro Elétrico Industrial',
    description: 'Conceção e instalação de quadro elétrico de potência para unidade fabril.',
    category: 'Quadros Elétricos',
    imageUrl: ''
  },
  {
    id: 6,
    title: 'Atualização Sistema Elétrico',
    description: 'Atualização de sistema elétrico para escritório com 25 postos de trabalho.',
    category: 'Instalações',
    imageUrl: ''
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Instalações', 'Quadros Elétricos', 'Manutenção', 'Iluminação'];
  
  const filteredProjects = filter === 'Todos'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-parabola-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Trabalhos Realizados</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore o nosso portfólio de projetos concluídos em diversas áreas de instalações elétricas.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full ${
                    filter === category 
                      ? 'bg-parabola-700 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">Nenhum trabalho encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
