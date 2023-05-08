function validarEmail(email){


}
function exito(tipo){
    // se deja el tipo para agregar otros tipos de mensajes de exito como x ej una venta
    
        alert("Usuario registrado exitosamente")
  
    
}

function validatePassword() {
    var password = document.getElementById("pass"),
      confirm_password = document.getElementById("confirm_password");
    if (password.value != confirm_password.value) {
  
      document.getElementById("confirm_password").value = "";
      alert("Las contraseñas deben ser iguales");
    } else {
      pass
    }
  }
  function allLetter()
  {
    console.log("Hola")
   var letters = /^[A-Za-z]+$/;
   var inputtxt=document.getElementById("name").value
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     alert("Nombre puede contener solo letras");
     return false;
     }
  }

  function validatePhoneNumber() 
  {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var text=document.getElementById("Numero").value.parseint()
    if(text.match(re))
    {
        return true;
    }
    else {
        alert("solo numeros")
    }
    return re.test(text);
  }