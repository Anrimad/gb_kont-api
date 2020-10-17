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


$('.data-content__button').on('click', function () {
  $('.data-content__desc').hide();
  $('.table-data__content').css({
    'backgroundColor': 'inherit'
  });

  let dataContent = $(this).closest('.table-data__content');
  
    $(dataContent).find('.data-content__desc').show('325');
    $(dataContent).css({
      'background-color': '#ffffff'
    })
})