"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function SiteShowcase() {
  return (
    <section className="w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}>
      {/* Gradiente de entrada — faz a seção emergir suavemente */}
      <div className="h-8 bg-gradient-to-b from-[#060E1C] to-[#0D1F3C]" />

      <ContainerScroll
        titleComponent={
          <div className="mb-2">
            {/* Label */}
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-blue-300/70 mb-4">
              Engenharia Digital de Alto Impacto
            </p>

            {/* Headline principal */}
            <h2
              className="text-[32px] md:text-[38px] text-white leading-[1.05] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display, 'DM Sans', sans-serif)",
                fontWeight: 300,
              }}
            >
              Não é apenas um site. É o Posto de Comando do Líder do Triângulo Mineiro.
              <br />
              <span className="text-[#00D264]">Scroll para ver ao vivo.</span>
            </h2>

            {/* Subtexto */}
            <p className="mt-4 text-[15px] text-blue-200/60 max-w-xl mx-auto leading-relaxed">
              Projetamos uma interface onde a tecnologia de ponta encontra a necessidade visceral do dono de posto. Enquanto o mercado entrega sites estáticos, nós construímos uma infraestrutura digital de "Engenharia de Alto Impacto" focada em três pilares inegociáveis:
            </p>

            {/* Pills de stack */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {[
                "Next.js 15",
                "Tailwind CSS",
                "GSAP Animations",
                "Vercel Edge",
                "SEO Técnico",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-[100px] text-[11px] font-medium bg-white/5 text-blue-200/80 border border-white/10"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hint de scroll */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-blue-300/50">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="animate-bounce"
              >
                <path
                  d="M7 2v10M3 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Role para revelar o site
            </div>
          </div>
        }
      >
        {/*
          ── Conteúdo dentro do card 3D ──────────────────────────────────────
          Opção A (padrão): iframe do site ao vivo — melhor experiência.
          Opção B: imagem estática — use se o iframe for bloqueado pelo X-Frame-Options.

          Para trocar para imagem estática, comente o <iframe> e descomente o <img>.
        */}

        {/* OPÇÃO A — iframe ao vivo */}
        <iframe
          src="https://final-master-data-site-o2ag.vercel.app/"
          title="Site Master Data Automações"
          className="w-full h-full rounded-xl border-0"
          style={{ minHeight: "100%" }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />

        {/*
          OPÇÃO B — screenshot estática (descomente se precisar)
          Gere o screenshot em https://screenshotone.com or similar
          e coloque a URL abaixo.

          <img
            src="/images/masterdata-screenshot.jpg"
            alt="Screenshot do site Master Data Automações"
            className="w-full h-full object-cover object-top rounded-xl"
          />
        */}
      </ContainerScroll>

      {/* CTA abaixo do card */}
      <div className="text-center pb-20 -mt-16 relative z-10">
        <a
          href="https://final-master-data-site-o2ag.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[28px] bg-[#000000] px-6 py-3 text-[13px] font-medium text-white transition-all hover:bg-[#242433] active:scale-95"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Abrir site completo
        </a>
        <p className="mt-3 text-[11px] text-blue-200/40">
          masterdata.vercel.app · disponível 24/7
        </p>
      </div>
    </section>
  );
}
