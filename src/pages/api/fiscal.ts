import type { APIRoute } from "astro";
import { db, eq, Fiscal } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nameFiscal, genreFiscal } = await request.json();
    
    if (!nameFiscal || !genreFiscal) {
      return new Response(
        JSON.stringify({
          error: "Ambos campos son requeridos."
        }),
        { status: 400 }
      );
    }

    if (genreFiscal !== "Masculino" && genreFiscal !== "Femenino") {
      return new Response(
        JSON.stringify({
          error: "El género debe ser 'Masculino' o 'Femenino'."
        }),
        { status: 400 }
      );
    }

    await db.insert(Fiscal).values({
      nameFiscal,
      genreFiscal
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Fiscal agregado exitosamente"
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating fiscal:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { idFiscal } = await request.json();
    
    if (!idFiscal) {
      return new Response(
        JSON.stringify({
          error: "El campo 'idFiscal' es requerido."
        }),
        { status: 400 }
      );
    }

    const fiscal = await db.select().from(Fiscal).where(eq(Fiscal.idFiscal, idFiscal)).get();
    if (!fiscal) {
      return new Response(
        JSON.stringify({
          error: "Fiscal no encontrado"
        }),
        { status: 404 }
      );
    }

    await db.delete(Fiscal).where(eq(Fiscal.idFiscal, idFiscal));
    return new Response(
      JSON.stringify({
        success: true,
        message: "Fiscal eliminado exitosamente"
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error deleting fiscal:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};
