import { column, defineDb, defineTable, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text({ unique: true }),
    password: column.text(),
    name: column.text(),
    role: column.text({ default: "moderator" }),
    status: column.text({ default: "active" }),
    createdAt: column.date({default : NOW}),
  }
})

const Precedence = defineTable({
  columns:{
    idPrecedence:column.number({primaryKey:true, autoIncrement:true}),
    namePrecedence:column.text(),
    realNamePrecedence:column.text()
  }
})

const Fiscal = defineTable({
  columns:{
    idFiscal:column.number({primaryKey:true}),
    nameFiscal:column.text(),
    genreFiscal:column.text()
  }
})

const Office = defineTable({
  columns:{
    idOffice:column.number({primaryKey:true}),
    yearOfCreation:column.date()
  }
})

const Instructor = defineTable({
  columns:{
    idInstructor:column.number({primaryKey:true, autoIncrement:true}),
    nameInstructor:column.text(),
    idGrade:column.number({references: () => Grade.columns.idGrade})
  }
})

const Grade = defineTable({
  columns:{
    idGrade:column.number({primaryKey:true, autoIncrement:true}),
    shortNameGrade:column.text(),
    nameGrade:column.text()
  }
})

const FolderFiscal = defineTable({
  columns:{
    idFolderFiscal:column.number({primaryKey:true}),
    yearOfCreation:column.number(),
    dateOfEntry:column.date(),
    idUser:column.number({references: () => Precedence.columns.idPrecedence}),
    idOffice:column.number({unique:true,references: () => Office.columns.idOffice}),
    idPrecedence:column.number({references: () => Precedence.columns.idPrecedence}),
    idFiscal:column.number({references: () => Fiscal.columns.idFiscal}),
    idInstructor:column.number({references: () => Instructor.columns.idInstructor})
  }
})

export default defineDb({
  tables: {User,Precedence,Fiscal,Office,FolderFiscal,Instructor,Grade}
});
