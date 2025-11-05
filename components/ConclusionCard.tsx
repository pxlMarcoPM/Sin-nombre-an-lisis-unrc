
import React from 'react';

interface ConclusionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ConclusionCard: React.FC<ConclusionCardProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-slate-800/60 rounded-xl p-6 md:p-10 border-t-4 border-purple-500 shadow-2xl shadow-slate-950/50 backdrop-blur-sm ring-1 ring-purple-500/50">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 text-shadow text-center">
          {title}
        </h2>
        <div className="prose prose-invert max-w-none text-slate-300 text-base md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ConclusionCard;