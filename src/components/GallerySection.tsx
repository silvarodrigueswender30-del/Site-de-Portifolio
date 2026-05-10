"use client";

import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery-2";

// ─── Personalize as imagens aqui ────────────────────────────────────────────
// Substitua pelas URLs reais quando tiver os assets finais da Master Data.
// Recomendado: imagens 800x600 ou 16:9, fundo escuro para combinar com o tema.
const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: "/image/img-circular-galeria/01.jpeg",
    text: "Automação Industrial",
  },
  {
    image: "/image/img-circular-galeria/02.jpeg",
    text: "Telemetria Avançada",
  },
  {
    image: "/image/img-circular-galeria/03.jpeg",
    text: "Engenharia de Dados",
  },
  {
    image: "/image/img-circular-galeria/04.jpeg",
    text: "Controle Total",
  },
  {
    image: "/image/img-circular-galeria/05.jpeg",
    text: "Precisão em Tempo Real",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function GallerySection() {
  return (
    <section className="relative w-full py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0D1F3C 0%, #060E1C 50%, #03060F 100%)' }}>
      {/* Background SVG */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0 pointer-events-none opacity-15 flex items-end justify-center pb-10">
        <img 
          src="/image/master1.svg" 
          alt="" 
          className="w-full h-auto object-contain"
        />
      </div>
      {/* Cabeçalho da seção */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-[#7A9CC4] mb-3">
          Portfólio Visual
        </p>
        <h2
          className="text-[32px] md:text-[50px] text-[#E8F0FF] leading-tight"
          style={{ fontFamily: "var(--font-display, 'DM Sans', sans-serif)", fontWeight: 300 }}
        >
          A Nova Face da Master Data
        </h2>
        <p className="mt-3 text-[16px] text-[#7A9CC4] max-w-xl mx-auto leading-relaxed">
          Para uma empresa que lidera o setor de automação de postos, o posicionamento digital não pode ser genérico. Desenvolvemos uma interface Tech-Clean, inspirada em centros de comando e telemetria avançada. Não é apenas um site; é a materialização visual da precisão e confiança que a Master Data entrega aos seus clientes.
        </p>
      </div>

      {/* Canvas WebGL — altura fixa para o efeito de curvatura funcionar bem */}
      <div className="relative z-10 w-full" style={{ height: "500px" }}>
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={3}           // curvatura: 0 = plano, 5 = muito curvado
          borderRadius={0.05} // arredondamento das imagens (0 a 0.5)
          scrollSpeed={2}    // velocidade do scroll
          scrollEase={0.05}  // suavidade (menor = mais suave)
        />
      </div>

      {/* Hint de interação */}
      <div className="relative z-10 text-center mt-6">
        <span className="inline-flex items-center gap-2 text-xs text-[#7A9CC4]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            <path
              d="M8 1v14M1 8h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Arraste ou use o scroll para navegar
        </span>
      </div>
    </section>
  );
}
