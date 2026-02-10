export interface Button {
id: string;
title: string;
label: string;
icon: string;
colorClass: string;
description: string;
}


export const ADMIN_ACTIONS: Button[] = [
  {
    id: "modal_procedencia",
    title: "Nueva Procedencia",
    label: "Agregar Procedencia",
    icon: "IconProcedencia",
    colorClass: "btn-secondary border-secondary shadow-secondary/20 hover:shadow-secondary/40",
    description: "Formulario para registrar la procedencia..."
  },
  {
    id: "modal_instructor",
    title: "Asignar Instructor",
    label: "Agregar Instructores",
    icon: "IconInstructor",
    colorClass: "btn-info border-info shadow-info/20 hover:shadow-info/40",
    description: "Seleccione el oficial a cargo del caso..."
  },
  {
    id: "modal_carpet",
    title: "Nueva Carpeta",
    label: "Agregar Carpetas",
    icon: "IconCarpet",
    colorClass: "btn-warning border-warning shadow-warning/20 hover:shadow-warning/40",
    description: "Formulario para crear una nueva carpeta..."
  }
];