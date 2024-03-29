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
const assert = require("assert");

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

// pruebas de junit test Para obtenerAccion

// const obtenerAccion = require("./obteneraccion");

describe("obtenerAccion", function () {
  // Si es obligatorio y es docente: actualizar
  it("Deberia devolver actualizar si es obligatorio y es docente", function () {
    assert.equal(obtenerAccion("si", true, false, "", ""), "actualizar");
  });
  // Si no es obligatorio y es docente: matricular
  it("Deberia devolver matricular si no es obligatorio y es docente", function () {
    assert.equal(obtenerAccion("no", true, false, "", ""), "matricular");
  });
  // Si es externo y estado registro por confirmar: actualizar
  it("Deberia devolver actualizar si es externo y estado registro por confirmar", function () {
    assert.equal(
      obtenerAccion("", true, true, "", "porConfirmar"),
      "actualizar"
    );
  });
  // Si es externo y destinatario externo: registrar
  it("Deberia devolver registrar si es externo y destinatario externo", function () {
    assert.equal(obtenerAccion("", true, true, "Externo", ""), "registrar");
  });
  // Si es externo y estado registro vigente: matricular
  it("Deberia devolver matricular si es externo y estado registro vigente", function () {
    assert.equal(obtenerAccion("", true, true, "", "Vigente"), "matricular");
  });
});
