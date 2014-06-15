/* Open and close main menu */

$(document).ready(function() {

  $("#hamburger").click(function() {
    $("#menu-overlay").fadeIn("fast");
  });

  $(".close-main-menu").click(function() {
    $("#menu-overlay").fadeOut("fast");
  });

});

$(function() {

  $('.search-focus').data('holder',$('#myId').attr('placeholder'));

  $('.search-focus').focusin(function() {
      $(this).attr('placeholder','');
  });

  $('.search-focus').focusout(function() {
      $(this).attr('placeholder',$(this).data('holder'));
  });

});
