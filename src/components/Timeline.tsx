import React from 'react';

const Timeline = () => {
  const weeks = [
    { number: '01', title: 'Infraestrutura & Setup', description: 'Pixel, Tag Manager, GA4, contas de anúncio' },
    { number: '02', title: 'Tracking & Inteligência', description: 'Conversões, públicos de remarketing' },
    { number: '03', title: 'Lançamento do Site & Criativos', description: 'Site na Vercel, primeira leva de criativos' },
    { number: '04', title: 'Início do Tráfego', description: 'Campanhas no ar, fase de aprendizado de máquina' },
    { number: '05', title: 'Otimização & Social Media', description: 'Posts constantes, ajuste de lances Google' },
    { number: '06', title: 'Análise de Dados', description: 'Reunião de relatório, ajuste de persona' },
    { number: '07', title: 'Proposta Digital', description: 'Interface interativa de orçamentos (Web-App)' },
    { number: '08', title: 'Ecossistema Completo', description: 'Integração vendas + site, motor de ROI' },
  ];

  return (
    <section className="section-padding bg-fog px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-[50px] leading-[1.1] text-carbon mb-4 tracking-[-0.5px]">
            Do Zero ao Ecossistema Completo teste
          </h2>
          <p className="font-body text-[18px] text-stone leading-[1.5]">
            60 dias para dominar o mercado digital de automação industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-snow rounded-cards p-8 shadow-subtle border border-ash/10 hover:shadow-subtle-2 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
            >
              <div className="inline-block px-3 py-1 bg-[#f69251] rounded-badges mb-6 w-fit">
                <span className="font-body text-[13px] font-bold text-black uppercase tracking-wider">Semana {week.number}</span>
              </div>
              <h3 className="font-display text-[24px] text-carbon mb-4 leading-[1.33]">
                {week.title}
              </h3>
              <p className="font-body text-[16px] text-stone leading-[1.6]">
                {week.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
