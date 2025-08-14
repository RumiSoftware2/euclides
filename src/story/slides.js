export const slides = [
  {
    id: 1,
    title: "Enunciado de la Proposición 13",
    dialog: [
      ["Sebastian", "Edwards, según la Proposición 13 del Libro I: 'Si una recta se levanta sobre otra recta, forma ángulos adyacentes que son iguales a dos rectos'."],
      ["Edwards", "¿Cómo se demuestra esto? Necesitamos usar las definiciones y proposiciones previas."]
    ],
    diagram: { theta: 60, showPerp:false, highlight:"none" }
  },
  {
    id: 2,
    title: "Elementos teóricos necesarios",
    dialog: [
      ["Sebastian", "Para esta demostración necesitamos: Definición 10 (ángulo recto), Noción Común 2 (suma de iguales), y Proposición 11 (trazar perpendicular)."],
      ["Edwards", "Perfecto. Ahora construyamos la demostración paso a paso usando estos elementos."]
    ],
    diagram: { theta: 60, showPerp:false, highlight:"none" }
  },
  {
    id: 3,
    title: "Construcción inicial",
    dialog: [
      ["Sebastian", "Sea la recta AB que se levanta sobre la recta CD en el punto B. Por la Definición 10, un ángulo recto es aquel que es igual a su adyacente."],
      ["Edwards", "Entonces tenemos dos ángulos adyacentes: ∠ABC y ∠ABD. ¿Cómo probamos que suman dos rectos?"]
    ],
    diagram: { theta: 60, showPerp:false, highlight:"angles" }
  },
  {
    id: 4,
    title: "Caso particular: perpendicular",
    dialog: [
      ["Sebastian", "Si AB es perpendicular a CD (por Prop. 11), entonces ∠ABC = ∠ABD = 90°. Por la Noción Común 2, ∠ABC + ∠ABD = 180°."],
      ["Edwards", "¡Perfecto! En este caso especial, los ángulos adyacentes suman exactamente dos rectos."]
    ],
    diagram: { theta: 90, showPerp:false, highlight:"right" }
  },
  {
    id: 5,
    title: "Construcción auxiliar general",
    dialog: [
      ["Sebastian", "Para el caso general, tracemos por B una perpendicular BE a CD (usando Prop. 11). Así ∠CBE y ∠EBD son rectos por definición."],
      ["Edwards", "Ahora tenemos ∠CBE = ∠EBD = 90°. ¿Cómo relacionamos esto con ∠ABC y ∠ABD?"]
    ],
    diagram: { theta: 50, showPerp:true, highlight:"perp" }
  },
  {
    id: 6,
    title: "Aplicación de nociones comunes",
    dialog: [
      ["Sebastian", "Observa que ∠ABC = ∠CBE + ∠EBA y ∠ABD = ∠EBD - ∠EBA. Por la Noción Común 2: ∠ABC + ∠ABD = (∠CBE + ∠EBA) + (∠EBD - ∠EBA) = ∠CBE + ∠EBD = 90° + 90° = 180°."],
      ["Edwards", "¡Excelente! Hemos usado la Noción Común 2 para mostrar que ∠ABC + ∠ABD = dos rectos, independientemente de la posición de AB."]
    ],
    diagram: { theta: 50, showPerp:true, highlight:"sum" }
  },
  {
    id: 7,
    title: "Conclusión y Q.E.D.",
    dialog: [
      ["Edwards", "Entonces hemos probado que siempre ∠ABC + ∠ABD = 180°. Si AB es perpendicular, cada ángulo es recto; si no, siguen sumando dos rectos."],
      ["Sebastian", "Exacto. La Proposición 13 está demostrada usando las Definiciones, Nociones Comunes y la Proposición 11. Q.E.D."]
    ],
    diagram: { theta: 120, showPerp:true, highlight:"result" }
  }
];
