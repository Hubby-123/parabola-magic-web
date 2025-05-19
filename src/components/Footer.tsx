
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-parabola-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <AlertTriangle className="h-8 w-8 mr-2" />
            <h2 className="text-xl font-bold">Parabola Magica</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link to="/" className="hover:text-parabola-200 transition-colors">
              Principal
            </Link>
            <Link to="/quem-somos" className="hover:text-parabola-200 transition-colors">
              Quem somos
            </Link>
            <Link to="/trabalhos-realizados" className="hover:text-parabola-200 transition-colors">
              Trabalhos realizados
            </Link>
            <Link to="/contactos" className="hover:text-parabola-200 transition-colors">
              Contactos
            </Link>
            <Link to="/pedidos-de-trabalho" className="hover:text-parabola-200 transition-colors">
              Pedidos de trabalho
            </Link>
            <Link to="/area-reservada" className="hover:text-parabola-200 transition-colors">
              Área reservada
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p>Contacto: info@parabolamagica.pt</p>
            <p>Telefone: +351 123 456 789</p>
          </div>
        </div>
        
        <div className="border-t border-parabola-800 mt-6 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Parabola Magica Lda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
