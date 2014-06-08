/* Open and close main menu */

$("#hamburger").click(function() {
  $("#menu-overlay").fadeIn("fast");
});

$(".close-main-menu").click(function() {
  $("#menu-overlay").fadeOut("fast");
});
