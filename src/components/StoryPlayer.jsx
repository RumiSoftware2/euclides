import { useState, useEffect } from "react";
import DiagramEuclid from "./DiagramEuclid";

export default function StoryPlayer({ slides, auto=false, delay=3500 }) {
  const [i, setI] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const s = slides[i];

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setI(p => (p+1) % slides.length), delay);
    return () => clearTimeout(t);
  }, [i, auto, delay, slides.length]);

  const go = async (d) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setI(p => Math.max(0, Math.min(slides.length-1, p+d)));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getGreekIcon = (who) => {
    return who === "Sebastian" ? "⚡" : "🏛️";
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className={`transition-all duration-300 ${isAnimating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}>
        <DiagramEuclid {...s.diagram} />
      </div>
      <div className={`bg-white rounded-[var(--radius-card)] shadow-lg p-6 transition-all duration-300 ${isAnimating ? 'translate-x-2' : 'translate-x-0'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">🏺</div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{s.title}</h2>
        </div>
        <div className="mt-4 space-y-3">
          {s.dialog.map(([who, text], k) => (
            <div key={k} className={`p-3 rounded-lg transition-all duration-200 hover:bg-slate-50 ${who === "Sebastian" ? 'border-l-4 border-blue-500' : 'border-l-4 border-emerald-500'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{getGreekIcon(who)}</span>
                <span className={`font-semibold ${who === "Sebastian" ? 'text-blue-700' : 'text-emerald-700'}`}>{who}:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button 
            onClick={() => go(-1)} 
            disabled={i === 0}
            className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 ${
              i === 0 
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                : 'bg-slate-800 text-white hover:bg-slate-700 hover:scale-105 active:scale-95'
            }`}
          >
            <span>←</span> Anterior
          </button>
          <button 
            onClick={() => go(+1)} 
            disabled={i === slides.length - 1}
            className={`px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 ${
              i === slides.length - 1 
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                : 'bg-sky-600 text-white hover:bg-sky-500 hover:scale-105 active:scale-95'
            }`}
          >
            Siguiente <span>→</span>
          </button>
          <button 
            onClick={() => setI(0)} 
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-200 ml-auto flex items-center gap-2"
          >
            <span>🔄</span> Reiniciar
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-500">📜 Lámina {i+1} de {slides.length}</div>
          <div className="flex gap-1">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === i ? 'bg-sky-500 scale-125' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
