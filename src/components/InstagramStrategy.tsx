import React from 'react';

const InstagramStrategy = () => {
  return (
    <section className="section-padding px-6" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-snow/5 border border-snow/10 rounded-badges mb-6">
            <span className="font-body text-[13px] font-medium text-snow/60 uppercase tracking-widest">Meta Ads + Instagram</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-[50px] leading-[1.1] text-snow mb-6 tracking-[-0.5px] font-normal">
            Autoridade Antes da Necessidade
          </h2>
          <p className="font-body text-[18px] text-snow/70 max-w-[750px] leading-[1.6]">
            Enquanto o Google captura intenção, o Instagram constrói autoridade. 
            O cliente conhece a Master Data antes de precisar de automação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Conteúdo Técnico',
              desc: 'Vídeos do sistema de telemetria em funcionamento. A tecnologia que impressiona gera autoridade orgânica.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            },
            {
              title: 'Remarketing Inteligente',
              desc: 'Quem visitou o site e interagiu com o 3D recebe anúncios específicos. Presença constante na timeline do decisor.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            },
            {
              title: '12 Posts/Mês',
              desc: 'Calendário editorial com foco em ROI e casos de sucesso. Copy técnica que fala a língua do frotista e do gestor industrial.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            }
          ].map((card, i) => (
            <div key={i} className="bg-white/5 rounded-cards p-8 border border-white/10 group hover:bg-white/8 transition-all duration-200">
              <div className="w-10 h-10 bg-white/10 rounded-small flex items-center justify-center mb-6 text-blue-300 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <h4 className="font-display text-[22px] text-white mb-4 font-normal leading-[1.3]">{card.title}</h4>
              <p className="font-body text-[15px] leading-[1.6] text-blue-200/60">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramStrategy;
