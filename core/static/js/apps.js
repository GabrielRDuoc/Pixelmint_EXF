
$(document).ready(function() {
    setInterval(function() {
      $.get("http://worldtimeapi.org/api/timezone/europe/london", function(data) {
        var londonTime = data.datetime.slice(11, 16); // Obtiene solo la hora y minutos
        var formattedTime = moment(londonTime, "HH:mm").format("h:mm A"); // Da formato a la hora
        $("#hora-londres").text("Londres: " + formattedTime);
      });
    }, 1000); 
  });

  
$(document).ready(function() {
    setInterval(function() {
      $.get("http://worldtimeapi.org/api/timezone/America/Santiago", function(data) {
        var londonTime = data.datetime.slice(11, 16); // Obtiene solo la hora y minutos
        var formattedTime = moment(londonTime, "HH:mm").format("h:mm A"); // Da formato a la hora
        $("#hora-chile").text("Chile: " + formattedTime);
      });
    }, 1000); 
  });
  
$(document).ready(function() {
setInterval(function() {
    $.get("http://worldtimeapi.org/api/timezone/Asia/Dubai", function(data) {
    var londonTime = data.datetime.slice(11, 16); // Obtiene solo la hora y minutos
    var formattedTime = moment(londonTime, "HH:mm").format("h:mm A"); // Da formato a la hora
    $("#hora-dubai").text("Dubai: " + formattedTime);
    });
}, 1000); // Actualiza la hora cada 1 segundo
});
$(document).ready(function() {
  // Declara la variable today dentro de la función $(document).ready()
  var today = new Date().toLocaleDateString('en-CA').split('-').reverse().join('-');

  // Consulta el valor de la UF para la fecha actual
  $.get("https://mindicador.cl/api/uf/" + today, function(data) {
    // Obtiene el valor de la UF y lo formatea con separador de miles y sin decimales
    var ufValue = Math.round(data.serie[0].valor).toLocaleString();
    $("#uf-value").text("$" + ufValue);
  });
});

 
$(document).ready(function() {
  // Declara la variable today dentro de la función $(document).ready()
  var today = new Date().toLocaleDateString('en-CA').split('-').reverse().join('-');

  // Consulta el valor de la UF para la fecha actual
  $.get("https://mindicador.cl/api/utm/" + today, function(data) {
    // Obtiene el valor de la UF y lo formatea con separador de miles y sin decimales
    var utmValue = Math.round(data.serie[0].valor).toLocaleString();
    $("#utm-value").text("$" + utmValue);
  });
});

function getUsersCount() {
  $.ajax({
      url: '/users/count/',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          $('#user-count').html('Cantidad de usuarios registrados: ' + data.count);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error('Ha ocurrido un error al obtener la cantidad de usuarios');
      }
  });
}

setInterval(getUsersCount, 5000);


setInterval(getUsersCount, 5000);

function updateLastLogin(userId) {
  $.ajax({
    url: '/api/user/' + userId + '/last-login/',
    type: 'GET',
    dataType: 'json',
    beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function(data) {
      $('#last-login').html('Última conexión: ' + data.last_login);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('Ha ocurrido un error al obtener la última conexión del usuario');
    }
  });
}