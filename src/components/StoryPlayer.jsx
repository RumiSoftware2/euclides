import { useState, useEffect } from "react";
import DiagramEuclid from "./DiagramEuclid";

export default function StoryPlayer({ slides, auto=false, delay=3500 }) {
  const [i, setI] = useState(0);
  const s = slides[i];

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setI(p => (p+1) % slides.length), delay);
    return () => clearTimeout(t);
  }, [i, auto, delay, slides.length]);

  const go = d => setI(p => Math.max(0, Math.min(slides.length-1, p+d)));

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <DiagramEuclid {...s.diagram} />
      <div className="bg-white rounded-[var(--radius-card)] shadow p-5">
        <h2 className="text-xl font-semibold">{s.title}</h2>
        <div className="mt-3 space-y-2">
          {s.dialog.map(([who, text], k) => (
            <p key={k}>
              <span className="font-semibold text-slate-900">{who}:</span>{" "}
              <span className="text-slate-700">{text}</span>
            </p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2">
          <button onClick={() => go(-1)} className="px-3 py-1.5 rounded-xl bg-slate-800 text-white">← Anterior</button>
          <button onClick={() => go(+1)} className="px-3 py-1.5 rounded-xl bg-sky-600 text-white">Siguiente →</button>
          <button onClick={() => setI(0)} className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white ml-auto">Reiniciar</button>
        </div>
        <div className="mt-3 text-sm text-slate-500">Lámina {i+1} de {slides.length}</div>
      </div>
    </div>
  );
}
