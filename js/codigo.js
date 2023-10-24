window.addEventListener('load', inicio);

//Definiendo una nueva instancia global de la clase Sistema
let sistema = new Sistema();

/* Variables Globales */
let usuarioLogueado = null;
/* Variables Globales */

function inicio() {
  // Muestro el selector de Perfil por defecto
  document.querySelector('#seccionSelectorPerfil').style.display = 'flex';

  // Seleccionamos todos los botones existentes que tenemos en el HTML
  let botones = document.querySelectorAll('.btn');

  // Recorremos los botones y les agragamos el evento de mostrar sección (al presionar el boton se ocultan todas las secciones y se muestra la que contiene el data-abrir-seccion)
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', mostrarSeccion);
  }
  /* Selector Perfiles */

  // Agregar evento de Logueo como Invitado
  document.querySelector('#btnSelectorInvitado').addEventListener('click', navegacionInvitado);

  /* Selector Perfiles */

  /* Sistema Autenticación Censista */

  // Login -> Agregar evento de Login al botón
  document.querySelector('#btnLogin').addEventListener('click', login);

  // Registro -> Agregar evento de Registrar al botón
  document.querySelector('#btnRegistrar').addEventListener('click', registrarCensista);

  /* Sistema Autenticación Censista */

  // Agregar evento de Cerrar sesión al botón
  document.querySelector('#btnCerrarSesion').addEventListener('click', cerrarSesion);

  // Capturar el evento del combo de las estadísticas cuando cambia la opción seleccionada Ej: (Artigas -> Montevideo)
  document.querySelector('#selDepartamentoEstadisticas').addEventListener('change', generarEstadisticasCensista);

  // Agregar evento de Enviar formulario al botón
  document.querySelector('#btnNuevoCenso').addEventListener('click', nuevoCenso);

  // Agregar evento de Validar formulario al botón
  document.querySelector('#btnValidarCedulaInvitado').addEventListener('click', preCargarCensoPersona);

  cargarComboConDepartamentos();

  // Eliminar datos del censo usuario
  document.querySelector('#btnEliminarDatos').addEventListener('click', eliminarDatosInvitado);

  //Reasignar persona
  document.querySelector('#btnReasignarCensista').addEventListener('click', reasignarCensista);

  //Funcion para abrir el modal
  document.querySelector('#btnReasignar').addEventListener('click', abrirModal);

  //Funcion para cerrar el modal
  document.querySelector('#btnCerrarModal').addEventListener('click', cerrarModal);

  //Tabla estadisticas invitado
  generarTablaEstadisticasDepartamentos();
}

/* Carga de Datos Inicial */
function cargarComboConDepartamentos() {
  let combos = document.querySelectorAll('[data-combo="departamento"]');

  // Llamamos a la función obtenerDepartamentos en sistema que retorna un array que contiene como objetos todos los departamentos
  let departamentos = sistema.obtenerDepartamentos();

  /* Ejemplo del contenido de la variable departamentos
  departamentos: [
    {
      nombre: "Artigas",
      valor: "artigas",
    },
    {
      nombre: "Montevideo",
      valor: "montevideo",
    },
  ];
  */

  // Recorremos el array de departamentos y enviamos el html del <option> al elemento
  for (let i = 0; i < combos.length; i++) {
    let combo = combos[i];
    for (let i = 0; i < departamentos.length; i++) {
      let departamento = departamentos[i];
      combo.innerHTML += `<option value="${departamento.valor}">${departamento.nombre}</option>`;
    }
  }
}

/* Carga de Datos Inicial */

/* Manejo de la navegación en la interfaz  */
// Navegar entre las paginas desde el llamado de un botón | Mostrar Secciones
function mostrarSeccion() {
  // Inicialmente cuando alguien pulsa un botón para cambiar la sección, nos aseguramos de ocultarlas todas
  sistema.ocultarSecciones();
  sistema.resetearFormularios();

  // this.getAttribute = el contenido del data-abrir-seccion del botón que pulsaste
  seccion = this.getAttribute('data-abrir-seccion');

  // Con todo oculto y conociendo la sección que deberíamos abrir con el paso anterior, cambiamos la visibilidad de la sección anterior a visible
  document.querySelector(`[data-seccion=${seccion}]`).style.display = 'flex';
}
/* Manejo de la navegación en la interfaz  */

/* Selector de Perfiles */
function navegacionInvitado() {
  sistema.mostrarElementoString('#btnCerrarSesion');
  sistema.mostrarElementoString('#navLinkNuevoCensoInvitado');
  sistema.mostrarElementoString('#navLinkEstadisticasInvitado');

  // Ocultar Personajes
  sistema.ocultarElementoString('#contenedorPersonajesSelectorPerfil');
}
/* Selector de Perfiles */

/* Pagina estadisticas invitado*/
function generarTablaEstadisticasDepartamentos() {
  let tabla = document.querySelector('#tblBodyEstadisticas');
  tabla.innerHTML = '';

  let departamentos = sistema.obtenerDepartamentos();
  for (let i = 0; i < departamentos.length; i++) {
    let departamento = departamentos[i];

    let totalPersonasRegistradas = sistema.obtenerTotalPersonasRegistradas();
    let totalPersonasDepartamento = sistema.obtenerCantidadPersonasPorDepartamento(departamento.valor);
    let personasDepartamento = sistema.obtenerPersonasPorDepartamento(departamento.valor);
    let totalPersonasEstudian = sistema.obtenerCantidadPersonasPorOcupacion(personasDepartamento, 'estudiante');
    let totalPersonasNoTrabajan = sistema.obtenerCantidadPersonasPorOcupacion(personasDepartamento, 'no-trabaja');
    let totalPersonasDependiente = sistema.obtenerCantidadPersonasPorOcupacion(personasDepartamento, 'dependiente');
    let totalPersonasIndependiente = sistema.obtenerCantidadPersonasPorOcupacion(personasDepartamento, 'independiente');

    let porcentajeTotalPersonasCensadasDepartamento = 0;

    if (totalPersonasDepartamento > 0) {
      porcentajeTotalPersonasCensadasDepartamento = ((totalPersonasDepartamento / totalPersonasRegistradas) * 100).toFixed(1);
    }

    let totalPersonasDependientesIndependientes = totalPersonasDependiente + totalPersonasIndependiente;

    sistema.agregarFilaTablaEstadisticas(
      tabla,
      departamento.nombre,
      totalPersonasEstudian,
      totalPersonasNoTrabajan,
      totalPersonasDependientesIndependientes,
      porcentajeTotalPersonasCensadasDepartamento
    );
  }
}
/* Pagina estadisticas invitado*/

/* Pagina nuevo censo*/
function preCargarCensoPersona() {
  let cedula = document.querySelector('#txtCedula').value;
  cedula = sistema.eliminarCaracter(cedula, '.');
  cedula = sistema.eliminarCaracter(cedula, '-');
  let nombreCompleto = document.querySelector('#txtNombreCompleto');
  let edad = document.querySelector('#txtEdad');
  let ocupacion = document.querySelector('#selOcupacion');
  let idDepartamento = document.querySelector('#selDepartamento');

  let ciVerificada = sistema.verificarCedulaIdentidad(cedula);

  // Resetear valores del formulario
  sistema.limpiarInput('#txtNombreCompleto');
  sistema.limpiarInput('#txtEdad');
  sistema.limpiarInput('#selOcupacion');
  sistema.limpiarInput('#selDepartamento');
  sistema.limpiarTexto('#txtCensistaAsignado');
  sistema.ocultarElementoString('#contenedorCensistaAsignado');

  // Resetear el checkbox
  document.querySelector('#checkboxConfirmarDatos').checked = false;

  // Cargar valores del formulario
  sistema.cargarCensoInvitado(cedula, nombreCompleto, edad, ocupacion, idDepartamento, ciVerificada);
}

function nuevoCenso() {
  let cedula = document.querySelector('#txtCedula').value;

  cedula = sistema.eliminarCaracter(cedula, '.');
  cedula = sistema.eliminarCaracter(cedula, '-');

  let nombreCompleto = document.querySelector('#txtNombreCompleto').value;
  let edad = document.querySelector('#txtEdad').value;
  let ocupacion = document.querySelector('#selOcupacion').value;
  let idDepartamento = document.querySelector('#selDepartamento').value;
  let verificado = document.querySelector('#checkboxConfirmarDatos').checked;

  sistema.envioFormularioCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado);
}

function eliminarDatosInvitado() {
  let cedula = document.querySelector('#txtCedula').value;

  if (cedula) {
    sistema.eliminarPersona(cedula);
  } else {
    alert('Ingrese la cédula que desea eliminar.');
  }
}

/* Pagina nuevo censo*/

/* Pagina login censista*/
// Login -> Función de Login, toma el usuario, contraseña y lo chequea con el array de Censitas
function login() {
  let usuario = document.querySelector('#txtUsuarioLogin').value;
  let contrasena = document.querySelector('#txtContraseñaLogin').value;
  let usuarioVerificado = sistema.verificarLogin(usuario, contrasena);

  // Ejecuto acciones de validación
  sistema.procesarInicioSesionCensista(usuarioVerificado);
}

// Función para cerrar la sesión del Censista
function cerrarSesion() {
  // Elimino el usuario previamente logueado
  usuarioLogueado = null;

  // Oculto la barra de Navegación y el botón de Cerrar Sesión
  sistema.ocultarElementoString('#navLinkInicioCensista');
  sistema.ocultarElementoString('#navLinkNuevoCensoInvitado');
  sistema.ocultarElementoString('#navLinkEstadisticasInvitado');
  sistema.ocultarElementoString('#btnCerrarSesion');

  // Ocultar Elementos del formulario censista y mostrar elementos del formulario Invitado
  sistema.mostrarElementoString('#btnEliminarDatos');
  sistema.mostrarElementoString('#contenedorCensistaAsignado');
  sistema.ocultarElementoString('#checkboxConfirmarDatos');
  sistema.ocultarElementoString('#labelCheckboxConfirmarDatos');

  // Mostrar Personajes
  sistema.mostrarElementoString('#contenedorPersonajesSelectorPerfil');
}
/* Pagina login censista*/

/* Pagina registra censista*/
function registrarCensista() {
  let nombreCompleto = document.querySelector('#txtNombre').value;
  let usuario = document.querySelector('#txtUsuario').value;
  let contrasena = document.querySelector('#txtContraseña').value;

  // Ejecuto acciones de validación
  sistema.procesarRegistroCensista(nombreCompleto, usuario, contrasena);
}
/* Pagina registra censista*/

/* Pagina estadisticas censista*/
//Modal Reasignar Censista
function abrirModal() {
  sistema.mostrarElementoString('#contenedorModal');
  sistema.cargarDatosModalReasignarCensista();
}

function cerrarModal() {
  sistema.ocultarElementoString('#contenedorModal');
  sistema.limpiarTexto('#selPersona');
  sistema.limpiarTexto('#selCensista');
  sistema.mostrarTexto('#selPersona', '<option value="">Nombre de la persona</option>');
  sistema.mostrarTexto('#selCensista', '<option value="">Nombre del Censista</option>');
  generarTablaCensos();
}

//Generar Estadísticas Censista
function generarEstadisticasCensista() {
  let txtTotalPersonasRegistradas = document.querySelector('#txtTotalPersonasRegistradas');
  let txtTotalPersonasCensadas = document.querySelector('#txtTotalPersonasCensadas');
  let txtTotalPersonasPendientes = document.querySelector('#txtTotalPersonasPendientes');

  let txtTotalPersonasMenores = document.querySelector('#txtTotalPersonasMenores');
  let txtTotalPersonasMayores = document.querySelector('#txtTotalPersonasMayores');

  let departamento = document.querySelector('#selDepartamentoEstadisticas').value;

  sistema.generarEstadisticas(
    txtTotalPersonasRegistradas,
    txtTotalPersonasCensadas,
    txtTotalPersonasPendientes,
    txtTotalPersonasMenores,
    txtTotalPersonasMayores,
    departamento
  );
}

// Tabla Personas Ingresadas
function generarTablaCensos() {
  let tabla = document.querySelector('#tblBodyCensos');
  tabla.innerHTML = '';

  for (let i = 0; i < sistema.personas.length; i++) {
    let verificado;

    if (sistema.personas[i].verificado) {
      verificado = 'Censado';
    } else {
      verificado = 'No Censado';
    }

    let censista = sistema.buscarCensistaPorId(sistema.personas[i].idCensista);
    let departamento = sistema.buscarDepartamentoPorId(sistema.personas[i].idDepartamento);
    tabla.innerHTML += `<tr>
    <td>${sistema.formatearDato(sistema.personas[i].cedula)}</td>
    <td>${sistema.formatearDato(sistema.personas[i].nombreCompleto)}</td>
    <td>${sistema.formatearDato(sistema.personas[i].edad)}</td>
    <td>${sistema.formatearDato(departamento.nombre)}</td>
    <td>${sistema.formatearDato(sistema.convertirTextoOcupacion(sistema.personas[i].ocupacion))}</td>
    <td>${sistema.formatearDato(censista.nombreCompleto)}</td>
    <td>${sistema.formatearDato(verificado)}</td>
  </tr>`;
  }
}
/* Pagina estadisticas censista*/

/* Pagina reasignar censista*/
function reasignarCensista() {
  let personaSeleccionada = Number(document.querySelector('#selPersona').value);
  let censistaSeleccionado = Number(document.querySelector('#selCensista').value);
  if (personaSeleccionada !== 0 && censistaSeleccionado !== 0) {
    sistema.reasignarCensista(personaSeleccionada, censistaSeleccionado);
    sistema.limpiarTexto('#selPersona');
    sistema.limpiarTexto('#selCensista');
    sistema.mostrarTexto('#selPersona', '<option value="">Nombre de la persona</option>');
    sistema.mostrarTexto('#selCensista', '<option value="">Nombre del Censista</option>');
    sistema.cargarDatosModalReasignarCensista();
    alert(
      `La Persona ${sistema.obtenerPersonaPorId(personaSeleccionada).nombreCompleto} fue reasignada al censista ${
        sistema.buscarCensistaPorId(censistaSeleccionado).nombreCompleto
      } con éxito!`
    );
  }
}
/* Pagina reasignar censista*/
