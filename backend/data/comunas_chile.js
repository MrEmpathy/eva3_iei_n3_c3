// ===============================================
// Base de datos: test
// Colección: paises
// Script completo países del mundo para MongoDB
// ===============================================

use("IEI_N3_C3");

db.createCollection("comunas");

db.comunas.deleteMany({});
db.comunas.insertMany(

[
  {
    "codigo_comuna": "15101",
    "nombre_comuna": "Arica",
    "codigo_postal": "1000000",
    "nombre_region": "Región de Arica y Parinacota"
  },
  {
    "codigo_comuna": "15102",
    "nombre_comuna": "Camarones",
    "codigo_postal": "1050000",
    "nombre_region": "Región de Arica y Parinacota"
  },
  {
    "codigo_comuna": "15201",
    "nombre_comuna": "Putre",
    "codigo_postal": "1070000",
    "nombre_region": "Región de Arica y Parinacota"
  },
  {
    "codigo_comuna": "15202",
    "nombre_comuna": "General Lagos",
    "codigo_postal": "1090000",
    "nombre_region": "Región de Arica y Parinacota"
  },
  {
    "codigo_comuna": "01101",
    "nombre_comuna": "Iquique",
    "codigo_postal": "1100000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01107",
    "nombre_comuna": "Alto Hospicio",
    "codigo_postal": "1130000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01401",
    "nombre_comuna": "Pozo Almonte",
    "codigo_postal": "1140000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01402",
    "nombre_comuna": "Camiña",
    "codigo_postal": "1160000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01403",
    "nombre_comuna": "Colchane",
    "codigo_postal": "1170000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01404",
    "nombre_comuna": "Huara",
    "codigo_postal": "1180000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "01405",
    "nombre_comuna": "Pica",
    "codigo_postal": "1190000",
    "nombre_region": "Región de Tarapacá"
  },
  {
    "codigo_comuna": "02101",
    "nombre_comuna": "Antofagasta",
    "codigo_postal": "1240000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02102",
    "nombre_comuna": "Mejillones",
    "codigo_postal": "1310000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02103",
    "nombre_comuna": "Sierra Gorda",
    "codigo_postal": "1320000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02104",
    "nombre_comuna": "Taltal",
    "codigo_postal": "1330000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02201",
    "nombre_comuna": "Calama",
    "codigo_postal": "1390000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02202",
    "nombre_comuna": "Ollagüe",
    "codigo_postal": "1410000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02203",
    "nombre_comuna": "San Pedro de Atacama",
    "codigo_postal": "1410000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02301",
    "nombre_comuna": "Tocopilla",
    "codigo_postal": "1340000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "02302",
    "nombre_comuna": "María Elena",
    "codigo_postal": "1370000",
    "nombre_region": "Región de Antofagasta"
  },
  {
    "codigo_comuna": "03101",
    "nombre_comuna": "Copiapó",
    "codigo_postal": "1530000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03102",
    "nombre_comuna": "Caldera",
    "codigo_postal": "1570000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03103",
    "nombre_comuna": "Tierra Amarilla",
    "codigo_postal": "1580000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03201",
    "nombre_comuna": "Chañaral",
    "codigo_postal": "1470000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03202",
    "nombre_comuna": "Diego de Almagro",
    "codigo_postal": "1490000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03301",
    "nombre_comuna": "Vallenar",
    "codigo_postal": "1610000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03302",
    "nombre_comuna": "Alto del Carmen",
    "codigo_postal": "1650000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03303",
    "nombre_comuna": "Freirina",
    "codigo_postal": "1660000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "03304",
    "nombre_comuna": "Huasco",
    "codigo_postal": "1670000",
    "nombre_region": "Región de Atacama"
  },
  {
    "codigo_comuna": "04101",
    "nombre_comuna": "La Serena",
    "codigo_postal": "1700000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04102",
    "nombre_comuna": "Coquimbo",
    "codigo_postal": "1780000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04103",
    "nombre_comuna": "Andacollo",
    "codigo_postal": "1830000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04104",
    "nombre_comuna": "La Higuera",
    "codigo_postal": "1840000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04105",
    "nombre_comuna": "Paiguano",
    "codigo_postal": "1850000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04106",
    "nombre_comuna": "Vicuña",
    "codigo_postal": "1860000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04201",
    "nombre_comuna": "Illapel",
    "codigo_postal": "1930000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04202",
    "nombre_comuna": "Canela",
    "codigo_postal": "1960000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04203",
    "nombre_comuna": "Los Vilos",
    "codigo_postal": "1940000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04204",
    "nombre_comuna": "Salamanca",
    "codigo_postal": "1990000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04301",
    "nombre_comuna": "Ovalle",
    "codigo_postal": "1880000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04302",
    "nombre_comuna": "Combarbalá",
    "codigo_postal": "1910000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04303",
    "nombre_comuna": "Monte Patria",
    "codigo_postal": "1920000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04304",
    "nombre_comuna": "Punitaqui",
    "codigo_postal": "1900000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "04305",
    "nombre_comuna": "Río Hurtado",
    "codigo_postal": "1930000",
    "nombre_region": "Región de Coquimbo"
  },
  {
    "codigo_comuna": "05101",
    "nombre_comuna": "Valparaíso",
    "codigo_postal": "2340000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05102",
    "nombre_comuna": "Casablanca",
    "codigo_postal": "2480000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05103",
    "nombre_comuna": "Concón",
    "codigo_postal": "2510000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05105",
    "nombre_comuna": "Juan Fernández",
    "codigo_postal": "2390000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05107",
    "nombre_comuna": "Puchuncaví",
    "codigo_postal": "2500000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05109",
    "nombre_comuna": "Viña del Mar",
    "codigo_postal": "2520000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05110",
    "nombre_comuna": "Quintero",
    "codigo_postal": "2490000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05201",
    "nombre_comuna": "Isla de Pascua",
    "codigo_postal": "2770000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05301",
    "nombre_comuna": "Los Andes",
    "codigo_postal": "2100000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05302",
    "nombre_comuna": "Calle Larga",
    "codigo_postal": "2130000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05303",
    "nombre_comuna": "Rinconada",
    "codigo_postal": "2140000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05304",
    "nombre_comuna": "San Esteban",
    "codigo_postal": "2150000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05401",
    "nombre_comuna": "La Ligua",
    "codigo_postal": "2240000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05402",
    "nombre_comuna": "Cabildo",
    "codigo_postal": "2270000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05403",
    "nombre_comuna": "Papudo",
    "codigo_postal": "2290000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05404",
    "nombre_comuna": "Petorca",
    "codigo_postal": "2280000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05405",
    "nombre_comuna": "Zapallar",
    "codigo_postal": "2300000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05501",
    "nombre_comuna": "Quillota",
    "codigo_postal": "2260000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05502",
    "nombre_comuna": "La Calera",
    "codigo_postal": "2280000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05503",
    "nombre_comuna": "Hijuelas",
    "codigo_postal": "2290000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05504",
    "nombre_comuna": "Nogales",
    "codigo_postal": "2300000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05506",
    "nombre_comuna": "La Cruz",
    "codigo_postal": "2280000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05601",
    "nombre_comuna": "San Antonio",
    "codigo_postal": "2660000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05602",
    "nombre_comuna": "Algarrobo",
    "codigo_postal": "2680000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05603",
    "nombre_comuna": "Cartagena",
    "codigo_postal": "2690000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05604",
    "nombre_comuna": "El Quisco",
    "codigo_postal": "2710000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05605",
    "nombre_comuna": "El Tabo",
    "codigo_postal": "2720000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05606",
    "nombre_comuna": "Santo Domingo",
    "codigo_postal": "2740000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05701",
    "nombre_comuna": "San Felipe",
    "codigo_postal": "2170000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05702",
    "nombre_comuna": "Catemu",
    "codigo_postal": "2210000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05703",
    "nombre_comuna": "Llaillay",
    "codigo_postal": "2220000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05704",
    "nombre_comuna": "Panquehue",
    "codigo_postal": "2230000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05705",
    "nombre_comuna": "Putaendo",
    "codigo_postal": "2240000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05706",
    "nombre_comuna": "Santa María",
    "codigo_postal": "2250000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05801",
    "nombre_comuna": "Quilpué",
    "codigo_postal": "2420000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05802",
    "nombre_comuna": "Limache",
    "codigo_postal": "2440000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05803",
    "nombre_comuna": "Olmué",
    "codigo_postal": "2450000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "05804",
    "nombre_comuna": "Villa Alemana",
    "codigo_postal": "2450000",
    "nombre_region": "Región de Valparaíso"
  },
  {
    "codigo_comuna": "06101",
    "nombre_comuna": "Rancagua",
    "codigo_postal": "2820000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06102",
    "nombre_comuna": "Codegua",
    "codigo_postal": "2910000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06103",
    "nombre_comuna": "Coinco",
    "codigo_postal": "2920000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06104",
    "nombre_comuna": "Coltauco",
    "codigo_postal": "2930000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06105",
    "nombre_comuna": "Doñihue",
    "codigo_postal": "2940000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06106",
    "nombre_comuna": "Graneros",
    "codigo_postal": "2950000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06107",
    "nombre_comuna": "Las Cabras",
    "codigo_postal": "2960000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06108",
    "nombre_comuna": "Machalí",
    "codigo_postal": "2970000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06109",
    "nombre_comuna": "Malloa",
    "codigo_postal": "2980000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06110",
    "nombre_comuna": "Mostazal",
    "codigo_postal": "2990000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06111",
    "nombre_comuna": "Olivar",
    "codigo_postal": "3000000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06112",
    "nombre_comuna": "Peumo",
    "codigo_postal": "3010000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06113",
    "nombre_comuna": "Pichidegua",
    "codigo_postal": "3020000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06114",
    "nombre_comuna": "Quinta de Tilcoco",
    "codigo_postal": "3030000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06115",
    "nombre_comuna": "Rengo",
    "codigo_postal": "3070000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06116",
    "nombre_comuna": "Requínoa",
    "codigo_postal": "3090000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06201",
    "nombre_comuna": "Pichilemu",
    "codigo_postal": "3220000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06202",
    "nombre_comuna": "La Estrella",
    "codigo_postal": "3240000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06203",
    "nombre_comuna": "Litueche",
    "codigo_postal": "3250000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06204",
    "nombre_comuna": "Navidad",
    "codigo_postal": "3260000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06205",
    "nombre_comuna": "Paredones",
    "codigo_postal": "3270000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06206",
    "nombre_comuna": "Marchihue",
    "codigo_postal": "3280000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06301",
    "nombre_comuna": "San Fernando",
    "codigo_postal": "3110000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06302",
    "nombre_comuna": "Chépica",
    "codigo_postal": "3130000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06303",
    "nombre_comuna": "Chimbarongo",
    "codigo_postal": "3140000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06304",
    "nombre_comuna": "Lolol",
    "codigo_postal": "3150000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06305",
    "nombre_comuna": "Nancagua",
    "codigo_postal": "3160000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06306",
    "nombre_comuna": "Palmilla",
    "codigo_postal": "3170000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06307",
    "nombre_comuna": "Peralillo",
    "codigo_postal": "3180000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06308",
    "nombre_comuna": "Placilla",
    "codigo_postal": "3190000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06309",
    "nombre_comuna": "Pumanque",
    "codigo_postal": "3200000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "06310",
    "nombre_comuna": "Santa Cruz",
    "codigo_postal": "3130000",
    "nombre_region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo_comuna": "07101",
    "nombre_comuna": "Talca",
    "codigo_postal": "3460000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07102",
    "nombre_comuna": "Constitución",
    "codigo_postal": "3560000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07103",
    "nombre_comuna": "Curepto",
    "codigo_postal": "3570000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07104",
    "nombre_comuna": "Empedrado",
    "codigo_postal": "3590000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07105",
    "nombre_comuna": "Maule",
    "codigo_postal": "3610000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07106",
    "nombre_comuna": "Pelarco",
    "codigo_postal": "3620000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07107",
    "nombre_comuna": "Pencahue",
    "codigo_postal": "3630000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07108",
    "nombre_comuna": "Río Claro",
    "codigo_postal": "3640000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07109",
    "nombre_comuna": "San Clemente",
    "codigo_postal": "3650000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07110",
    "nombre_comuna": "San Rafael",
    "codigo_postal": "3680000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07201",
    "nombre_comuna": "Cauquenes",
    "codigo_postal": "3690000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07202",
    "nombre_comuna": "Chanco",
    "codigo_postal": "3710000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07203",
    "nombre_comuna": "Pelluhue",
    "codigo_postal": "3730000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07301",
    "nombre_comuna": "Curicó",
    "codigo_postal": "3340000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07302",
    "nombre_comuna": "Hualañé",
    "codigo_postal": "3380000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07303",
    "nombre_comuna": "Licantén",
    "codigo_postal": "3390000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07304",
    "nombre_comuna": "Molina",
    "codigo_postal": "3410000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07305",
    "nombre_comuna": "Rauco",
    "codigo_postal": "3420000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07306",
    "nombre_comuna": "Romeral",
    "codigo_postal": "3430000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07307",
    "nombre_comuna": "Sagrada Familia",
    "codigo_postal": "3440000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07308",
    "nombre_comuna": "Teno",
    "codigo_postal": "3450000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07309",
    "nombre_comuna": "Vichuquén",
    "codigo_postal": "3460000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07401",
    "nombre_comuna": "Linares",
    "codigo_postal": "3580000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07402",
    "nombre_comuna": "Colbún",
    "codigo_postal": "3610000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07403",
    "nombre_comuna": "Longaví",
    "codigo_postal": "3620000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07404",
    "nombre_comuna": "Parral",
    "codigo_postal": "3630000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07405",
    "nombre_comuna": "Retiro",
    "codigo_postal": "3650000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07406",
    "nombre_comuna": "San Javier",
    "codigo_postal": "3660000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07407",
    "nombre_comuna": "Villa Alegre",
    "codigo_postal": "3670000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "07408",
    "nombre_comuna": "Yerbas Buenas",
    "codigo_postal": "3680000",
    "nombre_region": "Región del Maule"
  },
  {
    "codigo_comuna": "16101",
    "nombre_comuna": "Chillán",
    "codigo_postal": "3780000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16102",
    "nombre_comuna": "Chillán Viejo",
    "codigo_postal": "3820000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16103",
    "nombre_comuna": "El Carmen",
    "codigo_postal": "3830000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16104",
    "nombre_comuna": "Pemuco",
    "codigo_postal": "3840000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16105",
    "nombre_comuna": "Pinto",
    "codigo_postal": "3850000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16106",
    "nombre_comuna": "Quillón",
    "codigo_postal": "3860000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16107",
    "nombre_comuna": "San Ignacio",
    "codigo_postal": "3870000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16108",
    "nombre_comuna": "Yungay",
    "codigo_postal": "3880000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16201",
    "nombre_comuna": "Quirihue",
    "codigo_postal": "3920000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16202",
    "nombre_comuna": "Cobquecura",
    "codigo_postal": "3930000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16203",
    "nombre_comuna": "Coelemu",
    "codigo_postal": "3940000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16204",
    "nombre_comuna": "Ninhue",
    "codigo_postal": "3950000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16205",
    "nombre_comuna": "Portezuelo",
    "codigo_postal": "3960000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16206",
    "nombre_comuna": "Ránquil",
    "codigo_postal": "3970000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16207",
    "nombre_comuna": "Trehuaco",
    "codigo_postal": "3980000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16301",
    "nombre_comuna": "San Carlos",
    "codigo_postal": "3420000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16302",
    "nombre_comuna": "Coihueco",
    "codigo_postal": "3440000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16303",
    "nombre_comuna": "San Fabián",
    "codigo_postal": "3450000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "16304",
    "nombre_comuna": "San Nicolás",
    "codigo_postal": "3460000",
    "nombre_region": "Región de Ñuble"
  },
  {
    "codigo_comuna": "08101",
    "nombre_comuna": "Concepción",
    "codigo_postal": "4030000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08102",
    "nombre_comuna": "Coronel",
    "codigo_postal": "4190000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08103",
    "nombre_comuna": "Chiguayante",
    "codigo_postal": "4100000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08104",
    "nombre_comuna": "Florida",
    "codigo_postal": "4130000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08105",
    "nombre_comuna": "Hualqui",
    "codigo_postal": "4150000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08106",
    "nombre_comuna": "Lota",
    "codigo_postal": "4210000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08107",
    "nombre_comuna": "Penco",
    "codigo_postal": "4170000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08108",
    "nombre_comuna": "San Pedro de la Paz",
    "codigo_postal": "4190000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08109",
    "nombre_comuna": "Santa Juana",
    "codigo_postal": "4230000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08110",
    "nombre_comuna": "Talcahuano",
    "codigo_postal": "4260000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08111",
    "nombre_comuna": "Tomé",
    "codigo_postal": "4280000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08112",
    "nombre_comuna": "Hualpén",
    "codigo_postal": "4600000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08201",
    "nombre_comuna": "Los Ángeles",
    "codigo_postal": "4440000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08202",
    "nombre_comuna": "Antuco",
    "codigo_postal": "4450000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08203",
    "nombre_comuna": "Cabrero",
    "codigo_postal": "4460000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08204",
    "nombre_comuna": "Laja",
    "codigo_postal": "4480000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08205",
    "nombre_comuna": "Mulchén",
    "codigo_postal": "4490000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08206",
    "nombre_comuna": "Nacimiento",
    "codigo_postal": "4500000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08207",
    "nombre_comuna": "Negrete",
    "codigo_postal": "4510000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08208",
    "nombre_comuna": "Quilaco",
    "codigo_postal": "4520000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08209",
    "nombre_comuna": "Quilleco",
    "codigo_postal": "4530000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08210",
    "nombre_comuna": "San Rosendo",
    "codigo_postal": "4540000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08211",
    "nombre_comuna": "Santa Bárbara",
    "codigo_postal": "4550000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08212",
    "nombre_comuna": "Tucapel",
    "codigo_postal": "4560000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08213",
    "nombre_comuna": "Yumbel",
    "codigo_postal": "4570000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08214",
    "nombre_comuna": "Alto Biobío",
    "codigo_postal": "4590000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08301",
    "nombre_comuna": "Lebu",
    "codigo_postal": "4320000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08302",
    "nombre_comuna": "Arauco",
    "codigo_postal": "4360000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08303",
    "nombre_comuna": "Cañete",
    "codigo_postal": "4380000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08304",
    "nombre_comuna": "Contulmo",
    "codigo_postal": "4400000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08305",
    "nombre_comuna": "Curanilahue",
    "codigo_postal": "4410000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08306",
    "nombre_comuna": "Los Álamos",
    "codigo_postal": "4420000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "08307",
    "nombre_comuna": "Tirúa",
    "codigo_postal": "4430000",
    "nombre_region": "Región del Bío-Bío"
  },
  {
    "codigo_comuna": "09101",
    "nombre_comuna": "Temuco",
    "codigo_postal": "4780000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09102",
    "nombre_comuna": "Carahue",
    "codigo_postal": "4870000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09103",
    "nombre_comuna": "Cunco",
    "codigo_postal": "4880000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09104",
    "nombre_comuna": "Curarrehue",
    "codigo_postal": "4890000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09105",
    "nombre_comuna": "Freire",
    "codigo_postal": "4910000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09106",
    "nombre_comuna": "Galvarino",
    "codigo_postal": "4920000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09107",
    "nombre_comuna": "Gorbea",
    "codigo_postal": "4930000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09108",
    "nombre_comuna": "Lautaro",
    "codigo_postal": "4940000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09109",
    "nombre_comuna": "Loncoche",
    "codigo_postal": "4950000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09110",
    "nombre_comuna": "Melipeuco",
    "codigo_postal": "4960000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09111",
    "nombre_comuna": "Nueva Imperial",
    "codigo_postal": "4970000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09112",
    "nombre_comuna": "Padre Las Casas",
    "codigo_postal": "4850000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09113",
    "nombre_comuna": "Perquenco",
    "codigo_postal": "4990000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09114",
    "nombre_comuna": "Pitrufquén",
    "codigo_postal": "5000000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09115",
    "nombre_comuna": "Pucón",
    "codigo_postal": "4920000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09116",
    "nombre_comuna": "Saavedra",
    "codigo_postal": "5020000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09117",
    "nombre_comuna": "Teodoro Schmidt",
    "codigo_postal": "5030000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09118",
    "nombre_comuna": "Toltén",
    "codigo_postal": "5040000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09119",
    "nombre_comuna": "Vilcún",
    "codigo_postal": "5050000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09120",
    "nombre_comuna": "Villarrica",
    "codigo_postal": "4930000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09201",
    "nombre_comuna": "Angol",
    "codigo_postal": "4650000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09202",
    "nombre_comuna": "Collipulli",
    "codigo_postal": "4680000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09203",
    "nombre_comuna": "Curacautín",
    "codigo_postal": "4690000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09204",
    "nombre_comuna": "Ercilla",
    "codigo_postal": "4700000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09205",
    "nombre_comuna": "Lonquimay",
    "codigo_postal": "4710000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09206",
    "nombre_comuna": "Los Sauces",
    "codigo_postal": "4720000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09207",
    "nombre_comuna": "Lumaco",
    "codigo_postal": "4730000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09208",
    "nombre_comuna": "Purén",
    "codigo_postal": "4740000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09209",
    "nombre_comuna": "Renaico",
    "codigo_postal": "4750000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09210",
    "nombre_comuna": "Traiguén",
    "codigo_postal": "4760000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "09211",
    "nombre_comuna": "Victoria",
    "codigo_postal": "4770000",
    "nombre_region": "Región de La Araucanía"
  },
  {
    "codigo_comuna": "14101",
    "nombre_comuna": "Valdivia",
    "codigo_postal": "5090000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14102",
    "nombre_comuna": "Corral",
    "codigo_postal": "5140000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14103",
    "nombre_comuna": "Lanco",
    "codigo_postal": "5150000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14104",
    "nombre_comuna": "Los Lagos",
    "codigo_postal": "5160000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14105",
    "nombre_comuna": "Máfil",
    "codigo_postal": "5170000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14106",
    "nombre_comuna": "Mariquina",
    "codigo_postal": "5180000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14107",
    "nombre_comuna": "Paillaco",
    "codigo_postal": "5190000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14108",
    "nombre_comuna": "Panguipulli",
    "codigo_postal": "5200000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14201",
    "nombre_comuna": "La Unión",
    "codigo_postal": "5220000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14202",
    "nombre_comuna": "Futrono",
    "codigo_postal": "5240000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14203",
    "nombre_comuna": "Lago Ranco",
    "codigo_postal": "5250000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "14204",
    "nombre_comuna": "Río Bueno",
    "codigo_postal": "5260000",
    "nombre_region": "Región de Los Ríos"
  },
  {
    "codigo_comuna": "10101",
    "nombre_comuna": "Puerto Montt",
    "codigo_postal": "5480000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10102",
    "nombre_comuna": "Calbuco",
    "codigo_postal": "5570000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10103",
    "nombre_comuna": "Cochamó",
    "codigo_postal": "5580000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10104",
    "nombre_comuna": "Fresia",
    "codigo_postal": "5600000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10105",
    "nombre_comuna": "Frutillar",
    "codigo_postal": "5620000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10106",
    "nombre_comuna": "Los Muermos",
    "codigo_postal": "5630000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10107",
    "nombre_comuna": "Llanquihue",
    "codigo_postal": "5640000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10108",
    "nombre_comuna": "Maullín",
    "codigo_postal": "5650000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10109",
    "nombre_comuna": "Puerto Varas",
    "codigo_postal": "5550000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10201",
    "nombre_comuna": "Castro",
    "codigo_postal": "5700000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10202",
    "nombre_comuna": "Ancud",
    "codigo_postal": "5710000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10203",
    "nombre_comuna": "Chonchi",
    "codigo_postal": "5750000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10204",
    "nombre_comuna": "Curaco de Vélez",
    "codigo_postal": "5760000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10205",
    "nombre_comuna": "Dalcahue",
    "codigo_postal": "5770000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10206",
    "nombre_comuna": "Puqueldón",
    "codigo_postal": "5780000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10207",
    "nombre_comuna": "Queilén",
    "codigo_postal": "5790000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10208",
    "nombre_comuna": "Quellón",
    "codigo_postal": "5800000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10209",
    "nombre_comuna": "Quemchi",
    "codigo_postal": "5810000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10210",
    "nombre_comuna": "Quinchao",
    "codigo_postal": "5820000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10301",
    "nombre_comuna": "Osorno",
    "codigo_postal": "5290000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10302",
    "nombre_comuna": "Puerto Octay",
    "codigo_postal": "5350000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10303",
    "nombre_comuna": "Purranque",
    "codigo_postal": "5360000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10304",
    "nombre_comuna": "Puyehue",
    "codigo_postal": "5370000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10305",
    "nombre_comuna": "Río Negro",
    "codigo_postal": "5380000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10306",
    "nombre_comuna": "San Juan de la Costa",
    "codigo_postal": "5390000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10307",
    "nombre_comuna": "San Pablo",
    "codigo_postal": "5400000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10401",
    "nombre_comuna": "Chaitén",
    "codigo_postal": "5840000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10402",
    "nombre_comuna": "Futaleufú",
    "codigo_postal": "5850000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10403",
    "nombre_comuna": "Hualaihué",
    "codigo_postal": "5860000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "10404",
    "nombre_comuna": "Palena",
    "codigo_postal": "5870000",
    "nombre_region": "Región de Los Lagos"
  },
  {
    "codigo_comuna": "11101",
    "nombre_comuna": "Coyhaique",
    "codigo_postal": "5950000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11102",
    "nombre_comuna": "Lago Verde",
    "codigo_postal": "5960000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11201",
    "nombre_comuna": "Aysén",
    "codigo_postal": "5970000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11202",
    "nombre_comuna": "Cisnes",
    "codigo_postal": "6000000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11203",
    "nombre_comuna": "Guaitecas",
    "codigo_postal": "6010000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11301",
    "nombre_comuna": "Cochrane",
    "codigo_postal": "6020000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11302",
    "nombre_comuna": "O'Higgins",
    "codigo_postal": "6030000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11303",
    "nombre_comuna": "Tortel",
    "codigo_postal": "6040000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11401",
    "nombre_comuna": "Chile Chico",
    "codigo_postal": "6050000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "11402",
    "nombre_comuna": "Río Ibáñez",
    "codigo_postal": "6060000",
    "nombre_region": "Región de Aysén del General Carlos Ibáñez del Campo"
  },
  {
    "codigo_comuna": "12101",
    "nombre_comuna": "Punta Arenas",
    "codigo_postal": "6200000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12102",
    "nombre_comuna": "Laguna Blanca",
    "codigo_postal": "6210000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12103",
    "nombre_comuna": "Río Verde",
    "codigo_postal": "6220000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12104",
    "nombre_comuna": "San Gregorio",
    "codigo_postal": "6230000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12201",
    "nombre_comuna": "Cabo de Hornos",
    "codigo_postal": "6350000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12202",
    "nombre_comuna": "Antártica",
    "codigo_postal": "6360000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12301",
    "nombre_comuna": "Porvenir",
    "codigo_postal": "6300000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12302",
    "nombre_comuna": "Primavera",
    "codigo_postal": "6330000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12303",
    "nombre_comuna": "Timaukel",
    "codigo_postal": "6340000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12401",
    "nombre_comuna": "Natales",
    "codigo_postal": "6160000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "12402",
    "nombre_comuna": "Torres del Paine",
    "codigo_postal": "6170000",
    "nombre_region": "Región de Magallanes y de la Antártica Chilena"
  },
  {
    "codigo_comuna": "13101",
    "nombre_comuna": "Santiago",
    "codigo_postal": "8320000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13102",
    "nombre_comuna": "Cerrillos",
    "codigo_postal": "9120000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13103",
    "nombre_comuna": "Cerro Navia",
    "codigo_postal": "9080000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13104",
    "nombre_comuna": "Conchalí",
    "codigo_postal": "8540000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13105",
    "nombre_comuna": "El Bosque",
    "codigo_postal": "8010000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13106",
    "nombre_comuna": "Estación Central",
    "codigo_postal": "9160000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13107",
    "nombre_comuna": "Huechuraba",
    "codigo_postal": "8580000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13108",
    "nombre_comuna": "Independencia",
    "codigo_postal": "8380000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13109",
    "nombre_comuna": "La Cisterna",
    "codigo_postal": "7970000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13110",
    "nombre_comuna": "La Florida",
    "codigo_postal": "8240000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13111",
    "nombre_comuna": "La Granja",
    "codigo_postal": "8780000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13112",
    "nombre_comuna": "La Pintana",
    "codigo_postal": "8820000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13113",
    "nombre_comuna": "La Reina",
    "codigo_postal": "7850000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13114",
    "nombre_comuna": "Las Condes",
    "codigo_postal": "7550000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13115",
    "nombre_comuna": "Lo Barnechea",
    "codigo_postal": "7690000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13116",
    "nombre_comuna": "Lo Espejo",
    "codigo_postal": "9120000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13117",
    "nombre_comuna": "Lo Prado",
    "codigo_postal": "8980000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13118",
    "nombre_comuna": "Macul",
    "codigo_postal": "7810000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13119",
    "nombre_comuna": "Maipú",
    "codigo_postal": "9250000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13120",
    "nombre_comuna": "Ñuñoa",
    "codigo_postal": "7750000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13121",
    "nombre_comuna": "Pedro Aguirre Cerda",
    "codigo_postal": "8460000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13122",
    "nombre_comuna": "Peñalolén",
    "codigo_postal": "7910000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13123",
    "nombre_comuna": "Providencia",
    "codigo_postal": "7500000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13124",
    "nombre_comuna": "Pudahuel",
    "codigo_postal": "9020000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13125",
    "nombre_comuna": "Quilicura",
    "codigo_postal": "8700000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13126",
    "nombre_comuna": "Quinta Normal",
    "codigo_postal": "8500000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13127",
    "nombre_comuna": "Recoleta",
    "codigo_postal": "8420000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13128",
    "nombre_comuna": "Renca",
    "codigo_postal": "8640000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13129",
    "nombre_comuna": "San Joaquín",
    "codigo_postal": "8940000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13130",
    "nombre_comuna": "San Miguel",
    "codigo_postal": "8900000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13131",
    "nombre_comuna": "San Ramón",
    "codigo_postal": "8880000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13132",
    "nombre_comuna": "Vitacura",
    "codigo_postal": "7630000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13201",
    "nombre_comuna": "Puente Alto",
    "codigo_postal": "8150000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13202",
    "nombre_comuna": "Pirque",
    "codigo_postal": "9480000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13203",
    "nombre_comuna": "San José de Maipo",
    "codigo_postal": "9460000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13301",
    "nombre_comuna": "Colina",
    "codigo_postal": "9340000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13302",
    "nombre_comuna": "Lampa",
    "codigo_postal": "9380000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13303",
    "nombre_comuna": "Tiltil",
    "codigo_postal": "9420000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13401",
    "nombre_comuna": "San Bernardo",
    "codigo_postal": "8050000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13402",
    "nombre_comuna": "Buin",
    "codigo_postal": "9500000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13403",
    "nombre_comuna": "Calera de Tango",
    "codigo_postal": "9560000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13404",
    "nombre_comuna": "Paine",
    "codigo_postal": "9540000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13501",
    "nombre_comuna": "Melipilla",
    "codigo_postal": "9580000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13502",
    "nombre_comuna": "Alhué",
    "codigo_postal": "9650000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13503",
    "nombre_comuna": "Curacaví",
    "codigo_postal": "9630000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13504",
    "nombre_comuna": "María Pinto",
    "codigo_postal": "9640000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13505",
    "nombre_comuna": "San Pedro",
    "codigo_postal": "9660000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13601",
    "nombre_comuna": "Talagante",
    "codigo_postal": "9670000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13602",
    "nombre_comuna": "El Monte",
    "codigo_postal": "9740000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13603",
    "nombre_comuna": "Isla de Maipo",
    "codigo_postal": "9780000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13604",
    "nombre_comuna": "Padre Hurtado",
    "codigo_postal": "9710000",
    "nombre_region": "Región Metropolitana de Santiago"
  },
  {
    "codigo_comuna": "13605",
    "nombre_comuna": "Peñaflor",
    "codigo_postal": "7550000",
    "nombre_region": "Región Metropolitana de Santiago"
  }
]);

print("✔ Comunas insertadas correctamente en colección comunas");