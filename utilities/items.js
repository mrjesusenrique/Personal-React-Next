import { uid } from "./functions/uid";

const items = [
  {
    key: uid(123, 2545),
    to: "top",
    smooth: true,
    duration: 0,
    title: "home",
  },
  {
    key: uid(3453, 4123),
    to: "sobreMiAcademico",
    smooth: true,
    duration: 2200,
    title: "academic",
  },
  {
    key: uid(534254, 623),
    to: "sobreMiLaboral",
    smooth: true,
    duration: 3000,
    title: "labor",
  },
  {
    key: uid(67, 3268),
    to: "portfolio",
    smooth: true,
    duration: 3200,
    title: "portfolio",
  },
  {
    key: uid(457, 86767),
    to: "skills",
    smooth: true,
    duration: 3500,
    title: "skills",
  },
  {
    key: uid(34539, 5675),
    to: "stack",
    smooth: true,
    duration: 4000,
    title: "stack",
  },
];

export default items;
