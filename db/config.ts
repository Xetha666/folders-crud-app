import { column, defineDb, defineTable, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text({ unique: true }),
    password: column.text(),
    name: column.text(),
    role: column.text(),
    createdAt: column.date({default : NOW}),
  }
})

export default defineDb({
  tables: {User}
});
