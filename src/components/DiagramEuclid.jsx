import { useMemo, useEffect, useState } from "react";

export default function DiagramEuclid({ width=720, height=420, theta=60, showPerp=false, highlight="none" }) {
  const [animate, setAnimate] = useState(false);
  const [showAngles, setShowAngles] = useState(false);
  
  const B = { x: width/2, y: height*0.7 };
  const R = 180;
  const toRad = d => (d*Math.PI)/180;
  const A = useMemo(() => ({
    x: B.x + R*Math.cos(toRad(theta)),
    y: B.y - R*Math.sin(toRad(theta)),
  }), [theta]);

  const alpha = +(theta).toFixed(1);
  const beta  = +(180 - theta).toFixed(1);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [theta, showPerp, highlight]);

  useEffect(() => {
    const timer = setTimeout(() => setShowAngles(true), 300);
    return () => clearTimeout(timer);
  }, [theta]);

  const arc = (cx,cy,r,start,end, strokeWidth=6, color="stroke-sky-500") => {
    const s = toRad(start), e = toRad(end);
    const x1 = cx + r*Math.cos(s), y1 = cy - r*Math.sin(s);
    const x2 = cx + r*Math.cos(e), y2 = cy - r*Math.sin(e);
    const largeArc = Math.abs(end-start) > 180 ? 1 : 0;
    const sweep = end > start ? 0 : 1;
    return <path d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`} fill="none" strokeWidth={strokeWidth} className={`${color} transition-all duration-500`} />;
  };

  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow-lg p-6 border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-xl">📐</div>
        <h3 className="text-lg font-semibold text-slate-800">Diagrama Geométrico</h3>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[420px]">
        {/* Fondo con patrón griego sutil */}
        <defs>
          <pattern id="greekPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#f1f5f9" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width={width} height={height} fill="url(#greekPattern)" />
        
        {/* recta DG con animación */}
        <line 
          x1="40" 
          y1={B.y} 
          x2={width-40} 
          y2={B.y} 
          className={`stroke-slate-900 transition-all duration-700 ${animate ? 'stroke-width-6' : 'stroke-width-5'}`} 
          strokeWidth="5" 
        />
        <text x="56" y={B.y+24} className="fill-slate-700 text-[14px] font-medium">D</text>
        <text x={width-56} y={B.y+24} className="fill-slate-700 text-[14px] font-medium">G</text>

        {/* punto B con efecto de pulso */}
        <circle 
          cx={B.x} 
          cy={B.y} 
          r="6" 
          className={`fill-slate-900 transition-all duration-300 ${animate ? 'r-8' : 'r-6'}`} 
        />
        <text x={B.x+8} y={B.y-8} className="fill-slate-700 text-[14px] font-medium">B</text>

        {/* semirrecta BA con animación */}
        <line 
          x1={B.x} 
          y1={B.y} 
          x2={A.x} 
          y2={A.y} 
          className={`stroke-sky-500 transition-all duration-700 ${animate ? 'stroke-width-9' : 'stroke-width-7'}`} 
          strokeWidth="7" 
          strokeLinecap="round" 
        />
        <text x={A.x+6} y={A.y-6} className="fill-sky-700 text-[14px] font-medium">A</text>

        {/* BE perpendicular (guía) con animación */}
        {showPerp && (
          <>
            <line 
              x1={B.x} 
              y1={B.y} 
              x2={B.x} 
              y2={B.y-R} 
              className={`stroke-emerald-600 transition-all duration-700 ${animate ? 'stroke-width-7' : 'stroke-width-5'}`} 
              strokeWidth="5" 
              strokeDasharray="8 8" 
            />
            <text x={B.x+8} y={B.y-R-8} className="fill-emerald-700 text-[14px] font-medium">E</text>
          </>
        )}

        {/* arcos y etiquetas con animación */}
        {showAngles && (
          <>
            {arc(B.x,B.y,60,0,alpha, 6, "stroke-sky-500")}
            <text 
              x={B.x+78} 
              y={B.y-10} 
              className={`fill-sky-700 text-[13px] font-medium transition-all duration-500 ${showAngles ? 'opacity-100' : 'opacity-0'}`}
            >
              α = {alpha}°
            </text>

            <path 
              d={`M ${B.x-60} ${B.y} A 92 92 0 0 1 ${B.x + 92*Math.cos(toRad(180-theta))} ${B.y - 92*Math.sin(toRad(180-theta))}`}
              fill="none" 
              strokeWidth="6" 
              className={`stroke-rose-500 transition-all duration-500 ${showAngles ? 'opacity-100' : 'opacity-0'}`} 
            />
            <text 
              x={B.x-170} 
              y={B.y-10} 
              className={`fill-rose-700 text-[13px] font-medium transition-all duration-500 ${showAngles ? 'opacity-100' : 'opacity-0'}`}
            >
              β = {beta}°
            </text>
          </>
        )}

        {/* remarcados por slide con efectos */}
        {highlight==="right" && (
          <text 
            x={B.x-18} 
            y={B.y-12} 
            className="fill-emerald-700 text-[16px] font-bold animate-pulse"
          >
            90° + 90°
          </text>
        )}
        {highlight==="result" && (
          <text 
            x={B.x-32} 
            y={B.y-120} 
            className="fill-slate-900 text-[18px] font-bold animate-bounce"
          >
            α + β = 180°
          </text>
        )}
      </svg>
      <div className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏺</span>
          <span className="text-sm text-slate-700 font-medium">
            {theta===90 ? "Caso perpendicular: dos rectos." : "Caso general: α + β = 180°."}
          </span>
        </div>
      </div>
    </div>
  );
}
