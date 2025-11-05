
import React from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  borderColor: string;
  textColor: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ id, title, borderColor, textColor, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className={`bg-slate-800/50 rounded-xl p-6 md:p-10 border-t-4 ${borderColor} shadow-2xl shadow-slate-950/50 backdrop-blur-sm`}>
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${textColor} text-shadow text-center`}>
          {title}
        </h2>
        <div className="prose prose-invert max-w-none text-slate-300 text-base md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;