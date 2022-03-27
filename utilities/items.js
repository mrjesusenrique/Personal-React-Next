import { uid } from "./functions/uid";

const items = [
  {
    key: uid(123, 2545),
    to: "top",
    smooth: true,
    duration: 0,
    title: "Inicio",
  },
  {
    key: uid(3453, 4123),
    to: "sobreMiAcademico",
    smooth: true,
    duration: 2200,
    title: "Académico",
  },
  {
    key: uid(534254, 623),
    to: "sobreMiLaboral",
    smooth: true,
    duration: 3000,
    title: "Carrera Profesional",
  },
  {
    key: uid(457, 86767),
    to: "skills",
    smooth: true,
    duration: 3500,
    title: "Skills",
  },
  {
    key: uid(34539, 5675),
    to: "stack",
    smooth: true,
    duration: 4000,
    title: "Stack",
  },
];

export default items;