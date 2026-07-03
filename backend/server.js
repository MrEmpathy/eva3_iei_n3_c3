const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/IEI_N3_C3', {})
    .then(() => console.log('Conexión Exitosa!'))
    .catch((err) => console.log('No se ha podido establecer la conexión con el servidor ', err));

app.listen(PORT, () => console.log(`Puerto: ${PORT}`));

// ── Schemas ───────────────────────────────────────────────
const comunaSchema = new mongoose.Schema({
    codigo_comuna: String,
    nombre_comuna: String,
    codigo_postal: String,
    nombre_region: String
});
const Comuna = mongoose.model('Comuna', comunaSchema, 'comunas');

const direccionSchema = new mongoose.Schema({
    comuna: String,
    calle: String,
    numero: String,
    departamento: String
}, { _id: false });

const usuarioSchema = new mongoose.Schema({
    nombre:         { type: String, required: true },
    rut:            { type: String, required: true },
    correo:         { type: String, required: true },
    telefono:       String,
    fechaNacimiento: {
        type: Date,
        validate: {
            validator: (v) => !v || v < new Date(),
            message: 'La fecha de nacimiento debe ser anterior a la fecha actual.'
        }
    },
    nacionalidad:   { type: String, required: true },
    genero:         { type: String, enum: ['M', 'F', 'O'] },
    direccion:      { type: direccionSchema, required: true },
    contrasena:     { type: String, required: true },
    fechaRegistro:  { type: Date, default: Date.now },
    activo:         { type: Boolean, default: true }
});
const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

const libroSchema = new mongoose.Schema({
    usuario:         { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', default: null },
    titulo:          { type: String, required: true },
    autor:           String,
    editorial:       String,
    isbn:            String,
    genero:          String,
    paginas:         Number,
    fechaPublicacion: Date,
    idioma:          String,
    estado:          String
});
const Libro = mongoose.model('Libro', libroSchema, 'libros');

const paisSchema = new mongoose.Schema({
    nombre: String,
    iso2: String,
    iso3: String,
    codigoPais: String,
    nacionalidad: String
});
const Pais = mongoose.model('Pais', paisSchema, 'paises');

// ── Usuarios ──────────────────────────────────────────────
app.post('/guardarUsuario', async (req, res) => {
    try {
        const { nombre, rut, correo, telefono, fechaNacimiento, nacionalidad, genero, direccion, contrasena } = req.body;
        const jsonDireccion = typeof direccion === 'string' ? JSON.parse(direccion) : direccion;
        const hashContrasena = await bcrypt.hash(contrasena, 10);

        const nuevoUsuario = new Usuario({
            nombre, rut, correo, telefono, fechaNacimiento, nacionalidad, genero,
            direccion: jsonDireccion,
            contrasena: hashContrasena
        });

        await nuevoUsuario.save();
        res.status(200).json({ message: 'Usuario almacenado correctamente.' });
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible almacenar los datos.', error: err.message });
    }
});

app.get('/listadoUsuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.aggregate([
            {
                $lookup: {
                    from: 'paises',
                    localField: 'nacionalidad',
                    foreignField: 'iso2',
                    as: 'gentilicio'
                }
            },
            {
                $unwind: { path: '$gentilicio', preserveNullAndEmptyArrays: true }
            },
            {
                $lookup: {
                    from: 'libros',
                    localField: '_id',
                    foreignField: 'usuario',
                    as: 'libros'
                }
            }
        ]);
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

app.get('/listadoUsuariosSimple', async (req, res) => {
    try {
        const usuarios = await Usuario.find({ activo: true }, { nombre: 1, rut: 1 }).sort({ nombre: 1 });
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

// ── Libros ────────────────────────────────────────────────
app.post('/guardarLibro', async (req, res) => {
    try {
        const { usuario, titulo, autor, editorial, isbn, genero, paginas, fechaPublicacion, idioma, estado } = req.body;

        const nuevoLibro = new Libro({
            usuario, titulo, autor, editorial, isbn, genero,
            paginas: paginas ? Number(paginas) : undefined,
            fechaPublicacion: fechaPublicacion || undefined,
            idioma, estado
        });

        await nuevoLibro.save();
        res.status(200).json({ message: 'Libro almacenado correctamente.' });
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible almacenar el libro.', error: err.message });
    }
});

app.get('/listadoLibrosSinAsignar', async (req, res) => {
    try {
        const libros = await Libro.find({ usuario: null });
        res.status(200).json(libros);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

app.get('/listadoLibros', async (req, res) => {
    try {
        const libros = await Libro.aggregate([
            {
                $lookup: {
                    from: 'usuarios',
                    localField: 'usuario',
                    foreignField: '_id',
                    as: 'datosUsuario'
                }
            },
            {
                $unwind: { path: '$datosUsuario', preserveNullAndEmptyArrays: true }
            }
        ]);
        res.status(200).json(libros);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

// ── Datos auxiliares ──────────────────────────────────────
app.get('/listadoPaises', async (req, res) => {
    try {
        const paises = await Pais.find().sort({ nombre: 1 });
        res.status(200).json(paises);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

app.get('/listadoComunas', async (req, res) => {
    try {
        const comunas = await Comuna.find().sort({ nombre_comuna: 1 });
        res.status(200).json(comunas);
    } catch (err) {
        res.status(500).json({ message: 'No ha sido posible obtener los datos.', error: err.message });
    }
});

// ── CRUD Usuarios ─────────────────────────────────────────
app.get('/obtenerUsuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado.' });
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener usuario.', error: err.message });
    }
});

app.put('/actualizarUsuario/:id', async (req, res) => {
    try {
        const { nombre, rut, correo, telefono, fechaNacimiento, nacionalidad, genero, direccion, contrasena, activo } = req.body;
        const update = { nombre, rut, correo, telefono, fechaNacimiento, nacionalidad, genero, activo };
        if (direccion) update.direccion = typeof direccion === 'string' ? JSON.parse(direccion) : direccion;
        if (contrasena) update.contrasena = await bcrypt.hash(contrasena, 10);
        await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: false });
        res.status(200).json({ message: 'Usuario actualizado correctamente.' });
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar usuario.', error: err.message });
    }
});

// ── CRUD Libros ───────────────────────────────────────────
app.get('/obtenerLibro/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) return res.status(404).json({ message: 'Libro no encontrado.' });
        res.status(200).json(libro);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener libro.', error: err.message });
    }
});

app.put('/actualizarLibro/:id', async (req, res) => {
    try {
        const { usuario, titulo, autor, editorial, isbn, genero, paginas, fechaPublicacion, idioma, estado } = req.body;
        await Libro.findByIdAndUpdate(req.params.id, {
            usuario: usuario || null,
            titulo, autor, editorial, isbn, genero,
            paginas: paginas ? Number(paginas) : null,
            fechaPublicacion: fechaPublicacion || null,
            idioma, estado
        }, { new: true, runValidators: false });
        res.status(200).json({ message: 'Libro actualizado correctamente.' });
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar libro.', error: err.message });
    }
});
