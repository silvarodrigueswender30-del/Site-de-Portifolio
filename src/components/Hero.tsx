"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Globe,
  MessageCircle,
  ArrowUpRight,
  Link as LinkIcon,
  Share2
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-white overflow-hidden flex flex-col">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100 z-10" />

      <div className="flex-1 w-full flex flex-col md:flex-row relative">
        {/* Left Column: CTA & Info (30%) */}
        <div className="w-full md:w-[30%] h-full border-r border-slate-100 flex flex-col justify-between p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mt-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] uppercase tracking-widest text-slate-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              Sistemas de Alta Performance
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xs font-light">
              Projetamos ecossistemas digitais que convertem complexidade em lucro real para o setor industrial.
            </p>

            <div className="space-y-4 pt-4">
              <div className="relative group max-w-xs">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail size={16} className="text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full bg-slate-50 border-0 border-b border-slate-200 py-4 pl-12 pr-4 text-sm focus:ring-0 focus:border-[#00D4FF] transition-all outline-none rounded-none"
                />
              </div>
              <button className="group relative flex items-center justify-between w-full max-w-xs bg-[#f69251] text-white px-6 py-4 rounded-full font-medium text-sm hover:bg-[#e07d3d] transition-all shadow-lg shadow-orange-200/50 active:scale-95">
                <span>RESERVAR DIAGNÓSTICO</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <LinkIcon size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Globe size={20} />
            </a>
          </motion.div>
        </div>

        {/* Center Column: Visual (40%) */}
        <div className="w-full md:w-[40%] h-full relative flex items-center justify-center bg-slate-50/50">
          <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center p-8">
            {/* Background Circle Decoration */}
            <div className="absolute inset-0 m-auto w-[80%] h-[80%] border border-slate-200 rounded-full" />
            <div className="absolute inset-0 m-auto w-[60%] h-[60%] border border-slate-100 rounded-full" />

            {/* Main Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                  alt="Industrial Automation"
                  className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#00D4FF]">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Global Reach</p>
                  <p className="text-sm font-bold text-slate-900">+127 Projetos</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#f69251]">
                  <ArrowUpRight size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">ROI Médio</p>
                  <p className="text-sm font-bold text-slate-900">3.4x / Ano</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Large Headline (30%) */}
        <div className="w-full md:w-[30%] h-full border-l border-slate-100 flex flex-col justify-center p-8 md:p-12 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
            <div className="grid grid-cols-10 h-full w-full">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="border-r border-slate-900 h-full" />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light leading-[0.9] text-slate-900 tracking-tighter">
              Sua <br />
              tecnologia <br />
              é de <br />
              <span className="text-[#00D4FF] font-medium relative">
                ponta.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 100 10"
                >
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="#00D4FF" strokeWidth="2" />
                </motion.svg>
              </span>
            </h1>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#00D4FF]" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">Digital Industrial Elite</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Social / Footer Strip */}
      <div className="w-full h-20 border-t border-slate-100 flex items-center justify-between px-8 md:px-12 bg-white z-10">
        <div className="flex items-center gap-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#00D4FF] flex items-center justify-center text-[10px] text-white font-bold">
              +
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
            Confiado por +40 gestores industriais
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/5511999999999"
          target="_blank"
          className="flex items-center gap-3 text-slate-900 font-medium text-xs hover:text-[#00D4FF] transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#00D4FF]/10 transition-colors">
            <MessageCircle size={14} />
          </div>
          FALAR COM ESPECIALISTA
        </motion.a>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[0.5px] border-slate-50 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-[0.5px] border-slate-50/50 rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
