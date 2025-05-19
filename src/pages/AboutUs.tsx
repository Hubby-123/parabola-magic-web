
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="bg-parabola-gradient text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Quem Somos</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Conheça a história e a equipa da Parabola Magica Lda, especialistas em instalações elétricas e quadros eléctricos.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-parabola-900">A Nossa História</h2>
                <p className="mb-4 text-gray-700">
                  Fundada em 2010, a Parabola Magica nasceu da visão do seu fundador, José Moreira, de criar uma empresa especializada em instalações elétricas que oferecesse serviços de alta qualidade a preços competitivos.
                </p>
                <p className="mb-4 text-gray-700">
                  Ao longo dos anos, expandimos as nossas operações, passando a oferecer também serviços de montagem e instalação de quadros eléctricos personalizados, bem como manutenção preventiva e corretiva para todo tipo de instalações.
                </p>
                <p className="mb-4 text-gray-700">
                  Hoje, somos reconhecidos pela nossa excelência técnica e pelo compromisso com a satisfação dos nossos clientes, tendo trabalhado em projetos de diversos portes, desde residências particulares até grandes instalações industriais.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-100 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-parabola-900">Missão e Valores</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-parabola-700">Missão</h3>
                  <p className="text-gray-700">
                    Oferecer soluções elétricas de alta qualidade, seguras e eficientes, contribuindo para o conforto e segurança dos nossos clientes.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-parabola-700">Visão</h3>
                  <p className="text-gray-700">
                    Ser referência no mercado de instalações elétricas, reconhecidos pela excelência técnica e pelo atendimento personalizado.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-parabola-700">Valores</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Qualidade e segurança em todos os serviços</li>
                    <li>Comprometimento com prazos e orçamentos</li>
                    <li>Ética e transparência nos negócios</li>
                    <li>Respeito ao meio ambiente</li>
                    <li>Valorização dos colaboradores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-parabola-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-1">José Moreira</h3>
                <p className="text-parabola-700 mb-3">Fundador & CEO</p>
                <p className="text-gray-600">Com mais de 25 anos de experiência no setor elétrico, lidera a empresa desde a sua fundação.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-1">Ana Silva</h3>
                <p className="text-parabola-700 mb-3">Diretora Técnica</p>
                <p className="text-gray-600">Engenheira eletrotécnica especializada em projetos de grande porte e certificações.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-1">Carlos Santos</h3>
                <p className="text-parabola-700 mb-3">Gestor de Projetos</p>
                <p className="text-gray-600">Responsável pela coordenação das equipas e pelo planeamento dos projetos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
