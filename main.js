  var email = document.getElementById("exampleFormControlInput1");
  var telefono = document.getElementById("exampleFormControlInput2");
  var comentario = document.getElementById("exampleFormControlTextarea1");

function validarFormulario() {

  if (email.value === "" || telefono.value === "" || comentario.value === "") {
    alert("Todos los campos deben ser completados");
    return false;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("El correo electrónico no es válido");
    return false;
  }

  // Si todos los campos son válidos, el formulario se envía
  alert("Enviando formulario...");
  return true;
}