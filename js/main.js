$('.about-list__link').on('click', function (e) {
  e.preventDefault();
  $('.about-list__link').removeClass('active');
  $(this).addClass('active');
})

$('#avtory').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(0)'
  });
})

$('#situation').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-400px)'
  });
})