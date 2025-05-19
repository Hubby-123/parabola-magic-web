
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-parabola-900">
              <AlertTriangle className="h-6 w-6 mr-2" />
              <span className="font-medium text-lg">Parabola Magica</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Principal
            </Link>
            <Link to="/quem-somos" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Quem somos
            </Link>
            <Link to="/trabalhos-realizados" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Trabalhos realizados
            </Link>
            <Link to="/contactos" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Contactos
            </Link>
            <Link to="/pedidos-de-trabalho" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Pedidos de trabalho
            </Link>
            <Link to="/area-reservada" className="px-3 py-2 hover:text-parabola-700 transition-colors">
              Área reservada
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Principal
            </Link>
            <Link to="/quem-somos" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Quem somos
            </Link>
            <Link to="/trabalhos-realizados" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Trabalhos realizados
            </Link>
            <Link to="/contactos" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Contactos
            </Link>
            <Link to="/pedidos-de-trabalho" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Pedidos de trabalho
            </Link>
            <Link to="/area-reservada" className="block px-3 py-2 rounded-md hover:bg-parabola-100" onClick={toggleMenu}>
              Área reservada
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
