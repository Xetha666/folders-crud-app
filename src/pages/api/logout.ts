import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete('auth_token', { path: '/' });

    //Redirigir usando el método nativo de Astro para APIs ,esto reemplaza al Response manual y al window.location
    return redirect('/login', 302);
}