import React from 'react';

const InstagramGallery = () => {
  return (
    <section className="section-padding bg-snow px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-display text-[32px] text-carbon mb-4 tracking-[-0.32px] leading-[1.3]">
            Nossa Presença nas Redes
          </h2>
          <p className="font-body text-[16px] text-stone max-w-xl mx-auto leading-[1.5]">
            Conteúdo que gera autoridade e atrai o decisor certo1.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-fog rounded-cards border border-dashed border-ash/30 flex flex-col items-center justify-center gap-4 group cursor-pointer transition-all duration-200 hover:shadow-subtle-2 hover:bg-ash/5"
            >
              <div className="w-12 h-12 rounded-full bg-snow flex items-center justify-center text-ash group-hover:scale-[1.05] transition-transform duration-200 shadow-sm border border-ash/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-body text-[14px] text-stone font-medium">Adicionar postagem</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-[13px] text-pebble italic leading-[1.5]">
            * Substitua os placeholders pelas imagens reais dos posts — mantenha aspect-ratio 1:1 para uniformidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
