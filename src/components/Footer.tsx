import React from 'react';

const Footer = () => {
  return (
    <footer className="section-padding px-6 border-t border-white/10" style={{ background: 'linear-gradient(180deg, #060E1C 0%, #03060F 100%)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 space-y-6">

          <p className="font-body text-[14px] leading-[1.6] text-blue-200/50 max-w-xs">
            Construído com a mesma precisão que exigimos dos nossos sistemas.
            Estratégia digital completa para a Master Data Automações.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <h5 className="font-body text-[14px] font-medium text-white/80 uppercase tracking-wider">Projeto</h5>
          <ul className="space-y-2">
            {['Site Principal', 'Estratégia de Tráfego', 'Cronograma', 'Stack Técnica'].map((item) => (
              <li key={item}>
                <a href="#" className="font-body text-[14px] text-blue-200/50 hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <h5 className="font-body text-[14px] font-medium text-white/80 uppercase tracking-wider">Contato</h5>
          <ul className="space-y-2">
            {['LinkedIn', 'WhatsApp', 'E-mail', 'Agendar Reunião'].map((item) => (
              <li key={item}>
                <a href="#" className="font-body text-[14px] text-stone hover:text-carbon transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body text-[12px] text-blue-200/30">
          © 2026 Master Data Automações • Desenvolvido por Off - Data - Dev Wender RodriguesS
        </span>
        <div className="flex gap-6">
          <a href="#" className="font-body text-[12px] text-blue-200/30 hover:text-white transition-colors duration-200">Privacidade</a>
          <a href="#" className="font-body text-[12px] text-blue-200/30 hover:text-white transition-colors duration-200">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
