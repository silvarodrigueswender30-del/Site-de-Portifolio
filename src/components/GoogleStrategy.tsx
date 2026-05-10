import React from 'react';

const GoogleStrategy = () => {
  return (
    <section className="section-padding px-6" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-badges mb-6">
            <span className="font-body text-[13px] font-medium text-blue-300/70 uppercase tracking-widest">Google Ads</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-[50px] leading-[1.1] text-white mb-6 tracking-[-0.5px]">
            Intenção de Compra no Momento Certo
          </h2>
          <p className="font-body text-[18px] text-blue-200/60 max-w-[700px] leading-[1.6]">
            O Google não é mágica. É matemática. Aparecemos para quem já está procurando automação industrial agora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Search Ads',
              desc: 'Capturamos quem busca "automação industrial Uberlândia" no exato momento da intenção.'
            },
            {
              title: 'Fase de Aprendizado',
              desc: 'Semanas 1-3 são de calibração da máquina. Com ticket alto, um lead já paga o investimento.'
            },
            {
              title: 'ROI Mensurável',
              desc: 'Dashboard de conversões em tempo real. Cada clique rastreado, cada lead identificado.'
            }
          ].map((card, i) => (
            <div key={i} className="bg-white/5 rounded-cards p-8 border border-white/10 hover:bg-white/8 transition-all duration-200">
              <div className="w-10 h-10 bg-white/10 rounded-small flex items-center justify-center mb-6 text-white">
                <span className="font-body font-bold text-[18px]">{i + 1}</span>
              </div>
              <h4 className="font-display text-[22px] text-white mb-4 leading-[1.3]">{card.title}</h4>
              <p className="font-body text-[15px] leading-[1.6] text-blue-200/60">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Funil Diagram */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {[
              'Busca no Google',
              'Clique no Anúncio',
              'Site Master Data',
              'Lead Qualificado',
              'Reunião',
              'Contrato'
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-badges">
                  <span className="font-body text-[13px] font-medium text-white/80 whitespace-nowrap">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-blue-300/50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleStrategy;
