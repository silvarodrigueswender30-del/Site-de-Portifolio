import Link from 'next/link';
import { Check } from 'lucide-react';

const WA_LINK = 'https://wa.me/5534998850694';

const plans = [
  {
    type: 'Único pagamento',
    title: 'Investimento Inicial',
    price: 'R$ 3.400',
    description: 'Valor de mercado: R$ 5.700+',
    items: [
      'Site Next.js completo',
      'Configuração GTM + GA4',
      'Setup Meta Ads + Google Ads',
      'Proposta Digital Interativa',
      '15 dias de suporte técnico',
    ],
    buttonLabel: 'Garantir Esta Proposta',
    highlight: false,
  },
  {
    type: 'Recorrente',
    title: 'Acompanhamento & Tráfego',
    price: 'A combinar',
    description: 'Personalizado para sua escala',
    items: [
      'Gestão Google Ads',
      'Gestão Meta Ads',
      'Social Media (20 posts/mês)',
      'Relatório mensal de ROI',
      'Otimizações contínuas',
      '++',
    ],
    buttonLabel: 'Conversar sobre Gestão',
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section
      className="py-16 md:py-32"
      style={{ background: 'linear-gradient(180deg, #060E1C 0%, #0D1F3C 50%, #060E1C 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-center text-4xl font-normal lg:text-5xl text-white leading-tight">
            Investimento que Escala com Você
          </h1>
          <p className="text-blue-200/60 text-[16px] leading-relaxed">
            Transparência total. Sem surpresas. Cada real investido com objetivo claro de retorno.
          </p>
        </div>

        {/* Cards — 2 colunas centralizadas */}
        <div className="mt-8 md:mt-20 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative flex flex-col rounded-xl border transition-colors duration-300"
              style={{
                borderColor: plan.highlight ? 'rgba(147,197,253,0.25)' : 'rgba(255,255,255,0.08)',
                background: plan.highlight
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
                  Recomendado
                </span>
              )}

              {/* Header */}
              <div className="p-6 pb-0">
                <p className="text-[11px] font-medium tracking-widest uppercase text-blue-300/60 mb-1">
                  {plan.type}
                </p>
                <h2 className="text-lg font-medium text-white">{plan.title}</h2>
                <span className="my-3 block text-2xl font-semibold text-white">{plan.price}</span>
                <p className="text-sm text-blue-200/50">{plan.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1">
                <hr className="border-dashed border-white/10" />
                <ul className="space-y-3 text-sm">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100/70">
                      <Check className="size-3 text-blue-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0">
                <Link
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200"
                  style={{
                    background: plan.highlight
                      ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
                      : 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {plan.buttonLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
