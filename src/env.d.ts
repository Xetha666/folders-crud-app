/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly JWT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  type role = "user" | "admin" | "moderator";
  
  interface UserSession {
    username: string;
    name: string;
    role: role;
  }
  
  interface Locals {
    user?: UserSession;
  }
}