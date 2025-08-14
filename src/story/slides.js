export const slides = [
  {
    id: 1,
    title: "¿Qué queremos probar?",
    dialog: [
      ["Eu", "Mira Ari: cuando una recta AB se levanta sobre la recta DG, los ángulos adyacentes son dos rectos o suman 180°."],
      ["Ari", "¿Siempre 180°? Muéstrame."]
    ],
    diagram: { theta: 60, showPerp:false, highlight:"none" }
  },
  {
    id: 2,
    title: "La escena",
    dialog: [
      ["Eu", "Toma la recta DG y el punto B en ella. Desde B, elevamos la semirrecta BA."],
      ["Ari", "Entonces aparecen dos ángulos adyacentes: α a la derecha y β a la izquierda."]
    ],
    diagram: { theta: 60, showPerp:false, highlight:"angles" }
  },
  {
    id: 3,
    title: "Caso particular: dos rectos",
    dialog: [
      ["Eu", "Si AB es perpendicular a DG, entonces α = β = 90°."],
      ["Ari", "¡Dos rectos! Eso concuerda con el enunciado."]
    ],
    diagram: { theta: 90, showPerp:false, highlight:"right" }
  },
  {
    id: 4,
    title: "Construcción auxiliar",
    dialog: [
      ["Eu", "En el caso general, traza por B una perpendicular BE a DG."],
      ["Ari", "Así ∠GBE y ∠EBD son rectos."]
    ],
    diagram: { theta: 50, showPerp:true, highlight:"perp" }
  },
  {
    id: 5,
    title: "Suma de ángulos",
    dialog: [
      ["Eu", "Compara ∠GBE con los ángulos adyacentes: si al ∠GBA y al ∠ABE les sumas el ángulo común EBD, obtienes ∠GBE y ∠EBD."],
      ["Ari", "Y como esos dos son rectos, la suma α+β equivale a dos rectos."]
    ],
    diagram: { theta: 50, showPerp:true, highlight:"sum" }
  },
  {
    id: 6,
    title: "Conclusión",
    dialog: [
      ["Ari", "Entonces siempre α + β = 180°. Si además AB ⟂ DG, cada uno vale 90°."],
      ["Eu", "Exacto. Q.E.D."]
    ],
    diagram: { theta: 120, showPerp:true, highlight:"result" }
  }
];
