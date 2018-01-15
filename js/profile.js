$(document).ready(function () {

  $('#textarea-1').focus();
  /* Publicar post - Al presionar #btn-post se publica el comentario*/
  var ShowPublic = function (e) {
    $('#btn-post').click(function () {
      event.preventDefault();
      var post = $('#textarea-1').val();
      $('#textarea-1').val('');
      $('#publication').first().append('<div class="card">' + '<div class ="avatar-container-2">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p> Maya </p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '</p>' + '<br>' + '<span class="grey-text">Publicado a las ' + getTime() + 'hrs.' + '</span>' + '<br>' + '<div id="add-comment" class="col s12 m12">' + '<input id="input-comment" placeholder="Add a comment.." type="text">' + '</div>' + '</div>' + '</div>');
      $('#textarea-1').val('');
      $('#textarea-1').focus();
    });
  };

  ShowPublic();

  // Función para agregar hora
  function getTime() {
    var currentDate = new Date();
    var hh = currentDate.getHours();
    var mm = currentDate.getMinutes();
    return hh + ':' + ((mm < 10 ? '0' : '') + mm);
  }

  // funcion para postear imagen
  /*  $('#subir-fotos').change(function (event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      $('.contenedor-img').append('<img class = "col s4 height= "4vh" responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);
  }); */

});