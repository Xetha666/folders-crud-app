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

const Office = defineTable({
    columns:{
      idOffice:column.number({primaryKey:true}),
      yearOfCreation:column.date()
    }

  })





const FolderFiscal = defineTable({
    columns:{
      idFolderFiscal:column.number({primaryKey:true}),
      yearOfCreation:column.number(),
      dateOfEntry:column.date(),
      idOffice:column.number({unique:true}),
      idOrigin:column.number(),
      idFiscal:column.number()
    }
  })



export default defineDb({
  tables: {User}
});
