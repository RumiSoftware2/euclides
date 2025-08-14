import { useMemo } from "react";

export default function DiagramEuclid({ width=720, height=420, theta=60, showPerp=false, highlight="none" }) {
  const B = { x: width/2, y: height*0.7 };
  const R = 180;
  const toRad = d => (d*Math.PI)/180;
  const A = useMemo(() => ({
    x: B.x + R*Math.cos(toRad(theta)),
    y: B.y - R*Math.sin(toRad(theta)),
  }), [theta]);

  const alpha = +(theta).toFixed(1);
  const beta  = +(180 - theta).toFixed(1);

  const arc = (cx,cy,r,start,end, strokeWidth=6) => {
    const s = toRad(start), e = toRad(end);
    const x1 = cx + r*Math.cos(s), y1 = cy - r*Math.sin(s);
    const x2 = cx + r*Math.cos(e), y2 = cy - r*Math.sin(e);
    const largeArc = Math.abs(end-start) > 180 ? 1 : 0;
    const sweep = end > start ? 0 : 1;
    return <path d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`} fill="none" strokeWidth={strokeWidth} className="stroke-sky-500" />;
  };

  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[420px]">
        {/* recta DG */}
        <line x1="40" y1={B.y} x2={width-40} y2={B.y} className="stroke-slate-900" strokeWidth="5" />
        <text x="56" y={B.y+24} className="fill-slate-700 text-[14px]">D</text>
        <text x={width-56} y={B.y+24} className="fill-slate-700 text-[14px]">G</text>

        {/* punto B */}
        <circle cx={B.x} cy={B.y} r="6" className="fill-slate-900" />
        <text x={B.x+8} y={B.y-8} className="fill-slate-700 text-[14px]">B</text>

        {/* semirrecta BA */}
        <line x1={B.x} y1={B.y} x2={A.x} y2={A.y} className="stroke-sky-500" strokeWidth="7" strokeLinecap="round" />
        <text x={A.x+6} y={A.y-6} className="fill-sky-700 text-[14px]">A</text>

        {/* BE perpendicular (guía) */}
        {showPerp && (
          <>
            <line x1={B.x} y1={B.y} x2={B.x} y2={B.y-R} className="stroke-emerald-600" strokeWidth="5" strokeDasharray="8 8" />
            <text x={B.x+8} y={B.y-R-8} className="fill-emerald-700 text-[14px]">E</text>
          </>
        )}

        {/* arcos y etiquetas */}
        {arc(B.x,B.y,60,0,alpha)}
        <text x={B.x+78} y={B.y-10} className="fill-sky-700 text-[13px]">α = {alpha}°</text>

        <path d={`M ${B.x-60} ${B.y} A 92 92 0 0 1 ${B.x + 92*Math.cos(toRad(180-theta))} ${B.y - 92*Math.sin(toRad(180-theta))}`}
          fill="none" strokeWidth="6" className="stroke-rose-500" />
        <text x={B.x-170} y={B.y-10} className="fill-rose-700 text-[13px]">β = {beta}°</text>

        {/* remarcados por slide */}
        {highlight==="right" && (
          <text x={B.x-18} y={B.y-12} className="fill-emerald-700 text-[16px]">90° + 90°</text>
        )}
        {highlight==="result" && (
          <text x={B.x-32} y={B.y-120} className="fill-slate-900 text-[18px] font-bold">α + β = 180°</text>
        )}
      </svg>
      <div className="mt-2 text-sm text-slate-600">
        {theta===90 ? "Caso perpendicular: dos rectos." : "Caso general: α + β = 180°."}
      </div>
    </div>
  );
}
