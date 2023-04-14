/* 
  construir un metodo utilizando TDD
  que permita calcular la accion a seguir dependiendo de los valores de las siguientes variables:

  Variable              tipo          valores posibles
  esObligatorio         String        si, no 
  esDocente             boolean       True, False 
  esExterno             boolean       True, False 
  tipoPersonaDestino    String        Docente, Externo
  estadoRegistro        String        porConfirmar, Vigente

  La salida es una cadena que puede tener los valores:
  -actualizar
  -matricular
  -registrar

  pruebas:
  Si es obligatorio y es docente: actualizar
  Si no es obligatorio y es docente: matricular
  Si es externo y estado registro por confirmar: actualizar
  Si es externo y destinatario externo: registrar
  Si es externo y estado registro vigente: matricular

*/

function obtenerAccion(
  esObligatorio,
  esDocente,
  esExterno,
  tipoPersonaDestino,
  estadoRegistro
) {
  if (esObligatorio == "si" && esDocente == true) {
    return "actualizar";
  }
  if (esObligatorio == "no" && esDocente == true) {
    return "matricular";
  }
  if (esExterno == true && estadoRegistro == "porConfirmar") {
    return "actualizar";
  }
  if (esExterno == true && tipoPersonaDestino == "Externo") {
    return "registrar";
  }
  if (esExterno == true && estadoRegistro == "Vigente") {
    return "matricular";
  }
}
