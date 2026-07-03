let tablaLibros = null;
let editandoId  = null;

window.onload = async function () {
    const params = new URLSearchParams(window.location.search);
    editandoId = params.get('id');

    await cargarUsuarios();
    cargarLibros();

    if (editandoId) {
        await cargarLibroParaEditar(editandoId);
    }
};

async function cargarUsuarios() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoUsuariosSimple');
        const datos = await respuesta.json();
        const select = $('#selectUsuario');
        datos.forEach(usuario => {
            select.append($('<option>', {
                value: usuario._id,
                text: `${usuario.nombre} — ${usuario.rut}`
            }));
        });
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

async function cargarLibros() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoLibros');
        const datos = await respuesta.json();

        if (tablaLibros) {
            tablaLibros.destroy();
            $('#tablaLibros tbody').empty();
        }

        tablaLibros = new DataTable('#tablaLibros', {
            data: datos,
            language: {
                emptyTable:     'No hay datos disponibles',
                info:           'Mostrando _START_ a _END_ de _TOTAL_ registros',
                infoEmpty:      'Mostrando 0 a 0 de 0 registros',
                infoFiltered:   '(filtrado de _MAX_ registros totales)',
                lengthMenu:     'Mostrar _MENU_ registros',
                search:         'Buscar:',
                zeroRecords:    'No se encontraron registros',
                paginate: { first: 'Primero', last: '\xDAltimo', next: 'Siguiente', previous: 'Anterior' }
            },
            columns: [
                { data: 'titulo' },
                { data: 'autor',             render: (d) => d || '—' },
                { data: 'editorial',         render: (d) => d || '—' },
                { data: 'isbn',              render: (d) => d || '—' },
                { data: 'genero',            render: (d) => d || '—' },
                { data: 'paginas',           render: (d) => d || '—' },
                {
                    data: 'fechaPublicacion',
                    render: (d) => d ? new Date(d).toLocaleDateString('es-CL') : '—'
                },
                { data: 'idioma',            render: (d) => d || '—' },
                { data: 'estado',            render: (d) => d || '—' },
                { data: 'datosUsuario',      render: (d) => d ? d.nombre : '—' },
                { data: 'datosUsuario',      render: (d) => d ? d.rut    : '—' },
                {
                    data: '_id',
                    orderable: false,
                    render: (id) => `<a href="./libros.html?id=${id}" class="btn btn-sm btn-warning">Editar</a>`
                }
            ]
        });
    } catch (error) {
        console.error('Error al cargar libros:', error);
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

async function guardarLibro() {
    const selectUsuario = $('#selectUsuario');
    const inputTitulo   = $('#inputTitulo');

    if (!validarInput(inputTitulo)) {
        alert('El título es obligatorio.');
        return;
    }

    const datos = {
        usuario:          selectUsuario.val() || null,
        titulo:           inputTitulo.val(),
        autor:            $('#inputAutor').val()            || undefined,
        editorial:        $('#inputEditorial').val()        || undefined,
        isbn:             $('#inputIsbn').val()             || undefined,
        genero:           $('#selectGenero').val()          || undefined,
        paginas:          $('#inputPaginas').val()          || undefined,
        fechaPublicacion: $('#inputFechaPublicacion').val() || undefined,
        idioma:           $('#selectIdioma').val()          || undefined,
        estado:           $('#selectEstado').val()          || undefined
    };

    const url    = editandoId ? `http://localhost:3000/actualizarLibro/${editandoId}` : 'http://localhost:3000/guardarLibro';
    const metodo = editandoId ? 'PUT' : 'POST';

    try {
        const respuesta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        const data = await respuesta.json();
        if (respuesta.ok) {
            alert(editandoId ? 'Libro actualizado correctamente.' : 'Libro registrado correctamente.');
            if (editandoId) {
                window.location.href = './inicio.html';
            } else {
                limpiarFormulario();
                cargarLibros();
            }
        } else {
            alert('Error: ' + (data.error || data.message));
        }
    } catch (error) {
        console.error('Error al guardar libro:', error);
        alert('No se pudo conectar con el servidor.');
    }
}

async function cargarLibroParaEditar(id) {
    try {
        const respuesta = await fetch(`http://localhost:3000/obtenerLibro/${id}`);
        const l = await respuesta.json();

        $('#selectUsuario').val(l.usuario || '');
        $('#inputTitulo').val(l.titulo);
        $('#inputAutor').val(l.autor || '');
        $('#inputEditorial').val(l.editorial || '');
        $('#inputIsbn').val(l.isbn || '');
        $('#selectGenero').val(l.genero || '');
        $('#inputPaginas').val(l.paginas || '');
        if (l.fechaPublicacion) $('#inputFechaPublicacion').val(l.fechaPublicacion.split('T')[0]);
        $('#selectIdioma').val(l.idioma || '');
        $('#selectEstado').val(l.estado || '');

        $('p.h1').first().text('Editar Libro');
        $('#btnGuardarLibro').text('Actualizar Libro');
    } catch (err) {
        console.error('Error al cargar libro:', err);
        alert('No se pudo cargar los datos del libro.');
    }
}

function limpiarFormulario() {
    $('#formularioLibro')[0].reset();
    $('#selectUsuario').val('');
    $('#selectGenero').val('');
    $('#selectIdioma').val('');
    $('#selectEstado').val('');
    $('.is-invalid').removeClass('is-invalid');
}
