/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly JWT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface UserSession {
  username: string;
  name: string;
}

declare namespace App {
  interface Locals {
    user?: UserSession;
  }
}