import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O site entregue é de nível enterprise. Superou todas as expectativas de performance e design que tínhamos para a Master Data.",
      author: "Gestor Master Data",
      handle: "@masterdata",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"
    },
    {
      quote: "A estratégia de tráfego é sólida e o cronograma de 60 dias nos deu a confiança necessária para investir pesado no digital.",
      author: "Marketing Tech",
      handle: "@techmarketing",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
    },
    {
      quote: "As animações GSAP trouxeram uma fluidez que nunca tínhamos visto em sites do nosso setor. Realmente um diferencial competitivo.",
      author: "Engenharia de Vendas",
      handle: "@salestech",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3"
    },
    {
      quote: "A invisibilidade tecnológica que buscamos na automação foi traduzida perfeitamente na interface limpa e intuitiva do site.",
      author: "Diretoria Industrial",
      handle: "@industrylead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4"
    }
  ];

  return (
    <section className="section-padding bg-fog px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-4xl md:text-[50px] leading-[1.1] text-carbon mb-16 text-center tracking-[-0.5px]">
          O que dizem sobre o projeto
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar -mx-6 px-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[320px] md:w-[400px] bg-snow rounded-cards p-8 shadow-subtle border border-ash/10 snap-start flex flex-col h-full"
            >
              <p className="font-body text-[16px] leading-[1.6] text-midnight-ink mb-8 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-10 h-10 rounded-full bg-fog"
                />
                <div>
                  <h4 className="font-body text-[14px] font-medium text-carbon">{t.author}</h4>
                  <span className="font-body text-[12px] text-stone">{t.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
