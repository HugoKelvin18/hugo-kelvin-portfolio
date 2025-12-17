import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fechar menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-900/90 backdrop-blur text-white shadow">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <a 
            href="/#home" 
            className="font-bold text-lg tracking-wide hover:text-blue-300 transition"
            onClick={handleLinkClick}
          >
            Hugo Kelvin
          </a>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="/#home" className="hover:text-blue-300 transition">
                Início
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-blue-300 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="/#skills" className="hover:text-blue-300 transition">
                Habilidades
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-blue-300 transition">
                Projetos
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl hover:text-blue-300 transition p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleLinkClick}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-blue-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header do Menu Mobile */}
          <div className="flex items-center justify-between p-6 border-b border-blue-800">
            <h2 className="font-bold text-xl">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl hover:text-blue-300 transition p-2"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col">
              <li>
                <a
                  href="/#home"
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-lg font-medium hover:bg-blue-800 transition border-l-4 border-transparent hover:border-white"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-lg font-medium hover:bg-blue-800 transition border-l-4 border-transparent hover:border-white"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-lg font-medium hover:bg-blue-800 transition border-l-4 border-transparent hover:border-white"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-lg font-medium hover:bg-blue-800 transition border-l-4 border-transparent hover:border-white"
                >
                  Projetos
                </a>
              </li>
              <li className="mt-4 px-6">
                <a
                  href="/#contact"
                  onClick={handleLinkClick}
                  className="block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition text-center"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer do Menu Mobile */}
          <div className="p-6 border-t border-blue-800">
            <p className="text-sm text-blue-200 text-center">
              Hugo Kelvin
            </p>
            <p className="text-xs text-blue-300 text-center mt-1">
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
