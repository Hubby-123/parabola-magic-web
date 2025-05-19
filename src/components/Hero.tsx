
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-parabola-gradient min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-20 w-20" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Parabola Magica</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Especialistas em instalações eléctricas e quadros eléctricos com anos de experiência no mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/trabalhos-realizados"
            className="bg-white text-parabola-900 px-6 py-3 rounded-lg font-medium hover:bg-parabola-100 transition-colors"
          >
            Ver Trabalhos
          </Link>
          <Link
            to="/pedidos-de-trabalho"
            className="bg-parabola-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-parabola-800 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
