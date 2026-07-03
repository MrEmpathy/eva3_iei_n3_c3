let editandoId = null;

window.onload = async function () {
    const params = new URLSearchParams(window.location.search);
    editandoId = params.get('id');

    await Promise.all([cargarPaises(), cargarComunas()]);

    if (editandoId) {
        await cargarUsuarioParaEditar(editandoId);
    }
};

function validarFormulario() {
    const inputNombre        = $('#inputNombre');
    const inputRut           = $('#inputRut');
    const inputCorreo        = $('#inputCorreo');
    const inputTelefono      = $('#inputTelefono');
    const fechaNacimiento    = $('#inputFechaNac');
    const selectNacionalidad = $('#selectNacionalidad');
    const contrasena         = $('#inputContrasena');
    const repetirContrasena  = $('#inputRepetirContrasena');
    const selectComuna       = $('#selectComuna');
    const inputCalle         = $('#inputCalle');
    const inputNumero        = $('#inputNumero');
    const generoSeleccionado = $('input[name="genero"]:checked');

    let formularioValido = true;

    if (!validarInput(inputNombre))                               formularioValido = false;
    if (!validarRutInput(inputRut))                               formularioValido = false;
    if (!validarEmail(inputCorreo))                               formularioValido = false;
    if (!validarFechaPasada(fechaNacimiento))                     formularioValido = false;
    if (!validarInput(selectNacionalidad))                        formularioValido = false;
    if (!editandoId && !validarContrasena(contrasena))            formularioValido = false;
    if (!editandoId && !validarRepetirContrasena(repetirContrasena, contrasena)) formularioValido = false;
    if (editandoId && contrasena.val() && !validarContrasena(contrasena))        formularioValido = false;
    if (editandoId && contrasena.val() && !validarRepetirContrasena(repetirContrasena, contrasena)) formularioValido = false;
    if (!validarInput(selectComuna))                              formularioValido = false;
    if (!validarInput(inputCalle))                                formularioValido = false;
    if (!validarInput(inputNumero))                               formularioValido = false;

    if (generoSeleccionado.length === 0) {
        formularioValido = false;
        alert('Por favor seleccione un género.');
    }

    if (formularioValido) {
        const datos = {
            nombre:          inputNombre.val(),
            rut:             inputRut.val(),
            correo:          inputCorreo.val(),
            telefono:        inputTelefono.val(),
            fechaNacimiento: fechaNacimiento.val(),
            nacionalidad:    selectNacionalidad.val(),
            genero:          generoSeleccionado.val(),
            direccion: {
                comuna:       selectComuna.val(),
                calle:        inputCalle.val(),
                numero:       $('#inputNumero').val(),
                departamento: $('#inputDepartamento').val()
            }
        };
        if (contrasena.val()) datos.contrasena = contrasena.val();

        const url    = editandoId ? `http://localhost:3000/actualizarUsuario/${editandoId}` : 'http://localhost:3000/guardarUsuario';
        const metodo = editandoId ? 'PUT' : 'POST';

        const enviar = async () => {
            try {
                const respuesta = await fetch(url, {
                    method: metodo,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });
                const data = await respuesta.json();
                if (respuesta.ok) {
                    alert(editandoId ? 'Usuario actualizado correctamente.' : 'Usuario registrado correctamente.');
                    window.location.href = './inicio.html';
                } else {
                    alert('Error: ' + (data.error || data.message));
                }
            } catch (error) {
                console.error('Error de conexión:', error);
                alert('No se pudo conectar con el servidor.');
            }
        };
        enviar();
    } else {
        alert('Por favor complete todos los campos requeridos correctamente.');
    }
}

function validarInput(input) {
    if (!input.val() || input.val().trim() === '') {
        input.addClass('is-invalid');
        return false;
    }
    input.removeClass('is-invalid');
    return true;
}

function validarEmail(input) {
    if (validarInput(input)) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        if (regex.test(input.val())) {
            input.removeClass('is-invalid');
            return true;
        }
        input.addClass('is-invalid');
        return false;
    }
    return false;
}

function validarRutInput(input) {
    const rut = input.val().trim();
    if (!rut) {
        input.addClass('is-invalid');
        return false;
    }
    const rutLimpio = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();
    if (rutLimpio.length < 2) {
        input.addClass('is-invalid');
        return false;
    }
    const cuerpo = rutLimpio.slice(0, -1);
    const dv     = rutLimpio.slice(-1);
    if (!/^\d+$/.test(cuerpo)) {
        input.addClass('is-invalid');
        return false;
    }
    let suma      = 0;
    let multiplo  = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma     += parseInt(cuerpo[i]) * multiplo;
        multiplo  = multiplo === 7 ? 2 : multiplo + 1;
    }
    const resultado  = 11 - (suma % 11);
    const dvEsperado = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado);
    if (dv === dvEsperado) {
        input.removeClass('is-invalid');
        return true;
    }
    input.addClass('is-invalid');
    return false;
}

function validarFechaPasada(input) {
    if (!input.val()) {
        input.addClass('is-invalid');
        return false;
    }
    const fecha = new Date(input.val());
    if (isNaN(fecha.getTime()) || fecha >= new Date()) {
        input.addClass('is-invalid');
        return false;
    }
    input.removeClass('is-invalid');
    return true;
}

function validarContrasena(input) {
    if (validarInput(input)) {
        // Mínimo 8 chars: una mayúscula, una minúscula, un número y un carácter especial (cualquiera)
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[^\s]{8,}$/;
        if (regex.test(input.val())) {
            input.removeClass('is-invalid');
            return true;
        }
        input.addClass('is-invalid');
        return false;
    }
    return false;
}

function validarRepetirContrasena(input, input2) {
    if (validarInput(input)) {
        if (input.val() === input2.val()) {
            input.removeClass('is-invalid');
            return true;
        }
        input.addClass('is-invalid');
        return false;
    }
    return false;
}

async function cargarUsuarioParaEditar(id) {
    try {
        const respuesta = await fetch(`http://localhost:3000/obtenerUsuario/${id}`);
        const u = await respuesta.json();

        $('#inputNombre').val(u.nombre);
        $('#inputRut').val(u.rut);
        $('#inputCorreo').val(u.correo);
        $('#inputTelefono').val(u.telefono || '');
        if (u.fechaNacimiento) $('#inputFechaNac').val(u.fechaNacimiento.split('T')[0]);
        $('#selectNacionalidad').val(u.nacionalidad);
        if (u.genero) $(`input[name="genero"][value="${u.genero}"]`).prop('checked', true);
        if (u.direccion) {
            $('#selectComuna').val(u.direccion.comuna || '');
            $('#inputCalle').val(u.direccion.calle || '');
            $('#inputNumero').val(u.direccion.numero || '');
            $('#inputDepartamento').val(u.direccion.departamento || '');
        }

        $('p.h1').first().text('Editar Usuario');
        $('#btnSubmit').text('Actualizar Usuario');
        $('#inputContrasena').attr('placeholder', 'Dejar en blanco para mantener');
        $('#inputRepetirContrasena').attr('placeholder', 'Dejar en blanco para mantener');
    } catch (err) {
        console.error('Error al cargar usuario:', err);
        alert('No se pudo cargar los datos del usuario.');
    }
}

async function cargarPaises() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoPaises');
        const datos = await respuesta.json();
        const select = $('#selectNacionalidad');
        datos.forEach(pais => {
            select.append($('<option>', { text: pais.nombre, value: pais.iso2 }));
        });
    } catch (error) {
        console.error('Error al cargar países:', error);
    }
}

async function cargarComunas() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoComunas');
        const datos = await respuesta.json();
        const select = $('#selectComuna');
        datos.forEach(comuna => {
            select.append($('<option>', { text: comuna.nombre_comuna, value: comuna.codigo_comuna }));
        });
    } catch (error) {
        console.error('Error al cargar comunas:', error);
    }
}