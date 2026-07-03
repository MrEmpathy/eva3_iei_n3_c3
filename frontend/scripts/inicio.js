window.onload = function () {
    cargarUsuarios();
    cargarLibros();
    cargarInventario();
};

async function cargarUsuarios() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoUsuarios');
        const datos = await respuesta.json();

        new DataTable('#tablaUsuarios', {
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
                { data: 'nombre' },
                { data: 'rut' },
                { data: 'correo' },
                { data: 'nacionalidad', render: (data) => data || '—' },
                {
                    data: 'genero',
                    render: (data) => data === 'M' ? 'Masculino' : data === 'F' ? 'Femenino' : 'Otro'
                },
                {
                    data: 'fechaRegistro',
                    render: (data) => data ? new Date(data).toLocaleDateString('es-CL') : '—'
                },
                {
                    data: 'activo',
                    render: (data) => data
                        ? '<span class="badge bg-success">Activo</span>'
                        : '<span class="badge bg-secondary">Inactivo</span>'
                },
                {
                    data: 'libros',
                    render: (data) => {
                        if (!data || data.length === 0) return '<span class="text-muted">Sin libros</span>';
                        return `<span class="badge bg-primary">${data.length}</span> ${data.map(l => l.titulo).join(', ')}`;
                    }
                },
                {
                    data: '_id',
                    orderable: false,
                    render: (id) => `<a href="./formulario.html?id=${id}" class="btn btn-sm btn-warning">Editar</a>`
                }
            ]
        });

        if (!respuesta.ok) throw new Error(respuesta.status);
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

async function cargarLibros() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoLibros');
        const datos = await respuesta.json();

        new DataTable('#tablaLibros', {
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
                { data: 'autor',     render: (d) => d || '—' },
                { data: 'editorial', render: (d) => d || '—' },
                { data: 'genero',    render: (d) => d || '—' },
                { data: 'paginas',   render: (d) => d || '—' },
                { data: 'idioma',    render: (d) => d || '—' },
                { data: 'estado',    render: (d) => d || '—' },
                { data: 'datosUsuario', render: (d) => d ? d.nombre : '—' },
                { data: 'datosUsuario', render: (d) => d ? d.rut   : '—' },
                {
                    data: '_id',
                    orderable: false,
                    render: (id) => `<a href="./libros.html?id=${id}" class="btn btn-sm btn-warning">Editar</a>`
                }
            ]
        });

        if (!respuesta.ok) throw new Error(respuesta.status);
    } catch (error) {
        console.error('Error al cargar libros:', error);
    }
}

async function cargarInventario() {
    try {
        const respuesta = await fetch('http://localhost:3000/listadoLibrosSinAsignar');
        const datos = await respuesta.json();

        new DataTable('#tablaInventario', {
            data: datos,
            language: {
                emptyTable:     'No hay libros en inventario',
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
                { data: 'autor',             render: (d) => d || '\u2014' },
                { data: 'editorial',         render: (d) => d || '\u2014' },
                { data: 'isbn',              render: (d) => d || '\u2014' },
                { data: 'genero',            render: (d) => d || '\u2014' },
                { data: 'paginas',           render: (d) => d || '\u2014' },
                { data: 'idioma',            render: (d) => d || '\u2014' },
                { data: 'estado',            render: (d) => d || '\u2014' }
            ]
        });

        if (!respuesta.ok) throw new Error(respuesta.status);
    } catch (error) {
        console.error('Error al cargar inventario:', error);
    }
}