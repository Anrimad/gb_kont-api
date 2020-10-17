$('.about-list__link').on('click', function (e) {
  e.preventDefault();

  $('.about-list__item').removeClass('active');
  $(this).closest('.about-list__item').addClass('active');
})

$('#risk').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-40px)'
  });
})

$('#ifns').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-40px)'
  });
})

$('#template').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(35px)'
  });
})

$('#tax').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-58px)'
  });
})

$('#rating').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(20px)'
  });
})

$('#resources').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-250px)'
  });
})

$('#argument').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-290px)'
  });
})

$('#blocked').on('click', function () {
  $('.about__content-image').css({
      'transform': 'translateY(-545px)'
  });
})


// about

$('.data-content__button').on('click', function () {
  $('.data-content__button').css({
    'transform' : 'rotate(0)'
  })
  $('.data-content__desc').hide();
  $('.table-data__content').css({
    'backgroundColor': 'inherit'
  });

  let dataContent = $(this).closest('.table-data__content');
  let dataContentDesc = dataContent.find('.data-content__desc')
    dataContentDesc.show('325');
    $(this).css({
      'transform' : 'rotate(180deg)'
    })
    $(dataContent).css({
      'background-color': '#ffffff'
    })
})