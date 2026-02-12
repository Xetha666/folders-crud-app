import { db, User} from 'astro:db';
import bcrypt from 'bcryptjs';
import 'dotenv/config';


export default async function seed() {
  const saltRounds = 10;
  const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD;

  if (!DEFAULT_PASSWORD) {
    throw new Error("ERROR: No se encontró DEFAULT_PASSWORD en el archivo .env");
  }
  if (!ADMIN_PASSWORD) {
    throw new Error("ERROR: No se encontró ADMIN_PASSWORD en el archivo .env");
  }

  const adminHashedPassword = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);
  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, saltRounds);

  await db.insert(User).values([
    {
      id: crypto.randomUUID(), 
      username: "useradmin",
      password: adminHashedPassword,
      name:"User Admin",
      role: "admin",
      status: "active"
    },
    {
      id: crypto.randomUUID(),
      username:"test",
      password:hashedPassword,
      name: "Test User",
      role: "user",
      status: "active"
    }
  ]);
}

