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


// feature-modal


$().fancybox({
  selector : '[data-fancybox="feature_gallery"]',
  loop     : true,
  slideClass: 'feature-modal__item-flex'
});


// source modal

let htmlPage = document.querySelector('.html-page');
let sourceBtn = document.querySelector('.source__button');
let sourceModal = document.querySelector('.source-modal');
let sourceModalBtn = document.querySelector('.source-modal__button');
let sourceModalLnk = document.querySelector('.source-modal__link');

sourceBtn.onclick = function () {
  sourceModal.classList.add('source-modal--active');
  htmlPage.classList.add('source-modal--acttive')
};
sourceModalBtn.onclick = function() {
  sourceModal.classList.remove('source-modal--active');
  htmlPage.classList.remove('source-modal--acttive')
}
sourceModalLnk.onclick = function() {
  sourceModal.classList.remove('source-modal--active');
  htmlPage.classList.remove('source-modal--acttive')
}

// 

// slider

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.review__slider');
const track = document.querySelector('.review__slider-list');
const btnPrev = document.querySelector('.slider-control__button--left'); 
const btnNext = document.querySelector('.slider-control__button--right');
const items = document.querySelectorAll('.review-content');
const itemsCount = items.length;
const itemWidth = 768;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`
})
   
btnNext.addEventListener('click', () => {
  
  position -= movePosition;
  setPosition();
  checkBtns();
})

btnPrev.addEventListener('click', () => {

  position += movePosition;
  setPosition();
  checkBtns();
})

const setPosition = () => { 
  track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
  btnPrev.disabled = position === itemWidth;
  btnNext.disabled = position === -itemWidth;
}

checkBtns();

// 


$().fancybox({
  selector : '.feature-modal__list',
  thumbs   : {
    autoStart : false
  }
});

