import type { APIRoute } from "astro";
import { db, eq, Grade, Instructor } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nameInstructor, nameGrade } = await request.json();
    
    if (!nameInstructor || !nameGrade) {
      return new Response(
        JSON.stringify({
          error: "Ambos campos son requeridos."
        }),
        { status: 400 }
      );
    }

    const grade = await db
      .select()
      .from(Grade)
      .where(eq(Grade.nameGrade, nameGrade))
      .get();

    if (!grade) {
      return new Response(
        JSON.stringify({
          error: "El grado especificado no existe."
        }),
        { status: 404 }
      );
    }

    await db.insert(Instructor).values({
      nameInstructor,
      idGrade: grade.idGrade
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Instructor agregado exitosamente"
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating instructor:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { idInstructor } = await request.json();
    
    if (!idInstructor) {
      return new Response(
        JSON.stringify({
          error: "El campo 'idInstructor' es requerido."
        }),
        { status: 400 }
      );
    }

    const instructor = await db.select().from(Instructor)
    .where(eq(Instructor.idInstructor, idInstructor)).get();
    if (!instructor) {
      return new Response(
        JSON.stringify({
          error: "Instructor no encontrado"
        }),
        { status: 404 }
      );
    }

    await db.delete(Instructor).where(eq(Instructor.idInstructor, idInstructor));
    return new Response(
      JSON.stringify({
        success: true,
        message: "Instructor eliminado exitosamente"
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error deleting instructor:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};
