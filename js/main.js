/* Open and close main menu */

$(document).ready(function() {

  $("#hamburger").click(function() {
    $("#menu-overlay").fadeIn("fast");
  });

  $(".close-main-menu").click(function() {
    $("#menu-overlay").fadeOut("fast");
  });

  $("#search-placeholder").click(function() {
    $(this).hide();
    $(".search-focus").show();
    $(".search-focus").focus();
  });

});
