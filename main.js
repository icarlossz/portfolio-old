$(document).ready(function(){
  $("#menu-ham").on('click', function () {
    $('#menu').addClass('hide');
    $('#menu').toggleClass('active');
    $('#menu-bars').toggleClass('fa-bars fa-times');
  })
});