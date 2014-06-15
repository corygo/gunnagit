/* Open and close main menu */

$(document).ready(function() {

  $("#hamburger").click(function() {
    $("#menu-overlay").fadeIn("fast");
  });

  $(".close-main-menu").click(function() {
    $("#menu-overlay").fadeOut("fast");
  });

  $(".search-focus").click(function() {
    $(this).focus();
  });

});
