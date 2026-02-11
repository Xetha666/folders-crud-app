export interface Button {
  id: string;
  label: string;
  icon: string;
  colorClass: string;
  description: string;
}

export const ACTIONS: Button[] = [
  {
    id: "modal_procedencia",
    label: "Procedencia",
    icon: "IconProcedencia",
    colorClass: "btn-secondary border-secondary shadow-secondary/20 hover:shadow-secondary/40",
    description: "Formulario para registrar la procedencia..."
  },
  {
    id: "modal_instructor",
    label: "Instructores",
    icon: "IconInstructor",
    colorClass: "btn-info border-info shadow-info/20 hover:shadow-info/40",
    description: "Seleccione el oficial a cargo del caso..."
  }
];