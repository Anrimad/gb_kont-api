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


// spuce modal

let htmlPage = document.querySelector('.html-page');
let sourceBtn = document.querySelector('.source__button');
let sourceModal = document.querySelector('.source-modal');
let sourceModalBtn = document.querySelector('.source-modal__button');

sourceBtn.onclick = function () {
  sourceModal.classList.add('source-modal--active');
  htmlPage.classList.add('source-modal--acttive')
};
sourceModalBtn.onclick = function() {
  sourceModal.classList.remove('source-modal--active');
  htmlPage.classList.remove('source-modal--acttive')
}

// 

// slider

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = $('.review__slider');
const track = $('.review__slider-list');
const item = $('.review-content');
const btnPrev = $('.slider-control__button--left'); 
const btnNext = $('.slider-control__button--right');
const itemsCount = item.length;
const itemWidth = item.width();
const movePosition = slidesToScroll * itemWidth;

item.each(function (index, item){
  $(item).css({
    minWidth: itemWidth
  })
})

btnNext.click(function(){
  position -= movePosition;
  setPosition();
  checkBtns();
});

btnPrev.click(function(){
  position += movePosition;
  setPosition();
  checkBtns();
});

const setPosition = () => { 
  track.css({
    transform: `translateX(${position}px)`
  });
}

const checkBtns = () => {
  btnPrev.prop('disabled', position === itemWidth);
  // console.log(position);
  btnNext.prop(
    'disabled',
    position === -itemWidth
  );

  checkBtns();
}

