import { db, Fiscal, Grade, Instructor, Precedence, User } from 'astro:db';
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
    },
    {
      id: crypto.randomUUID(),
      username:"test",
      password:hashedPassword,
      name: "Test User",
    }
  ]); 
  
  await db.insert(Precedence).values([
    {
      namePrecedence: "1ª FS Chanchamayo",
      realNamePrecedence: "Primera Fiscalía Superior de Chanchamayo",
    },
    {
      namePrecedence: "2ª FS Chanchamayo",
      realNamePrecedence: "Segunda Fiscalía Superior de Chanchamayo",
    },
    {
      namePrecedence: "1ª FPPC Chanchamayo",
      realNamePrecedence: "Primera Fiscalía Provincial Penal Corporativa de Chanchamayo",
    },
    {
      namePrecedence: "2ª FPPC Chanchamayo",
      realNamePrecedence: "Segunda Fiscalía Provincial Penal Corporativa de Chanchamayo",
    },
    {
      namePrecedence: "1ª FPPC Satipo",
      realNamePrecedence: "Primera Fiscalía Provincial Penal Corporativa de Satipo",
    },
    {
      namePrecedence: "2ª FPPC Satipo",
      realNamePrecedence: "Segunda Fiscalía Provincial Penal Corporativa de Satipo",
    },
    {
      namePrecedence: "FSP Tarma",
      realNamePrecedence: "Fiscalía Superior Penal de Tarma",
    },
    {
      namePrecedence: "FSCyF Tarma",
      realNamePrecedence: "Fiscalía Superior Civil y Familia de Tarma",
    },
    {
      namePrecedence: "FPPC Tarma",
      realNamePrecedence: "Fiscalía Provincial Penal Corporativa de Tarma",
    },
    {
      namePrecedence: "FPCyF Tarma",
      realNamePrecedence: "Fiscalía Provincial Civil y Familia de Tarma",
    },
    {
      namePrecedence: "FPMC Pichanaki",
      realNamePrecedence: "Fiscalía Provincial Mixta Corporativa de Pichanaki",
    },
    {
      namePrecedence: "FPEDTID Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial Especializada en Delitos de Tráfico Ilícito de Drogas de Chanchamayo",
    },
    {
      namePrecedence: "FPTEDCF-SC Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial Transitoria Especializada en Delitos de Corrupción de Funcionarios de la Selva Central de Chanchamayo",
    },
    {
      namePrecedence: "FSPEDTyLH Satipo",
      realNamePrecedence: "Fiscalía Supra Provincial Especializada en Delitos de Terrorismo y Lesa Humanidad de Satipo",
    },
    {
      namePrecedence: "FSPEDLA",
      realNamePrecedence: "Fiscalía Supra Provincial Especializada en Delitos de Lavado de Activos de Chanchamayo",
    },
    {
      namePrecedence: "FPEMA Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial Especializada en Materia Ambiental de Chanchamayo",
    },
    {
      namePrecedence: "FPEPD Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial Especializada en Prevención del Delito de Chanchamayo",
    },
    {
      namePrecedence: "FP-Civil Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial Civil de Chanchamayo",
    },
    {
      namePrecedence: "FP-Familia Chanchamayo",
      realNamePrecedence: "Fiscalía Provincial de Familia de Chanchamayo",
    },
    {
      namePrecedence: "FPSTE-DT y DDHH-JUN, SC y VRAEM",
      realNamePrecedence: "Fiscalía Penal Supraprovincial Especializada en Delitos de Terrorismo y Derechos Humanos Distrito Fiscal de Junin, Selva Central y VRAEM",
    },
    {
      namePrecedence: "FPSTE-DT - DDHH, IyDT-JUN" ,
      realNamePrecedence: "Fiscalía Penal Supraprovincial Transitoria Especializada en Derechos Humanos, Intercultural y Delitos de Terrorismo del Distrito Fiscal de Junin.",
    },
    {
      namePrecedence: "DIVPOL Chanchamayo",
      realNamePrecedence: "División Policial Chanchamayo",
    },
    {
      namePrecedence: "UTSEVI Chanchamayo",
      realNamePrecedence: "Unidad de Tránsito y Seguridad Víal de Chanchamayo", 
    },
    {
      namePrecedence: "UPIAT Chanchamayo",
      realNamePrecedence: "Unidad de Prevención e Investigación de Tránsito de Chanchamayo",
    },
    {
      namePrecedence: "USEINT Chanchamayo",
      realNamePrecedence: "Unidad de Seguridad Integral de Chanchamayo",
    },
    {
      namePrecedence: "USEG Chanchamayo",
      realNamePrecedence: "Unidad de Seguridad del Estado de Chanchamayo",
    },
    {
      namePrecedence: "DEPOTCTCDIQ-PCH Chanchamayo",
      realNamePrecedence: "Departamento de Operaciones Tácticas Contra Tráfico y Contra Delitos de Insumos Químicos del Puesto de Control Herrería de Chanchamayo",
    },
    {
      namePrecedence: "DESPRCAR La Merced Chyo",
      realNamePrecedence: "Destacamento de Protección de Carreteras PNP La Merced Chanchamayo",
    },
    {
      namePrecedence: "DESPRCAR Río Negro Chyo",
      realNamePrecedence: "Destacamento de Protección de Carreteras PNP Río Negro Chanchamayo",
    },
    {
      namePrecedence: "CPNP La Merced",
      realNamePrecedence: "Comisaría PNP de La Merced - Chanchamayo",
    },
    {
      namePrecedence: "CPNP Familia",
      realNamePrecedence: "Comisaría PNP de Familia - Chanchamayo",
    },
    {
      namePrecedence: "CPNP San Ramón",
      realNamePrecedence: "Comisaría PNP de San Ramón - Chanchamayo",
    },
    {
      namePrecedence: "CPNP Villa Perené",
      realNamePrecedence: "Comisaría PNP de Villa Perené - Chanchamayo",
    },
    {
      namePrecedence: "CPNP S.L. Shuaro",
      realNamePrecedence: "Comisaría PNP de San Luis de Shuaro - Chanchamayo",
    },
    {
      namePrecedence: "CPNP Pichanaki",
      realNamePrecedence: "Comisaría PNP de Pichanaki - Chanchamayo",
    },
    {
      namePrecedence: "CPNP Tarma",
      realNamePrecedence: "Comisaría PNP de Tarma",
    },
    {
      namePrecedence: "CPNP Palca",
      realNamePrecedence: "Comisaría PNP de Palca - Tarma",
    },
    {
      namePrecedence: "CPNP Huasahuasi",
      realNamePrecedence: "Comisaría PNP de Huasahuasi - Tarma",
    },
    {
      namePrecedence: "CPNP Satipo",
      realNamePrecedence: "Comisaría PNP de Satipo",
    },
    {
      namePrecedence: "CPNP Río Negro",
      realNamePrecedence: "Comisaría PNP de Rio Negro - Satipo",
    },
    {
      namePrecedence: "CPNP San Martín de Pangoa",
      realNamePrecedence: "Comisaría PNP de San Martín de Pangoa - Satipo",
    },
    {
      namePrecedence: "PAR-El Pedregal",
      realNamePrecedence: 'Puesto de Auxilio Rápido "El Pedregal" de San Ramón - Chanchamayo',
    },
  ]);

  await db.insert(Grade).values([
    {
      shortNameGrade: "MAY",
      nameGrade: "MAYOR",
    },
    {
      shortNameGrade: "TNTE",
      nameGrade: "TENENTE",
    },
    {
      shortNameGrade: "SS",
      nameGrade: "SubOficial Superior",
    },
    {
      shortNameGrade: "SB",
      nameGrade: "SubOficial Brigadier",
    },
    {
      shortNameGrade: "ST1",
      nameGrade: "SubOficial Tecnico de primera",
    },
    {
      shortNameGrade: "ST2",
      nameGrade: "SubOficial Tecnico de segunda",
    },
    {
      shortNameGrade: "ST3",
      nameGrade: "SubOficial Tecnico de tercera",
    },
    {
      shortNameGrade: "S1",
      nameGrade: "SubOficial de primera",
    },
    {
      shortNameGrade: "S2",
      nameGrade: "SubOficial de segunda",
    },
    {
      shortNameGrade: "S3",
      nameGrade: "SubOficial de tercera",
    }
  ]);

  await db.insert(Instructor).values([
    {
      nameInstructor: "CASTILLO VILLANUEVA John William",
      idGrade: 1,
    },
    {
      nameInstructor: "VILLALOBOS ASTETE Miguel Angel",
      idGrade: 2,
    },
    {
      nameInstructor: "VALENCIA ROJAS José Luis",
      idGrade: 2,
    },
    {
      nameInstructor: "ZAMUDIO CHAVEZ Oswaldo Martín",
      idGrade: 3,
    },
    {
      nameInstructor: "SANTILLAN ROJAS Edgard Paúl",
      idGrade: 3,
    },
    {
      nameInstructor: "ROJAS TAYPE Raúl",
      idGrade: 5,
    },
    {
      nameInstructor: "PORRAS UNTIVEROS Edwin Juan",
      idGrade: 6,
    },
    {
      nameInstructor: "RICCE CHAUPIS Evert Zenón",
      idGrade: 6,
    },
    {
      nameInstructor: "CARRILLO SIMEON Rudy Antonio",
      idGrade: 7,
    },
    {
      nameInstructor: "ALMONACID CORIS Agamenón Washburne",
      idGrade: 7,
    },
    {
      nameInstructor: "ENCINA MENDOZA Lisbeth Milagros",
      idGrade: 7,
    },
    {
      nameInstructor: "FERNANDEZ SOSA Misael Aquilio",
      idGrade: 8,
    },
    {
      nameInstructor: "ARAUJO QUISQUICHE Huber",
      idGrade: 8,
    },
    {
      nameInstructor: "ZEVALLOS MARTINEZ Sheyla Gerssi",
      idGrade: 8,
    },
    {
      nameInstructor: "LLOCCLLA GODOY Liz Isabel",
      idGrade: 8,
    },
    {
      nameInstructor: "CUYUTUPA ROMERO Walter Jesús",
      idGrade: 8,
    },
    {
      nameInstructor: "GUEVARA GUEVARA Huber",
      idGrade: 8,
    },
    {
      nameInstructor: "PIÑAS CERRÓN Yojan Brandon",
      idGrade: 8,
    },
    {
      nameInstructor: "RUPAYLLA GUILLEN Joel",
      idGrade: 8,
    },
    {
      nameInstructor: "COTARATE SALAZAR Julio César",
      idGrade: 9,
    },
    {
      nameInstructor: "VILLEGAS CORDOVA Cristian Davis",
      idGrade: 9,
    },
    {
      nameInstructor: "ACUÑA BARRETO Rocky Jimmy",
      idGrade: 9,
    },
    {
      nameInstructor: "VILCHEZ MERINO Roberto Kevin",
      idGrade: 9,
    },
    {
      nameInstructor: "HUAMAN CCASANI Gabriel Arturo",
      idGrade: 9,
    },
    {
      nameInstructor: "IZURRAGA LAZARO Luis Darío",
      idGrade: 9,
    },
    {
      nameInstructor: "LARA LEÓN Erick Anthony",
      idGrade: 9,
    },
    {
      nameInstructor: "RAMOS MALLMA Geraldo Bryan",
      idGrade: 9,
    },
    {
      nameInstructor: "PACHECO PAREDES Jhosep Kenni",
      idGrade: 9,
    },
    {
      nameInstructor: "MALLMA HUAMAN Frank Nelson",
      idGrade: 9,
    },
    {
      nameInstructor: "CHOQQUE CASAS Anderson Laureano",
      idGrade: 9,
    },
    {
      nameInstructor: "VELIZ MATOS Jhon Luis",
      idGrade: 9,
    },
    {
      nameInstructor: "AGUIRRE URETA Ivan",
      idGrade: 9,
    },
    {
      nameInstructor: "MAMANI UCHARICO Alex",
      idGrade: 10,
    },
    {
      nameInstructor: "RUESTA TARDILLO Ademihr Junior",
      idGrade: 10,
    },
    {
      nameInstructor: "HUAMAN ASTO Edison Manuel",
      idGrade: 10,
    },
    {
      nameInstructor: "HUAMAN ROCA Jhon Jhonatan",
      idGrade: 10,
    },
    {
      nameInstructor: "VELASCO ROJAS Eduardo Paul",
      idGrade: 10,
    },
    {
      nameInstructor: "PEREZ AGUIRRE Abel Samuel",
      idGrade: 10,
    },
    {
      nameInstructor: "PARIACHI MARQUEZ Frank Melvin",
      idGrade: 10,
    },
    {
      nameInstructor: "GALVAN INOCENBTE Aidan Yack",
      idGrade: 10,
    },
    {
      nameInstructor: "TUNQUI RAMOS Nilton Angelo",
      idGrade: 10,
    },
    {
      nameInstructor: "CUADROS PORRAS Kenyi Lisandro",
      idGrade: 10,
    },
    {
      nameInstructor: "FERRUA BENDEZU Jhojan",
      idGrade: 10,
    },
    {
      nameInstructor: "SIERRA QUISPE Levy Dan",
      idGrade: 10,
    },
    {
      nameInstructor: "ZARAVIA SALAZAR Jhader Josep",
      idGrade: 10,
    },
    {
      nameInstructor: "DURAN MEZA Johan Anderson",
      idGrade: 10,
    },
    {
      nameInstructor: "SOTO PALOMINO John Erick",
      idGrade: 10,
    },
    {
      nameInstructor: "BUSTILLOS CARDENAS Elkin Sebastian",
      idGrade: 10,
    },
    {
      nameInstructor: "MELENDEZ DAVIRAN Jose Ernesto",
      idGrade: 10,
    },
    {
      nameInstructor: "YUPANQUI BACA Andy Edgar",
      idGrade: 10,
    },
    {
      nameInstructor: "LOVERA BENITO Eduardo Elias",
      idGrade: 10,
    },
  ]);

  await db.insert(Fiscal).values([
    {
      nameFiscal: "Janeth ALMEYDA ESCOBAR",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: " Juana PALLACA MALLQUI",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Marina HILARES VILLEGAS",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Bethy LUCAS ESPÍRITU",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Gabriela del Pilar VICENTE FLORES",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Raquel MIRANDA ALIAGA",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Jelyna BURGOS HIDALGO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Jackie VERA MANDUJANO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "María Nathaly GOMEZ PALOMINO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Sarita Mercedes NAVARRO IZAGA",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Mirtha CAMAYO AQUINO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Melissa ACOSTA CHANCAN",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Maryori MACAZANA ROJAS",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Marialena TEMBLADERA ZEVALLOS",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Carolina NACIÓN ALBINO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Patrica A. TORIBIO RIVERA",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Marilú ASTUCURI CORDOVA",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Elicenda FARROMEQUE OBREGÓN",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Veronica ARQUIÑIGO RIOS",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Tarcila LLANCARI CARPIO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Andrea Sthefany GONZALES VIVAR",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Carmen SARMIENTO PUMARAYME",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Rebeca Lucía CRISTOBAL GOMEZ",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Ida ROMERO ANCHIRAICO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Jonathan Adruval TRUJILLO ROBLES",
        genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Víctor ROMERO CHANCO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Vicente CANDIA BRICEÑO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Willy TICSE ALVARADO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Luis Pablo MALDONADO CARDENAS",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Alan TICSE VILCHUAMAN",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Eler ROJAS MAS",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Aldana BRICEÑO",
      genreFiscal: "Femenino",
    },
    {
      nameFiscal: "Juan CADILLO ROSALES",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Percy ROJAS PAREDES",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Daniel G. CORONADO LOPEZ",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Ens Harrison RODRIGUEZ CAMPOS",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Erick CORNEJO PRESA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Elias M. MEDRANO SEDANO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Ernesto G. CARDENAS VEGA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Ramiro Lucio RIVEROS GARCIA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Henrry CORONADO SALAZAR",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Antero D. CARRANZA DE LA TORRE",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Milner B. ESPINOZA PÁRRAGA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Ernesto SIERRA RODRIGUEZ",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Jorge SÍNDICO SOSA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Helvis Piero DORIA NIETO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Rolly Ronald RIVERA MEDRANO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Diogenes M. CACERES MENDOZA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Carlos M. CASTAÑEDA CORREA",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Antero Daniel CARRANZA DE LA TORRE",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Alexander MISARI REYES",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Dany CASTILLO MUÑOZ",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Hamilton J. MONTORO SALAZAR",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Jhon Padway BARRON TINCO",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Oswaldo Víctor ORIHUELA RICCE",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "José Anibal HUAYCOCHEA CONDORI",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Rodrigo Yhoel PACO RODRIGUEZ",
      genreFiscal: "Masculino",
    },
    {
      nameFiscal: "Michael CISNEROS CHAVARRIA",
      genreFiscal: "Masculino",
    },
  ]);
}

