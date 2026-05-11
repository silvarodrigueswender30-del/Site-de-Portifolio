"use client";

import { Gravity, MatterBody } from "@/components/ui/gravity";

const TAGS = [
  { label: "Next.js 15",       bg: "#f87171", color: "#fff" },
  { label: "Tailwind CSS",     bg: "#fb923c", color: "#fff" },
  { label: "GSAP",             bg: "#facc15", color: "#1a1a1a" },
  { label: "Vercel Edge",      bg: "#4ade80", color: "#1a1a1a" },
  { label: "SEO Técnico",      bg: "#34d399", color: "#1a1a1a" },
  { label: "GTM + GA4",        bg: "#60a5fa", color: "#fff" },
  { label: "Meta Ads",         bg: "#818cf8", color: "#fff" },
  { label: "Google Ads",       bg: "#e879f9", color: "#fff" },
  { label: "Automação",        bg: "#f472b6", color: "#fff" },
  { label: "ROI",              bg: "#fb7185", color: "#fff" },
  { label: "Telemetria",       bg: "#2dd4bf", color: "#1a1a1a" },
  { label: "Alta Performance", bg: "#a78bfa", color: "#fff" },
  { label: "Funil de Vendas",    bg: "#a5b4fc", color: "#1a1a1a" },
  { label: "Off - Data",         bg: "#0f172a", color: "#38bdf8" },
  { label: "Wender",             bg: "#0f172a", color: "#f97316" },
  { label: "Contrate",           bg: "#f97316", color: "#fff" },
  { label: "Off - Data Dev",     bg: "#1e3a5f", color: "#60a5fa" },
  { label: "Contrate",           bg: "#16a34a", color: "#fff" },
];

export default function GravityHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "600px",
        background: "linear-gradient(180deg, #03060F 0%, #060E1C 40%, #0D1F3C 100%)",
      }}
    >
      {/* Texto central fixo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-6 text-center">
        <div
          className="relative pointer-events-none select-none"
          style={{ height: "clamp(3rem,10vw,7rem)" }}
        >
          <img
            src="/Off - Data.svg"
            alt="Off - Data"
            className="w-auto h-full"
          />
          <img
            src="/Off - Data (Stroke).svg"
            alt=""
            className="absolute inset-0 w-auto h-full"
            style={{ mixBlendMode: "screen", opacity: 0.85 }}
          />
        </div>
        <p className="mt-4 text-[16px] md:text-[18px] text-blue-200/60 max-w-xl leading-relaxed">
          Projetamos ecossistemas digitais que convertem complexidade em lucro real.
        </p>
      </div>

      {/* Motor de física com as tags caindo */}
      <Gravity gravity={{ x: 0, y: 0.8 }} className="w-full h-full" style={{ touchAction: 'pan-y' }}>
        {TAGS.map((tag, i) => {
          // Distribui as tags horizontalmente de forma variada
          const xPositions = [
            "8%", "20%", "35%", "50%", "65%", "78%", "90%",
            "12%", "42%", "58%", "72%", "88%",
          ];
          const yStart = 20 + (i % 3) * 60;

          return (
            <MatterBody
              key={`${tag.label}-${i}`}
              x={xPositions[i % xPositions.length]}
              y={yStart}
              angle={Math.random() * 20 - 10}
              matterBodyOptions={{
                friction: 0.3,
                restitution: 0.4,
                density: 0.002,
              }}
            >
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap select-none"
                style={{
                  background: tag.bg,
                  color: tag.color,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                {tag.label}
              </span>
            </MatterBody>
          );
        })}
      </Gravity>
    </section>
  );
}
