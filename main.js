function validarFormulario() {
  var email = document.getElementById("exampleFormControlInput1").value;
  var telefono = document.getElementById("exampleFormControlInput2").value;
  var comentario = document.getElementById("exampleFormControlTextarea1").value;

  if (email === "" || telefono === "" || comentario === "") {
    alert("Todos los campos deben ser completados");
    return false;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("El correo electrónico no es válido");
    return false;
  }

  // Si todos los campos son válidos, el formulario se envía
  alert("Enviando formulario...");
  return true;
}