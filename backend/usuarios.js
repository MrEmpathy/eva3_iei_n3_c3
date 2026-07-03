use("test");

const crypto = require("crypto");

function sha256(texto) {
    return crypto.createHash("sha256")
        .update(texto)
        .digest("hex");
}

const nacionalidades = [
    "CL", "AR", "PE", "CO", "MX",
    "BR", "UY", "VE", "EC", "BO",
    "US", "ES"
];

const tecnologiasDisponibles = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Node.js",
    "React",
    "Angular",
    "Vue",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "Django",
    "Flask",
    "Spring Boot",
    "Laravel",
    "AWS"
];

const generos = ["M", "F", "O"];

function obtenerTecnologiasAleatorias() {
    const cantidad = Math.floor(Math.random() * 5) + 2; // entre 2 y 6
    const tecnologias = [...tecnologiasDisponibles]
        .sort(() => Math.random() - 0.5)
        .slice(0, cantidad);

    return tecnologias;
}

const usuarios = [];

for (let i = 1; i <= 50; i++) {

    const anio = Math.floor(Math.random() * 20) + 1985;
    const mes = Math.floor(Math.random() * 12);
    const dia = Math.floor(Math.random() * 28) + 1;

    usuarios.push({
        nombre: `Usuario ${i}`,
        email: `usuario${i}@correo.com`,
        fechaNacimiento: new Date(anio, mes, dia),
        nacionalidad: nacionalidades[
            Math.floor(Math.random() * nacionalidades.length)
        ],
        contrasena: sha256(`Password${i}@2026`),
        tecnologias: obtenerTecnologiasAleatorias(),
        genero: generos[
            Math.floor(Math.random() * generos.length)
        ]
    });
}

db.usuarios.insertMany(usuarios);

print(`${usuarios.length} usuarios insertados correctamente.`);