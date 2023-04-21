$(document).ready(function () {
    $('.mobile-bar').click(function (e) { 
      e.preventDefault();
      $('.nav-container ul').toggleClass('open');
    });
  });