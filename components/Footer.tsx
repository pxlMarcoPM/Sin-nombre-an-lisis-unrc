

import React from 'react';

const Footer: React.FC = () => {
  const authors = [
    'Marco Soriano',
    'Sthepania Rivera',
    'Eric Ocampo',
    'Nayelly Valdez',
    'Trystan López'
  ];

  return (
    <footer className="bg-slate-950/50 border-t border-slate-800 mt-16 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
        <h3 className="text-lg font-semibold text-white mb-4">Autores del Proyecto</h3>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {authors.map((author) => (
            <span key={author} className="text-slate-300">{author}</span>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} | Proyecto Escolar de Análisis Cinematográfico.
        </p>
      </div>
    </footer>
  );
};

export default Footer;