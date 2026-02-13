export interface Button {
  id: string;
  label: string;
  icon: string;
  colorClass: string;
}

export const ACTIONS: Button[] = [
  {
    id: "modal_procedencia",
    label: "Procedencia",
    icon: "IconProcedencia",
    colorClass: "btn-secondary border-secondary shadow-secondary/20 hover:shadow-secondary/40",
  },
  {
    id: "modal_instructor",
    label: "Instructores",
    icon: "IconInstructor",
    colorClass: "btn-info border-info shadow-info/20 hover:shadow-info/40",
  },
  {
    id: "modal_fiscal",
    label: "Fiscales",
    icon: "IconInstructor",
    colorClass: "btn-error border-error shadow-error/20 hover:shadow-error/40",
  }
];