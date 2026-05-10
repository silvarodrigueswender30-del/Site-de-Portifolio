'use client';

import React from 'react';

const ServiceProposal = () => {
  const handleContact = () => {
    window.open('https://wa.me/5534999999999', '_blank');
  };

  return (
    <section className="section-padding bg-snow px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-[50px] leading-[1.1] text-carbon mb-4 tracking-[-0.5px]">
            O Investimento que se Paga Sozinho
          </h2>
          <p className="font-body text-[18px] text-stone leading-[1.5]">
            Não é custo. É infraestrutura de crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 - Setup Inicial */}
          <div className="bg-snow rounded-cards p-10 border border-ash/20 shadow-subtle flex flex-col group hover:shadow-subtle-2 transition-all duration-200 h-full">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-fog border border-ash/10 rounded-badges font-body text-[13px] font-medium text-stone">
                Único pagamento
              </span>
            </div>
            
            <div className="mb-8">
              <span className="font-body text-[14px] text-stone block mb-1">Investimento Inicial</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[50px] md:text-[70px] text-carbon leading-none">R$ 2.400</span>
              </div>
              <span className="font-body text-[16px] text-stone line-through mt-2 block opacity-60">
                Valor de mercado: R$ 15.000+
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Site Next.js completo',
                'Configuração GTM + GA4',
                'Setup Meta Ads + Google Ads',
                'Proposta Digital Interativa',
                '30 dias de suporte técnico'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-[16px] text-graphite leading-[1.5]">
                  <svg className="w-5 h-5 flex-shrink-0 text-[#00FF88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleContact}
              className="w-full bg-tangerine-tag text-carbon font-body text-[16px] font-medium py-5 rounded-buttons shadow-subtle-2 hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Garantir Esta Proposta
            </button>
          </div>

          {/* Card 2 - Gestão Mensal */}
          <div className="bg-deep-slate rounded-cards p-10 border border-snow/5 shadow-subtle flex flex-col group hover:shadow-subtle-2 transition-all duration-200 h-full">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-snow/5 border border-snow/10 rounded-badges font-body text-[13px] font-medium text-snow/60">
                Recorrente
              </span>
            </div>

            <div className="mb-8">
              <span className="font-body text-[14px] text-snow/60 block mb-1">Acompanhamento & Tráfego</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[40px] md:text-[50px] text-snow leading-none uppercase">A combinar</span>
              </div>
              <span className="font-body text-[16px] text-snow/40 mt-2 block italic">
                Personalizado para sua escala
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Gestão Google Ads',
                'Gestão Meta Ads',
                'Social Media (12 posts/mês)',
                'Relatório mensal de ROI',
                'Otimizações contínuas'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-[16px] text-snow/80 leading-[1.5]">
                  <svg className="w-5 h-5 flex-shrink-0 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleContact}
              className="w-full bg-snow text-carbon font-body text-[16px] font-medium py-5 rounded-buttons shadow-subtle-2 hover:bg-fog transition-all duration-200 active:scale-95"
            >
              Conversar sobre Gestão
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-body text-[14px] text-stone max-w-2xl mx-auto leading-[1.6]">
            * Um lead qualificado de automação industrial pode valer o contrato de um ano inteiro. 
            O investimento se justifica na primeira conversão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceProposal;
