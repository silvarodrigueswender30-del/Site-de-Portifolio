"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Mockup Hero: Master Data ───────────────────────────────────────────── */
const MasterDataHero = () => (
  <div className="w-full h-full relative overflow-hidden bg-[#0A1628]">
    <img 
      src="/image/site-master-data.png" 
      alt="Site Master Data" 
      className="w-full h-full object-cover object-left-top"
    />
  </div>
);

/* ─── Mockup Hero: Concorrente (VBC / WebPosto) ──────────────────────────── */
const CompetitorHero = () => (
  <div className="w-full h-full relative overflow-hidden bg-white">
    <img 
      src="/image/site-concorrente.png" 
      alt="Site Concorrente" 
      className="w-full h-full object-cover object-left-top"
    />
  </div>
);

/* ─── Laptop frame ───────────────────────────────────────────────────────── */
function LaptopFrame({ children, url, dark }: { children: React.ReactNode; url: string; dark: boolean }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full" style={{ paddingBottom: "61%" }}>
        <div className="absolute inset-0 rounded-[10px] overflow-hidden"
          style={{
            border: `5px solid ${dark ? "#1a1f2e" : "#2c2c2c"}`,
            boxShadow: dark
              ? "0 0 0 1px rgba(0,212,255,0.1), inset 0 0 20px rgba(0,0,0,0.6)"
              : "0 0 0 1px rgba(0,0,0,0.25), inset 0 0 20px rgba(0,0,0,0.6)",
          }}>
          {/* chrome bar */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5"
            style={{ background: dark ? "#0d1117" : "#1c1c1c", minHeight: "22px" }}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#FF5F57" }} />
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#FFBD2E" }} />
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#27C93F" }} />
            <div className="ml-1.5 flex-1 h-3.5 rounded-full flex items-center px-2 font-mono truncate"
              style={{ background: dark ? "#161b22" : "#2a2a2a", fontSize: "6.5px", color: dark ? "#8b949e" : "#888" }}>
              {url}
            </div>
            <div className="flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded-full flex-shrink-0"
              style={{ background: "rgba(0,0,0,0.5)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: dark ? "#00FF88" : "#e53e3e" }} />
              <span style={{ fontSize: "5.5px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>ao vivo</span>
            </div>
          </div>
          {/* conteúdo */}
          <div style={{ height: "calc(100% - 22px)" }}>{children}</div>
        </div>
      </div>
      {/* base laptop */}
      <div className="relative w-[83%] flex flex-col items-center">
        <div className="w-full h-[5px] rounded-b-sm" style={{ background: "linear-gradient(180deg,#383838,#282828)" }} />
        <div className="w-[108%] h-[9px] rounded-b-[3px]"
          style={{ background: "linear-gradient(180deg,#282828,#181818)", boxShadow: "0 4px 14px rgba(0,0,0,0.45)" }} />
        <div className="absolute w-[14%] h-[3.5px] rounded-full" style={{ top: "14px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.5)" }} />
      </div>
    </div>
  );
}

/* ─── Comparison card ────────────────────────────────────────────────────── */
function ComparisonCard({
  hero, url, dark, badge, accentColor, title, items, isVisible, delay = 0,
}: {
  hero: React.ReactNode; url: string; dark: boolean; badge: string;
  accentColor: string; title: string; items: string[];
  isVisible: boolean; delay?: number;
}) {
  return (
    <div
      className="flex flex-col rounded-[24px] overflow-hidden border h-full transition-all duration-700"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
        background: dark ? "#0d1117" : "#f0f0f0",
        boxShadow: dark
          ? "0 32px 80px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05)"
          : "0 32px 80px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.05)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* laptop area */}
      <div className="w-full px-5 pt-5 pb-3" style={{ background: dark ? "#080d14" : "#ffffff" }}>
        <LaptopFrame url={url} dark={dark}>{hero}</LaptopFrame>
      </div>

      {/* texto */}
      <div className="flex flex-col flex-1 p-8 md:p-10" style={{ background: dark ? "#111827" : "#ffffff" }}>
        <span className="inline-flex items-center self-start gap-2 px-4 py-2 rounded-full text-[12px] md:text-[13px] font-semibold tracking-wide border mb-6"
          style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
          {badge}
        </span>
        <h3 className="text-[24px] md:text-[28px] leading-tight mb-6"
          style={{ fontFamily: "var(--font-display,'DM Sans',sans-serif)", fontWeight: 600, color: dark ? "#ffffff" : "#111827", letterSpacing: "-0.02em" }}>
          {title}
        </h3>
        <ul className="space-y-4 flex-1 mt-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ fontSize: "10px", fontWeight: 800, color: accentColor, background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}>
                {dark ? "✓" : "✕"}
              </span>
              <span className="text-[15px] md:text-[16px] leading-relaxed font-medium" style={{ color: dark ? "#a1a1aa" : "#4b5563" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */
const CompetitorComparison = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding px-6" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}>
      <div className="max-w-[1200px] mx-auto">

        <div className="mb-16 text-center transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)" }}>
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-blue-300/70 mb-4">Comparativo</p>
          <h2 className="text-[36px] md:text-[50px] leading-[1.05] text-white mb-4 tracking-[-0.5px]"
            style={{ fontFamily: "var(--font-display,'DM Sans',sans-serif)", fontWeight: 300 }}>
            O Mercado Está Parado no Tempo
          </h2>
          <p className="text-[16px] md:text-[18px] text-blue-200/60 leading-relaxed max-w-xl mx-auto">
            Enquanto outros entregam PDFs, a Master Data entrega experiências.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          <ComparisonCard
            hero={<CompetitorHero />}
            url="vbcautomacao.com.br"
            dark={false}
            badge="✕ Padrão do Mercado"
            accentColor="#c97b84"
            title="Concorrência Comum"
            items={[
              "Site genérico em template WordPress",
              "Orçamento em PDF estático",
              "Sem rastreamento de visitas",
              "Sem remarketing configurado",
              "Sem SEO técnico",
              "Presença social inconsistente",
            ]}
            isVisible={isVisible}
            delay={0}
          />
          <ComparisonCard
            hero={<MasterDataHero />}
            url="masterdata.vercel.app"
            dark={true}
            badge="✓ Nova Era Digital"
            accentColor="#00FF88"
            title="Master Data + Nossa Estratégia"
            items={[
              "Site Next.js com animações GSAP",
              "Proposta Digital Interativa",
              "GA4 + GTM com rastreamento completo",
              "Remarketing configurado (Meta + Google)",
              "SEO técnico de alta performance",
              "Funil de vendas automatizado",
            ]}
            isVisible={isVisible}
            delay={120}
          />
        </div>

        <div className="mt-20 text-center transition-all duration-700"
          style={{ transitionDelay: "300ms", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)" }}>
          <p className="text-[24px] md:text-[32px] text-white max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-display,'DM Sans',sans-serif)", fontWeight: 300 }}>
            &ldquo;A diferença não é o site.{" "}
            <br className="hidden md:block" />
            <span className="text-blue-200/50">É o ecossistema completo.&rdquo;</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
