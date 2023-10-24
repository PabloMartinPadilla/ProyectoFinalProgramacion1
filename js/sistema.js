class Sistema {
  constructor() {
    this.censistas = [
      new Censista(1, 'usu1', 'aB123', 'Juan Pérez'),
      new Censista(2, 'usu2', 'Ab321', 'María López'),
      new Censista(3, 'usu3', 'bC111', 'Pedro Gómez'),
    ];

    this.personas = [
      new Persona(1, '89318509', 'Esteban Pérez', '23', 'estudiante', 'montevideo', false, 1),
      new Persona(2, '46154283', 'Julio López', '30', 'independiente', 'canelones', false, 1),
      new Persona(3, '7981912', 'Juan Gómez', '5', 'dependiente', 'montevideo', true, 2),
      new Persona(4, '42980153', 'Ana Rodríguez', '28', '', 'rocha', false, 1),
      new Persona(5, '20240626', 'Carlos Silva', '35', 'estudiante', 'colonia', true, 3),
      new Persona(6, '32536247', 'Laura Fernández', '50', 'independiente', 'durazno', false, 1),
      new Persona(7, '84221529', 'Diego González', '40', 'dependiente', 'salto', true, 2),
      new Persona(8, '52774730', 'Luisa Martínez', '29', 'no-trabaja', 'artigas', false, 1),
      new Persona(9, '77175670', 'Mariano Sánchez', '33', 'estudiante', 'tacuarembo', true, 1),
      new Persona(10, '35788576', 'Carolina Castro', '17', 'independiente', 'paysandu', false, 3),
      new Persona(11, '99997292', 'José Pereira', '38', 'dependiente', 'treintaYTres', true, 1),
      new Persona(12, '88166567', 'Lucía Hernández', '31', 'no-trabaja', 'flores', false, 3),
      new Persona(13, '16107167', 'Martín López', '42', 'estudiante', 'sanJose', true, 1),
      new Persona(14, '78616495', 'Valentina Pacheco', '25', 'independiente', 'rioNegro', false, 2),
      new Persona(15, '64775875', 'Santiago Ramos', '36', 'dependiente', 'soriano', true, 2),
      new Persona(16, '36314594', 'Camila Cabrera', '26', 'no-trabaja', 'lavalleja', false, 2),
      new Persona(17, '780105', 'Andrés Acosta', '44', 'estudiante', 'florida', true, 3),
      new Persona(18, '147961', 'Carla Medina', '29', 'independiente', 'rivera', false, 3),
      new Persona(19, '76394039', 'Roberto Fernández', '37', 'dependiente', 'rioNegro', true, 3),
      new Persona(20, '75983964', 'Luciana Sosa', '4', 'no-trabaja', 'cerroLargo', false, 1),
      new Persona(21, '85629069', 'Fernando Pereira', '41', 'estudiante', 'artigas', true, 1),
      new Persona(22, '29962742', 'Ana Belén Silva', '30', 'independiente', 'colonia', false, 2),
      new Persona(23, '83328540', 'Jorge Santos', '32', 'dependiente', 'canelones', true, 1),
      new Persona(24, '15177242', 'María José Giménez', '8', 'no-trabaja', 'durazno', false, 1),
      new Persona(25, '19511117', 'Carlos Rodríguez', '34', 'estudiante', 'montevideo', true, 3),
      new Persona(26, '21122859', 'Laura Gómez', '9', 'independiente', 'treintaYTres', false, 2),
      new Persona(27, '98765432', 'Pedro Gómez', '45', 'dependiente', 'maldonado', true, 1),
      new Persona(28, '3936587', 'Ana Rodríguez', '8', 'no-trabaja', 'rocha', false, 2),
      new Persona(29, '86123856', 'Carlos Rodriguez', '5', 'estudiante', 'colonia', true, 2),
      new Persona(30, '37756220', 'Laura Fernández', '50', 'independiente', 'durazno', false, 1),
    ];

    this.departamentos = [
      new Departamento('Artigas', 'artigas'),
      new Departamento('Canelones', 'canelones'),
      new Departamento('Cerro Largo', 'cerroLargo'),
      new Departamento('Colonia', 'colonia'),
      new Departamento('Durazno', 'durazno'),
      new Departamento('Flores', 'flores'),
      new Departamento('Florida', 'florida'),
      new Departamento('Lavalleja', 'lavalleja'),
      new Departamento('Maldonado', 'maldonado'),
      new Departamento('Montevideo', 'montevideo'),
      new Departamento('Paysandú', 'paysandu'),
      new Departamento('Río Negro', 'rioNegro'),
      new Departamento('Rivera', 'rivera'),
      new Departamento('Rocha', 'rocha'),
      new Departamento('Salto', 'salto'),
      new Departamento('San José', 'sanJose'),
      new Departamento('Soriano', 'soriano'),
      new Departamento('Tacuarembó', 'tacuarembo'),
      new Departamento('Treinta y Tres', 'treintaYTres'),
    ];

    this.idGlobalPersonas = 30;
  }

  /* Manejo de la Navegación en la interfaz */

  // Mostrar un elemento llamando a la función con un string identificador como ".nombreClase" o "#miID"
  mostrarElementoString(identificador) {
    document.querySelector(identificador).style.display = 'flex';
  }

  // Ocultar un elemento llamando a la función con un string identificador como ".nombreClase" o "#miID"
  ocultarElementoString(identificador) {
    document.querySelector(identificador).style.display = 'none';
  }

  // Habilitar un elemento llamando a la función con un string identificador como ".nombreClase" o "#miID"
  habilitarElementoString(identificador) {
    document.querySelector(identificador).disabled = false;
  }

  // Deshabilita un elemento llamando a la función con un string identificador como ".nombreClase" o "#miID"
  deshabilitarElementoString(identificador) {
    document.querySelector(identificador).disabled = true;
  }

  // Limpiar texto basado en un identificador
  limpiarTexto(identificador) {
    document.querySelector(identificador).innerHTML = '';
  }
  // Limpiar inputs basado en un identificador
  limpiarInput(identificador) {
    document.querySelector(identificador).value = '';
  }

  // Mostrar texto basado en un identificador
  mostrarTexto(identificador, texto) {
    document.querySelector(identificador).innerHTML = texto;
  }

  // Resetear el valor de todos los inputs y textos
  resetearFormularios() {
    // Resetear valores del formulario nuevo Censo
    this.limpiarInput('#txtCedula');
    this.limpiarInput('#txtNombreCompleto');
    this.limpiarInput('#txtEdad');
    this.limpiarInput('#selOcupacion');
    this.limpiarInput('#selDepartamento');
    this.limpiarTexto('#txtCensistaAsignado');
    this.ocultarElementoString('#contenedorCensistaAsignado');

    // Resetear el checkbox
    document.querySelector('#checkboxConfirmarDatos').checked = false;

    // Resetear valores Login
    this.limpiarInput('#txtUsuarioLogin');
    this.limpiarInput('#txtContraseñaLogin');

    // Resetear valores Registro
    this.limpiarInput('#txtNombre');
    this.limpiarInput('#txtUsuario');
    this.limpiarInput('#txtContraseña');
    this.limpiarTexto('#txtValidacionCampos');
    this.limpiarTexto('#txtValidacionUsuario');
    this.limpiarTexto('#txtValidacionContraseña');
    this.ocultarElementoString('#alertaRegistrar');
  }

  // Ocultar todas las secciones que tengan el class ".seccion"
  ocultarSecciones() {
    let secciones = document.querySelectorAll('.seccion');

    for (let i = 0; i < secciones.length; i++) {
      secciones[i].style.display = 'none';
    }
  }
  // Navegar entre las paginas, llamando a la sección como string, ej: mostrarSeccionString("paginaPrincipal") | Mostrar Secciones
  mostrarSeccionString(seccion) {
    // Inicialmente cuando alguien pulsa un botón para cambiar la sección, nos aseguramos de ocultarlas todas
    this.ocultarSecciones();

    // Con todo oculto y conociendo la sección que deberíamos abrir, cambiamos la visibilidad de la sección a visible
    document.querySelector(`[data-seccion=${seccion}]`).style.display = 'flex';
  }
  /* Manejo de la Navegación en la interfaz */

  // Agregar Censista al arreglo de censistas
  agregarCensista(censista) {
    censista.id = this.censistas.length + 1;
    this.censistas.push(censista);
  }

  // Función para generar un número entero aleatorio entre un valor mínimo y máximo dado (ambos inclusivos)
  obtenerNumeroAleatorioEntreUnRango(min, max) {
    // Utilizando Math.ceil() para redondear hacia arriba el valor mínimo
    min = Math.ceil(min);
    // Utilizando Math.floor() para redondear hacia abajo el valor máximo
    max = Math.floor(max);
    // Utilizando Math.random() para generar un número decimal aleatorio entre 0 (incluido) y 1 (excluido)
    // Multiplicándolo por la diferencia entre max y min, y sumando min
    // Utilizando Math.floor() para redondear hacia abajo el resultado final a un número entero
    return Math.floor(Math.random() * (max - min) + min);
  }

  obtenerPersonas() {
    return this.personas;
  }

  obtenerPersonasCensadas(personas) {
    let personasCensadas = [];
    for (let i = 0; i < personas.length; i++) {
      let persona = personas[i];
      if (persona.verificado) {
        personasCensadas.push(persona);
      }
    }
    return personasCensadas;
  }
  obtenerCensistas() {
    return this.censistas;
  }

  reasignarCensista(idPersona, idCensistaNuevo) {
    let persona = this.obtenerPersonaPorId(idPersona);
    persona.idCensista = idCensistaNuevo;
    return persona;
  }

  cargarDatosModalReasignarCensista() {
    let comboPersona = document.querySelector('#selPersona');
    let personas = this.obtenerPersonas();

    let comboCensista = document.querySelector('#selCensista');
    let censistas = this.obtenerCensistas();

    for (let i = 0; i < personas.length; i++) {
      let persona = personas[i];

      if (!persona.verificado && persona.idCensista === usuarioLogueado.id) {
        comboPersona.innerHTML += `<option value="${persona.id}">${persona.nombreCompleto}</option>`;
      }
    }

    for (let i = 0; i < censistas.length; i++) {
      let censista = censistas[i];
      if (censista.id !== usuarioLogueado.id) {
        comboCensista.innerHTML += `<option value="${censista.id}">${censista.nombreCompleto}</option>`;
      }
    }
  }

  obtenerPersonaPorCedula(ci) {
    let objetoPersona = null;

    for (let i = 0; i < this.personas.length; i++) {
      let persona = this.personas[i];
      if (persona.cedula === ci) {
        objetoPersona = persona;
        break;
      }
    }
    return objetoPersona;
  }

  obtenerPersonaPorId(id) {
    let objetoPersona = null;

    for (let i = 0; i < this.personas.length; i++) {
      let persona = this.personas[i];
      if (persona.id === id) {
        objetoPersona = persona;
        break;
      }
    }
    return objetoPersona;
  }

  // Busca un censista por el ID, retorna todo el objeto
  buscarCensistaPorId(id) {
    let censista = null;
    for (let i = 0; i < this.censistas.length; i++) {
      let unCensista = this.censistas[i];
      if (unCensista['id'] === id) {
        censista = unCensista;
        break;
      }
    }

    return censista;
  }

  buscarDepartamentoPorId(id) {
    let departamento = null;
    for (let i = 0; i < this.departamentos.length; i++) {
      let unDepartamento = this.departamentos[i];
      if (unDepartamento['valor'] === id) {
        departamento = unDepartamento;
        break;
      }
    }
    return departamento;
  }

  buscarElemento(arrElementos, propiedad, busqueda) {
    let existe = false;
    for (let i = 0; i < arrElementos.length; i++) {
      let unElemento = arrElementos[i];
      if (unElemento[propiedad] === busqueda) {
        existe = true;
        break;
      }
    }
    return existe;
  }

  obtenerObjeto(arrElementos, propiedad, busqueda) {
    let objeto = null;
    for (let i = 0; i < arrElementos.length; i++) {
      let unElemento = arrElementos[i];
      if (unElemento[propiedad] === busqueda) {
        objeto = unElemento;
        break;
      }
    }
    return objeto;
  }

  obtenerPersonasPorDepartamento(departamento) {
    let personasDepartamento = [];

    for (let i = 0; i < this.personas.length; i++) {
      let personaDepartamento = this.personas[i];
      if (personaDepartamento.idDepartamento === departamento) {
        personasDepartamento.push(personaDepartamento);
      }
    }
    return personasDepartamento;
  }

  obtenerTotalPersonasCensadasPorDepartamento(departamento) {
    let totalPersonasCensadas = 0;
    let personasDepartamento = this.obtenerPersonasPorDepartamento(departamento);
    let personasCensadas = this.obtenerPersonasCensadas(personasDepartamento);

    for (let i = 0; i < personasCensadas.length; i++) {
      let personaCensada = personasCensadas[i];
      if (personaCensada) {
        totalPersonasCensadas++;
      }
    }
    return totalPersonasCensadas;
  }

  obtenerCantidadPersonasPorOcupacion(personas, ocupacion) {
    let totalPersonas = 0;

    for (let i = 0; i < personas.length; i++) {
      let persona = personas[i];
      if (persona.ocupacion === ocupacion) {
        totalPersonas++;
      }
    }
    return totalPersonas;
  }

  obtenerDepartamentos() {
    return this.departamentos;
  }

  eliminarCaracter(texto, letra) {
    let textoSustituido = '';
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) !== letra) {
        textoSustituido = textoSustituido + texto.charAt(i);
      }
    }
    return textoSustituido;
  }

  /* Editar Persona */

  agregarPersonaCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado) {
    this.idGlobalPersonas = this.idGlobalPersonas + 1;
    let id = this.idGlobalPersonas;

    let idCensista = 0;

    if (usuarioLogueado !== null) {
      idCensista = usuarioLogueado.id;
    } else {
      idCensista = this.obtenerNumeroAleatorioEntreUnRango(1, this.censistas.length + 1);
    }

    let persona = new Persona(id, cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado, idCensista);

    this.personas.push(persona);

    return persona;
  }

  actualizarPersona(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado) {
    let persona = this.obtenerPersonaPorCedula(cedula);
    persona.nombreCompleto = nombreCompleto;
    persona.edad = edad;
    persona.ocupacion = ocupacion;
    persona.idDepartamento = idDepartamento;
    persona.verificado = verificado;
    return persona;
  }

  envioFormularioCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado) {
    let validacionFormulario = this.validarCamposNuevoCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento);
    let persona = this.obtenerPersonaPorCedula(cedula);

    if (validacionFormulario) {
      if (persona !== null) {
        persona = this.actualizarPersona(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado);
      } else {
        persona = this.agregarPersonaCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado);
      }
      if (verificado) {
        alert('El censo fue completado y validado con éxito!');
      }
      alert('El censo fue creado con éxito.');
      let censista = this.buscarCensistaPorId(persona.idCensista);

      this.mostrarElementoString('#contenedorCensistaAsignado');
      document.querySelector('#txtCensistaAsignado').innerHTML = `${censista.nombreCompleto}`;
      this.deshabilitarElementoString('#btnNuevoCenso');
      this.deshabilitarElementoString('#btnEliminarDatos');
      // Actualizar Datos de la tabla
      generarTablaCensos();
      generarTablaEstadisticasDepartamentos();
    } else {
      alert('Datos Incorrectos, revisa el formulario.');
    }
  }
  /* Editar Persona */

  /* Eliminar Persona */

  eliminarPersona(cedula) {
    for (let i = 0; i < this.personas.length; i++) {
      let persona = this.personas[i];
      if (persona.cedula === cedula) {
        this.personas.splice(i, 1);
        alert('La persona fue eliminada con éxito.');
        break;
      }
    }
  }

  /* Eliminar Persona */

  /* Validaciones */

  verificarCedulaIdentidad(ci) {
    // Eliminar caracteres "." y "-" de la ci
    ci = this.eliminarCaracter(ci, '.');
    ci = this.eliminarCaracter(ci, '-');

    // Si la ci tiene 7 dígitos, agregar un "0" al comienzo
    if (ci.length === 7) {
      ci = '0' + ci;
    }

    let multiplicador = '2987634';
    let digitoVerificar = ci.charAt(ci.length - 1);
    let acumulador = 0;

    // Calcular la suma acumulada multiplicando cada dígito de la ci por el correspondiente dígito del multiplicador
    for (let i = 0; i < ci.length - 1; i++) {
      acumulador += Number(ci.charAt(i)) * Number(multiplicador.charAt(i));
    }

    // Calcular el dígito verificador
    let digitoVerificador = (10 - (acumulador % 10)) % 10;

    // Comprobar si el dígito verificador calculado coincide con el dígito verificador de la ci
    return digitoVerificador === Number(digitoVerificar);
  }

  validarCamposVaciosRegistro(usuario, constrasena, nombreCompleto) {
    // Valida si los campos no están vacíos, si todos están completos retorna true
    let campoValido = false;
    if (usuario != '' && constrasena != '' && nombreCompleto != '') {
      campoValido = true;
    }
    return campoValido;
  }

  validarFormatoContraseña(contrasena) {
    let caracteres = false;
    let mayuscula = false;
    let minuscula = false;
    let numero = false;

    if (contrasena.length >= 5) {
      caracteres = true;
      for (let i = 0; i < contrasena.length; i++) {
        let caracterActual = contrasena.charAt(i);
        let codigoCaracterActual = contrasena.charCodeAt(i);

        if (codigoCaracterActual >= 65 && codigoCaracterActual <= 90 && !mayuscula) {
          mayuscula = true;
        }
        if (codigoCaracterActual >= 97 && codigoCaracterActual <= 122 && !minuscula) {
          minuscula = true;
        }
        if (!isNaN(caracterActual) && !numero) {
          numero = true;
        }
      }
    }
    if (caracteres && mayuscula && minuscula && numero) {
      return true;
    }
  }

  validarCamposNuevoCenso(cedula, nombreCompleto, edad, ocupacion, idDepartamento) {
    let validacion = false;
    let cedulaVerificada = this.verificarCedulaIdentidad(cedula);
    let edadEsValida = this.validarEdad(edad);

    if (cedulaVerificada && nombreCompleto && edadEsValida && ocupacion && idDepartamento) {
      validacion = true;
    }
    return validacion;
  }

  validarEdad(edad) {
    let validacion = false;

    if (edad > 0 && edad < 130) {
      validacion = true;
    }
    return validacion;
  }
  /* Validaciones */

  // Crear tabla Invitado
  agregarFilaTablaEstadisticas(
    tabla,
    departamento,
    totalPersonasEstudian,
    totalPersonasNoTrabajan,
    totalPersonasDependientesIndependientes,
    porcentajeTotalPersonasCensadasDepartamento
  ) {
    tabla.innerHTML += `<tr>
      <td>${departamento}</td>
      <td>${totalPersonasEstudian}</td>
      <td>${totalPersonasNoTrabajan}</td>
      <td>${totalPersonasDependientesIndependientes}</td>
      <td>${porcentajeTotalPersonasCensadasDepartamento} %</td>
    </tr>`;
  }

  /* Login Censista */

  // Función utilizada por el login para chequear si el usuario se encuentra en el array de Censistas
  verificarLogin(usuario, contrasena) {
    let resultado = false;

    let censista = this.obtenerObjeto(this.censistas, 'usuario', usuario);

    if (censista !== null) {
      if (censista.contrasena === contrasena) {
        usuarioLogueado = censista;
        resultado = true;
      }
    }
    return resultado;
  }

  // Función utilizada por el login para ejecutar las acciones post-logueo de un censista
  procesarInicioSesionCensista(usuarioVerificado) {
    let mensaje = '';

    if (usuarioVerificado) {
      // Ocultar Alertas del Login
      this.limpiarTexto('#txtAlertaLogin');
      this.ocultarElementoString('#alertaLogin');

      // Limpiar Campos de Texto del Login
      this.limpiarInput('#txtUsuarioLogin');
      this.limpiarInput('#txtContraseñaLogin');

      // Mostrar Contenido de la barra de Navegación
      this.mostrarElementoString('#navLinkInicioCensista');
      this.mostrarElementoString('#btnCerrarSesion');

      // Ocultar Personajes
      this.ocultarElementoString('#contenedorPersonajesSelectorPerfil');

      // Ocultar Elementos 'Nuevo Censo' del Invitado
      this.ocultarElementoString('#btnEliminarDatos');
      this.ocultarElementoString('#contenedorCensistaAsignado');

      // Mostrar Elementos 'Nuevo Censo' del Censista
      this.mostrarElementoString('#checkboxConfirmarDatos');
      this.mostrarElementoString('#labelCheckboxConfirmarDatos');

      // Generamos las estadísticas de la Página Principal
      generarEstadisticasCensista();

      // Generamos la tabla de censos de la Página Principal
      generarTablaCensos();

      // Redirigimos a el Censista a la Página Principal
      this.mostrarSeccionString('paginaPrincipal');
    } else {
      // Mostrar Alerta de error de ingreso 'Usuario y/o contraseña incorrectos' del Censista
      mensaje = 'Usuario y/o contraseña incorrectos';
      this.mostrarElementoString('#alertaLogin');
      this.mostrarTexto('#txtAlertaLogin', mensaje);
    }
  }

  /* Login Censista */

  /* Registro Censista */

  procesarRegistroCensista(nombreCompleto, usuario, contrasena) {
    // Verificar que los campos no esten vacíos
    if (this.validarCamposVaciosRegistro(usuario, contrasena, nombreCompleto)) {
      // Verificar contraseña
      if (this.validarFormatoContraseña(contrasena)) {
        // Verificar que no haya un usuario ya registrado
        if (!this.buscarElemento(this.censistas, 'usuario', usuario)) {
          // Cumple los requisitos y agrega censista al array
          let nuevoCensista = new Censista(0, usuario, contrasena, nombreCompleto);

          this.agregarCensista(nuevoCensista);

          // Mensaje
          let mensaje = 'Usuario registrado correctamente';

          this.mostrarElementoString('#alertaRegistrar');
          this.mostrarTexto('#txtAlertaRegistrar', mensaje);

          // Limpiar inputs del registro
          this.limpiarInput('#txtNombre');
          this.limpiarInput('#txtContraseña');
          this.limpiarInput('#txtUsuario');

          // Limpiar errores de los <p> debajo de los inputs
          this.limpiarTexto('#txtValidacionUsuario');
          this.limpiarTexto('#txtValidacionCampos');
          this.limpiarTexto('#txtValidacionContraseña');
        } else {
          this.mostrarTexto('#txtValidacionUsuario', 'Debes elegir un nombre de usuario único');

          // Limpiar errores de los <p> debajo de los inputs y el alert
          this.limpiarTexto('#txtValidacionContraseña');
          this.limpiarTexto('#txtValidacionCampos');
          this.ocultarElementoString('#alertaRegistrar');
          this.limpiarTexto('#txtAlertaRegistrar');
        }
      } else {
        this.mostrarTexto('#txtValidacionContraseña', 'Debe contener al menos: 5 caracteres, 1 mayuscula , 1 minuscula , 1 numero');

        // Limpiar errores de los <p> debajo de los inputs y el alert
        this.limpiarTexto('#txtValidacionUsuario');
        this.limpiarTexto('#txtValidacionCampos');
        this.ocultarElementoString('#alertaRegistrar');
        this.limpiarTexto('#txtAlertaRegistrar');
      }
    } else {
      this.mostrarTexto('#txtValidacionCampos', 'Debes completar todos los campos');

      // Limpiar errores de los <p> debajo de los inputs y el alert
      this.limpiarTexto('#txtValidacionUsuario');
      this.limpiarTexto('#txtValidacionContraseña');
      this.ocultarElementoString('#alertaRegistrar');
      this.limpiarTexto('#txtAlertaRegistrar');
    }
  }

  /* Registro Censista */

  /* Cargar datos persona por cedula */
  cargarCensoInvitado(cedula, nombreCompleto, edad, ocupacion, idDepartamento, ciVerificada) {
    if (ciVerificada) {
      this.habilitarElementoString('#btnNuevoCenso');
      let persona = this.obtenerPersonaPorCedula(cedula);

      if (persona !== null) {
        if (persona.verificado === false) {
          nombreCompleto.value = persona.nombreCompleto;
          edad.value = persona.edad;
          ocupacion.value = persona.ocupacion;
          idDepartamento.value = persona.idDepartamento;

          let censista = this.buscarCensistaPorId(persona.idCensista);
          this.mostrarElementoString('#contenedorCensistaAsignado');
          document.querySelector('#txtCensistaAsignado').innerHTML = `${censista.nombreCompleto}`;

          alert('Cedula valida');
          this.habilitarElementoString('#btnEliminarDatos');
        } else {
          this.deshabilitarElementoString('#btnNuevoCenso');
          alert('Usuario ya censado!');
        }
      } else {
        alert('No existe una Persona con esa cédula.');
      }
    } else {
      this.deshabilitarElementoString('#btnNuevoCenso');
      this.deshabilitarElementoString('#btnEliminarDatos');
      alert('La cédula ingresada no es correcta.');
    }
  }
  /* Validar y precargar datos persona por cedula */

  /* Estadísticas Censista */

  generarEstadisticas(
    txtTotalPersonasRegistradas,
    txtTotalPersonasCensadas,
    txtTotalPersonasPendientes,
    txtTotalPersonasMenores,
    txtTotalPersonasMayores,
    departamento
  ) {
    // Ver el total de personas registradas hasta el momento
    let totalPersonasRegistradas = this.obtenerTotalPersonasRegistradas();
    txtTotalPersonasRegistradas.innerHTML = totalPersonasRegistradas;

    // Ver el total de personas censadas hasta el momento
    let totalPersonasCensadas = this.obtenerTotalPersonasCensadas();
    txtTotalPersonasCensadas.innerHTML = totalPersonasCensadas;
    // Ver el porcentaje de personas pendientes de validar sus datos respecto al total de personas.
    let porcentajePersonasPendientes = this.obtenerPorcentajePersonasPendientes(totalPersonasRegistradas);

    txtTotalPersonasPendientes.innerHTML = `<span class="resaltarEstadisticasPaginaPrincipal">${porcentajePersonasPendientes}%</span> de ${totalPersonasRegistradas}`;

    // Ver la cantidad de personas censadas para cada departamento
    // Seleccionar un departamento de un combo desplegable y mostrar el porcentaje de personas censadas menores de edad y el porcentaje de mayores de edad (la suma deberá totalizar 100) para ese departamento.

    let txtTotalPersonasPorDepartamento = this.obtenerTotalPersonasCensadasPorDepartamento(departamento);

    let txtTotalPersonasMenoresPorDepartamento = this.obtenerCantidadPersonasMenoresCensadasPorDepartamento(departamento);
    let txtTotalPersonasMayoresPorDepartamento = this.obtenerCantidadPersonasMayoresCensadasPorDepartamento(departamento);

    let porcentajeTotalPersonasMenoresPorDepartamento = 0;
    let porcentajeTotalPersonasMayoresPorDepartamento = 0;

    if (txtTotalPersonasPorDepartamento !== 0) {
      porcentajeTotalPersonasMenoresPorDepartamento = (txtTotalPersonasMenoresPorDepartamento / txtTotalPersonasPorDepartamento) * 100;
      porcentajeTotalPersonasMayoresPorDepartamento = (txtTotalPersonasMayoresPorDepartamento / txtTotalPersonasPorDepartamento) * 100;
    }

    txtTotalPersonasMenores.innerHTML = `<span class="resaltarEstadisticasPaginaPrincipal">${porcentajeTotalPersonasMenoresPorDepartamento.toFixed(
      0
    )}%</span> de ${txtTotalPersonasPorDepartamento}`;

    txtTotalPersonasMayores.innerHTML = `<span class="resaltarEstadisticasPaginaPrincipal">${porcentajeTotalPersonasMayoresPorDepartamento.toFixed(
      0
    )}%</span> de ${txtTotalPersonasPorDepartamento}`;
  }

  formatearDato(texto) {
    if (texto === '') {
      return '-';
    }
    return texto;
  }

  convertirTextoOcupacion(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      if (i === 0) {
        letra = letra.toUpperCase();
      }
      if (letra === '-') {
        letra = ' ';
      }
      resultado = resultado + letra;
    }

    return resultado;
  }

  /* Estadísticas Censista */

  /* Cálculo & obtención de datos para Estadísticas Censista */

  // Total de Personas registradas
  obtenerTotalPersonasRegistradas() {
    return this.personas.length;
  }

  // Total de Personas ya censadas
  obtenerTotalPersonasCensadas() {
    let totalPersonasCensadas = 0;

    let personasCensadas = this.obtenerPersonasCensadas(this.personas);

    for (let i = 0; i < personasCensadas.length; i++) {
      let personaCensada = personasCensadas[i];
      if (personaCensada) {
        totalPersonasCensadas++;
      }
    }
    return totalPersonasCensadas;
  }

  // Total de Personas pendientes de censar
  obtenerPorcentajePersonasPendientes(totalPersonasRegistradas) {
    let totalPersonasPendientes = 0;

    for (let i = 0; i < this.personas.length; i++) {
      let personaCensada = this.personas[i];
      if (!personaCensada.verificado) {
        totalPersonasPendientes++;
      }
    }

    let porcentajePersonasPendientes = (totalPersonasPendientes / totalPersonasRegistradas) * 100;

    return porcentajePersonasPendientes.toFixed(0);
  }

  // Personas por departamento
  obtenerCantidadPersonasPorDepartamento(departamento) {
    let totalPersonasPorDepartamento = 0;

    for (let i = 0; i < this.personas.length; i++) {
      let personaDepartamento = this.personas[i].idDepartamento;
      if (personaDepartamento === departamento) {
        totalPersonasPorDepartamento++;
      }
    }
    return totalPersonasPorDepartamento;
  }
  // Total de Menores por x Departamento
  obtenerCantidadPersonasMenoresCensadasPorDepartamento(departamento) {
    let totalPersonasMenoresPorDepartamento = 0;

    let personasCensadas = this.obtenerPersonasCensadas(this.personas);

    for (let i = 0; i < personasCensadas.length; i++) {
      let personaDepartamento = personasCensadas[i].idDepartamento;
      let personaEdad = personasCensadas[i].edad;
      if (personaDepartamento === departamento && personaEdad < 18) {
        totalPersonasMenoresPorDepartamento++;
      }
    }
    return totalPersonasMenoresPorDepartamento;
  }

  // Total de Mayores por x Departamento
  obtenerCantidadPersonasMayoresCensadasPorDepartamento(departamento) {
    let totalPersonasMayoresPorDepartamento = 0;

    let personasCensadas = this.obtenerPersonasCensadas(this.personas);

    for (let i = 0; i < personasCensadas.length; i++) {
      let personaDepartamento = personasCensadas[i].idDepartamento;
      let personaEdad = personasCensadas[i].edad;
      if (personaDepartamento === departamento && personaEdad > 18) {
        totalPersonasMayoresPorDepartamento++;
      }
    }
    return totalPersonasMayoresPorDepartamento;
  }
  /* Cálculo & obtención de datos para Estadísticas Censista */
}
