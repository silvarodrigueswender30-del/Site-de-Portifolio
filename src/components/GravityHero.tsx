"use client";

import { Gravity, MatterBody } from "@/components/ui/gravity";

const TAGS = [
  "Next.js 15",
  "Tailwind CSS",
  "GSAP",
  "Vercel Edge",
  "SEO Técnico",
  "GTM + GA4",
  "Meta Ads",
  "Google Ads",
  "Automação",
  "ROI",
  "Telemetria",
  "Alta Performance",
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
        <h1
          className="text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-tight text-white"
          style={{ fontFamily: "var(--font-display, 'DM Sans', sans-serif)" }}
        >
          Off - Data
        </h1>
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
              key={tag}
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
                className="inline-flex items-center px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap select-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(147,197,253,0.2)",
                  color: "#93C5FD",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                {tag}
              </span>
            </MatterBody>
          );
        })}
      </Gravity>
    </section>
  );
}
