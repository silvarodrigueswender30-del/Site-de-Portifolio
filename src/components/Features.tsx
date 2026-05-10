'use client';

import React from 'react';

const Features = () => {
  const features = [
    {
      label: 'Performance Enterprise',
      title: 'Infraestrutura Digital de Alto Impacto: Onde a Performance encontra o Lucro.',
      description: 'Desenvolvemos mais que um site; entregamos um ecossistema de conversão blindado, focado em transformar a complexidade da automação em clareza para o seu cliente final.',
      mockup: (
        <div className="w-full h-full bg-[#060E1C] rounded-cards border border-white/10 shadow-subtle overflow-hidden flex flex-col">
          {/* Browser Chrome */}
          <div className="h-10 bg-[#0D1F3C] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c97b84]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#f69251]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#8b8b8b]"></div>
          </div>
          {/* Imagem de Performance */}
          <div className="relative flex-1 w-full overflow-hidden bg-white">
            <img 
              src="/image/performance.jpeg.png" 
              alt="Performance Dashboard" 
              className="w-full h-full object-cover object-left-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>
      )
    },
    {
      label: 'Dados & Inteligência',
      title: 'Foco Regional Estratégico',
      description: 'Todo o SEO e a estrutura foram otimizados para dominar as buscas em Uberlândia e no Triângulo Mineiro, consolidando sua autoridade onde o atendimento presencial é o seu maior trunfo.',
      mockup: (
        <div className="w-full h-full bg-[#060E1C] rounded-cards border border-white/10 shadow-subtle overflow-hidden flex flex-col">
          {/* Browser Chrome */}
          <div className="h-10 bg-[#0D1F3C] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c97b84]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#f69251]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#8b8b8b]"></div>
          </div>
          {/* Imagem de Dados */}
          <div className="relative flex-1 w-full overflow-hidden bg-white">
            <img 
              src="/image/dados.png" 
              alt="Analytics Dashboard" 
              className="w-full h-full object-cover object-left-top opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section-padding px-6" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}>
      <div className="max-w-[1200px] mx-auto space-y-24">
        {features.map((f, i) => (
          <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-badges w-fit">
                <span className="font-body text-[12px] font-medium text-blue-300/70 uppercase tracking-widest">{f.label}</span>
              </div>
              <h2 className="font-display text-4xl md:text-[50px] leading-[1.1] text-white tracking-[-0.5px]">
                {f.title}
              </h2>
              <p className="font-body text-[18px] leading-[1.6] text-blue-200/60 max-w-[500px]">
                {f.description}
              </p>
              <button
                onClick={() => window.open('https://wa.me/5534999999999', '_blank')}
                className="flex items-center gap-2 font-body text-[14px] font-medium text-white/80 group transition-colors duration-200 hover:text-white active:scale-95"
              >
                Explorar funcionalidade
                <svg className="group-hover:translate-x-1 transition-transform duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mockup Side */}
            <div className="flex-1 w-full aspect-[4/3] transition-all duration-200 hover:-translate-y-1 hover:shadow-subtle-2">
              {f.mockup}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
