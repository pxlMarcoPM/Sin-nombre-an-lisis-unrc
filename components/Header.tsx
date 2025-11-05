
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#analisis-textual', label: 'Análisis Textual' },
    { href: '#contenido-visual', label: 'Análisis Visual' },
    { href: '#analisis-guion', label: 'Análisis de Guion' },
    { href: '#conclusion', label: 'Conclusión' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg shadow-slate-900/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-lg md:text-xl font-bold text-white tracking-wider text-shadow">
              Análisis: <span className="italic">Sin Nombre</span>
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium pb-1 border-b-2 border-transparent hover:border-sky-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile menu could be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;