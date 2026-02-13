export interface Button {
  id: string;
  label: string;
  icon: string;
  colorClass: string;
  firstInput: string;
  firstExample: string;
  secondInput: string;
  secondExample: string;
}

export const ACTIONS: Button[] = [
  {
    id: "modal_procedencia",
    label: "Procedencia",
    icon: "IconProcedencia",
    colorClass: "btn-secondary border-secondary shadow-secondary/20 hover:shadow-secondary/40",
    firstInput:"Ingrese el nombre corto de la procedencia",
    firstExample:"Ejemplo: 1ª FS Chanchamayo",
    secondInput:"Ingrese el nombre completo de la procedencia",
    secondExample:"Ejemplo: Primera Fiscalía Superior de Chanchamayo",
  },
  {
    id: "modal_instructor",
    label: "Instructores",
    icon: "IconInstructor",
    colorClass: "btn-info border-info shadow-info/20 hover:shadow-info/40",
    firstInput:"Ingrese el nombre del instructor",
    firstExample:"Ejemplo: SANTILLAN ROJAS Edgard Paul",
    secondInput:"Ingrese el grado del instructor",
    secondExample:"Ejemplo: TNTE, SS, SB",
  },
  {
    id: "modal_fiscal",
    label: "Fiscales",
    icon: "IconInstructor",
    colorClass: "btn-error border-error shadow-error/20 hover:shadow-error/40",
    firstInput:"Ingrese el nombre del fiscal",
    firstExample:"Ejemplo: Janeth ALMEYDA ESCOBAR",
    secondInput:"Ingrese el genero del fiscal",
    secondExample:"Ejemplo: Femenino o Masculino",
  }
];