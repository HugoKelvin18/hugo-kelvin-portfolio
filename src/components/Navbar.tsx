export default function Navbar() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-900/90 backdrop-blur text-white shadow">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <a href="#home" className="font-bold text-lg tracking-wide">
            Hugo Kelvin
          </a>
  
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-blue-300 transition">
                Início
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-300 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-300 transition">
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  