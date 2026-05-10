'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ColorPalette = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Usando fromTo para garantir que a animação termine em visibilidade total
      gsap.fromTo('.color-card',
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none' // Garante que só toca uma vez e fica visível
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const masterDataColors = [
    { name: 'Dark Navy', hex: '#060E1C', description: 'Utilizada em camadas e seções secundárias para criar hierarquia visual e contraste sofisticado.' },
    { name: 'Azul Royal', hex: '#0050FF', description: 'Utilizado para guiar o usuário em pontos de decisão e botões de alta conversão.' },
    { name: 'Verde Neon', hex: '#00D264', description: 'Representa a eficiência energética e o status "Online" dos seus sistemas.' },
    { name: 'Ice Blue', hex: '#E8EEF8', description: 'Aplicada em textos e tipografias para garantir uma leitura técnica e sem cansaço.' },
    { name: 'Branco Técnico', hex: '#F0F4FF', description: 'Texto principal sobre dark' },
    { name: 'Âmbar Tech', hex: '#F5A623', description: 'Cor estratégica para destacar dados críticos, métricas de performance e pontos de atenção no dashboard.' },
  ];

  return (
    <section className="section-padding px-6" style={{ background: "linear-gradient(180deg, #03060F 0%, #060E1C 50%, #0D1F3C 100%)" }} ref={sectionRef}>      <div className="max-w-[1200px] mx-auto">
      <div className="mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-snow border border-ash/10 rounded-badges mb-6">
          <span className="font-body text-[12px] font-medium text-graphite uppercase tracking-widest">Identidade Visual</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-[50px] leading-[1.2] text-white mb-4 tracking-[-0.5px]">
          Identidade Visual: A Cor da Tecnologia
        </h2>
        <p className="font-body text-[18px] text-white/60 leading-[1.5] max-w-2xl mx-auto">
          Definimos uma paleta de cores que comunica autoridade, precisão e inovação constante.
        </p>
      </div>

      {/* Grid Container com Ref para GSAP */}
      <div
        ref={cardsRef}
        className="palette-grid flex lg:grid lg:grid-cols-3 xl:grid-cols-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-4 pb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
      >
        {masterDataColors.map((color, index) => (
          <div
            key={index}
            className="color-card snap-center flex-shrink-0 min-w-[200px] lg:min-w-0 w-[200px] lg:w-full bg-snow rounded-cards p-6 shadow-subtle border border-ash/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-subtle-2 group"
          >
            <div
              className="w-full h-[120px] rounded-cards mb-6 transition-transform duration-300 group-hover:scale-[1.05] shadow-inner"
              style={{ backgroundColor: color.hex }}
            />
            <div className="space-y-4">
              <div>
                <h4 className="font-body text-[14px] font-bold text-carbon mb-2 uppercase tracking-tight">
                  {color.name}
                </h4>
                <div className="inline-block px-3 py-1 bg-fog rounded-badges border border-ash/5">
                  <span className="font-body text-[12px] text-stone font-mono">
                    {color.hex}
                  </span>
                </div>
              </div>
              <p className="font-body text-[13px] leading-snug text-stone min-h-[40px]">
                {color.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-body text-[16px] text-graphite italic leading-[1.5] opacity-60">
          &ldquo;Precisão em cada pixel, autoridade em cada tom.&rdquo;
        </p>
      </div>
    </div>
    </section>
  );
};

export default ColorPalette;
