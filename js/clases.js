/* Clase Censista */
class Censista {
  constructor(id, usuario, contrasena, nombreCompleto) {
    this.id = id;
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.nombreCompleto = nombreCompleto;
  }
}

/* Clase Persona */
class Persona {
  constructor(id, cedula, nombreCompleto, edad, ocupacion, idDepartamento, verificado, idCensista) {
    this.id = id;
    this.cedula = cedula;
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.idDepartamento = idDepartamento;
    this.verificado = verificado;
    this.idCensista = idCensista;
  }
}

/* Clase Departamento */
class Departamento {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}
