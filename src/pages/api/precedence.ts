import type { APIRoute } from "astro";
import { db, eq, Precedence } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { namePrecedence, realNamePrecedence } = await request.json();
    
    if (!namePrecedence || !realNamePrecedence) {
      return new Response(
        JSON.stringify({
          error: "Ambos campos son requeridos."
        }),
        { status: 400 }
      );
    }

    await db.insert(Precedence).values({
      namePrecedence,
      realNamePrecedence
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Procedencia agregada exitosamente"
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating precedence:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { idPrecedence } = await request.json();
    
    if (!idPrecedence) {
      return new Response(
        JSON.stringify({
          error: "El campo 'idPrecedence' es requerido."
        }),
        { status: 400 }
      );
    }

    const precedence = await db.select().from(Precedence)
    .where(eq(Precedence.idPrecedence, idPrecedence)).get();
    if (!precedence) {
      return new Response(
        JSON.stringify({
          error: "Procedencia no encontrada"
        }),
        { status: 404 }
      );
    }

    await db.delete(Precedence).where(eq(Precedence.idPrecedence, idPrecedence));
    return new Response(
      JSON.stringify({
        success: true,
        message: "Procedencia eliminada exitosamente"
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error deleting precedence:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};
