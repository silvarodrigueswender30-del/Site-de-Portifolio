"use client";


import { motion } from "framer-motion";

const items = [
  {
    week: "SEMANA 01",
    title: "Infraestrutura & Setup",
    desc: "Pixel, Tag Manager, GA4, contas de anúncio",
  },
  {
    week: "SEMANA 02",
    title: "Tracking & Inteligência",
    desc: "Conversões, públicos de remarketing",
  },
  {
    week: "SEMANA 03",
    title: "Lançamento do Site & Criativos",
    desc: "Site na Vercel, primeira leva de criativos",
  },
  {
    week: "SEMANA 04",
    title: "Início do Tráfego",
    desc: "Campanhas no ar, fase de aprendizado de máquina",
  },
  {
    week: "SEMANA 05",
    title: "Otimização & Social Media",
    desc: "Posts constantes, ajuste de lances Google",
  },
  {
    week: "SEMANA 06",
    title: "Análise de Dados",
    desc: "Reunião de relatório, ajuste de persona",
  },
  {
    week: "SEMANA 07",
    title: "Proposta Digital",
    desc: "Interface interativa de orçamentos (Web-App)",
  },
  {
    week: "SEMANA 08",
    title: "Ecossistema Completo",
    desc: "Integração vendas + site, motor de ROI",
  },
];

export default function TimelineGrid() {
  return (
    <div
      className="w-full text-zinc-50"
      style={{ background: "linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs tracking-widest text-blue-300/60 uppercase">[ 60 dias ]</p>
        <h1 className="mt-3 text-4xl font-normal tracking-tight sm:text-5xl text-white leading-tight">
          Do Zero ao Ecossistema Completo
        </h1>
        <p className="mt-3 text-[16px] text-blue-200/60 max-w-xl leading-relaxed">
          60 dias para dominar o mercado digital de automação industrial.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ week, title, desc }, i) => (
            <div
              key={title}
              className="group relative overflow-visible border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] rounded-xl p-0 transition-colors duration-300 hover:border-white/20"
            >
              {/* subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              </div>

              {/* faint inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 to-white/0 group-hover:from-white/[0.03] group-hover:to-white/[0.06] transition-colors" />

              {/* white corner squares on hover */}
              <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                <div className="absolute -left-2 -top-2 h-3 w-3 bg-white" />
                <div className="absolute -right-2 -top-2 h-3 w-3 bg-white" />
                <div className="absolute -left-2 -bottom-2 h-3 w-3 bg-white" />
                <div className="absolute -right-2 -bottom-2 h-3 w-3 bg-white" />
              </div>

              <div className="relative z-10 flex flex-row items-start gap-3 p-6">
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-3"
                    style={{ background: "#F97316", color: "#fff" }}>
                    {week}
                  </span>
                  <h3 className="text-lg font-medium text-white leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              <div className="relative z-10 px-6 pb-6 text-sm text-blue-200/60">
                {desc}
              </div>

              {/* focus ring accent on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
