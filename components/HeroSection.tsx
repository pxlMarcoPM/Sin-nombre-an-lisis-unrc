
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 neon-shadow-blue">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
          Pregunta Central
        </h2>
        <p className="text-lg md:text-xl text-sky-300 leading-relaxed">
          ¿Cómo se relaciona el contenido de la película <span className="italic font-semibold">Sin Nombre</span> con el tema de la otredad o identidad migrante?
        </p>
      </div>
    </div>
  );
};

export default HeroSection;