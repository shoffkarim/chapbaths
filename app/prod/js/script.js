

setTimeout(() => {
    document.querySelector('body').classList.remove('opening');
}, 50);
setTimeout(() => {
  let lazyPainterBlock = document.querySelector('.lazypainter');
  let script = document.createElement('script');
  script.setAttribute("src", "js/lazylinepainter.js");
  lazyPainterBlock.append(script);
}, 1000);
let BathSwiper = new Swiper('.swiper-container', { //инициализация свайпера
  loop: true,
  speed: 600,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let banner = new Swiper('.banners-container', { //инициализация свайпера
  loop: true,
  speed: 600,
  navigation: {
    nextEl: '.banner-btn.next',
    prevEl: '.banner-btn.prev',
  },
  autoplay: {
    delay: 3000,
  },
});
let activity = new Swiper('.activity-slider', { //инициализация свайпера
  loop: true,
  speed: 600,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.activity-slider__btn.next',
    prevEl: '.activity-slider__btn.prev',
  },
  autoplay: {
    delay: 3000,
  },
});
let photoGallery = new Swiper('.photo-gallery', { //инициализация свайпера
  loop: true,
  speed: 600,
  slidesPerView: 7,
  autoplay: {
    delay: 3000,
  },
});
BathSwiper.on('slideChange', function () {
  setTimeout(() => {
    let activeSlide = document.querySelector('.swiper-slide-active');
    let prevSlide = document.querySelector('.swiper-slide-prev');
    let nextSlide = document.querySelector('.swiper-slide-next');
    activeSlide.classList.add('js-slider-swipe');
    prevSlide.classList.remove('js-slider-swipe');
    nextSlide.classList.remove('js-slider-swipe');
  }, 100);
  setTimeout(() => {
    let btnNext = document.querySelector('.bathslider .swiper-button-next span'); //поставить в конпки название бань
    let btnPrev = document.querySelector('.bathslider .swiper-button-prev span');
    let nextSlide = document.querySelector('.bathslider .swiper-slide-next');
    let nextPrev = document.querySelector('.bathslider .swiper-slide-prev');
    let linkAbout = document.querySelector('.slider-links-list__item.more-info a');
    btnNext.innerHTML = nextSlide.getAttribute('data-name');
    btnPrev.innerHTML = nextPrev.getAttribute('data-name');
    let active = document.querySelector('.swiper-slide-active a');
    linkAbout.setAttribute('href', active.getAttribute('href')); //смена href в ссылке подробнее о бани
  }, 500);
});
BathSwiper.on('transitionStart', function () {
  let btnNext = document.querySelector('.bathslider .swiper-button-next span');
  let btnPrev = document.querySelector('.bathslider .swiper-button-prev span');
  btnNext.classList.add('slider_btn-anim');
  btnPrev.classList.add('slider_btn-anim');
});
BathSwiper.on('transitionEnd', function () {
  let btnNext = document.querySelector('.bathslider .swiper-button-next span');
  let btnPrev = document.querySelector('.bathslider .swiper-button-prev span');
  btnNext.classList.remove('slider_btn-anim');
  btnPrev.classList.remove('slider_btn-anim');
});
document.addEventListener("DOMContentLoaded", function () {

  if(document.querySelector('.bathslider')){ //вывод списка названий бань
    let sliderList = document.querySelectorAll('.slider-baths .slide');
    let dataArray = [];
    let blockList = document.querySelector(".slider-list");
    sliderList.forEach(function (i) {
      dataArray.push(i.getAttribute('data-name'))
    });
    uniqSliderList = uniqueArray(dataArray); //так как свайпер добавляет два одинаковых слайда в начало и конец, то приходится перебрать массив
    lastEl = uniqSliderList[0]; //первый элемент
    uniqSliderList.shift(); //удалить
    uniqSliderList.push(lastEl);//и поставить в конец
    uniqSliderList.forEach(function(i){
      let el = document.createElement('li');
      el.className = "slider-list__item";
      el.innerText = i
      blockList.append(el);
    });
    let btnNext = document.querySelector('.bathslider .swiper-button-next span'); //поставить в конпки название бань
    let btnPrev = document.querySelector('.bathslider .swiper-button-prev span');
    let nextSlide = document.querySelector('.bathslider .swiper-slide-next');
    let nextPrev = document.querySelector('.bathslider .swiper-slide-prev');
    let linkAbout = document.querySelector('.slider-links-list__item.more-info a');
    btnNext.innerHTML = nextSlide.getAttribute('data-name');
    btnPrev.innerHTML = nextPrev.getAttribute('data-name');
    setTimeout(() => {
      let active = document.querySelector('.swiper-slide-active a');
      linkAbout.setAttribute('href', active.getAttribute('href')); //смена href в ссылке подробнее о бани
    }, 500);
    let listOfnames = document.querySelectorAll('.slider-list__item');//скролл к слайду из меню все бани
    listOfnames.forEach(function(i){
      i.addEventListener('click', function(){
        let nameSlide = this.innerText;
        let slide = document.querySelector(`[data-name="${nameSlide}"]`);
        let number = slide.getAttribute('data-swiper-slide-index');
        BathSwiper.slideTo(number, 600, true);
      })
    })
  }
  if(document.body.clientWidth < 1050) {
    let nav = document.querySelector('.nav');
    nav.classList.add('js-small-nav');
  }
});
window.addEventListener('scroll', function () { //изменение размера бокового меню
  let nav = document.querySelector('.nav');
  if(document.body.clientWidth > 1050){
    if (pageYOffset > 400) {
      nav.classList.add('js-small-nav');
    } else {
      nav.classList.remove('js-small-nav');
    }
  } else {
    nav.classList.add('js-small-nav');
  }
  if(pageYOffset > 230){
    document.querySelector('.slider-baths').classList.add('js-slider-anim');
  } else {
    document.querySelector('.slider-baths').classList.remove('js-slider-anim');
  }
})
function uniqueArray(arr) { //функция удаления одинаковых элементов из массива
  let res = []
  for (let str of arr) {
    if(!res.includes(str)){
      res.push(str);
    }
  }
  return res
}

document.querySelector('.burger-wrapper').addEventListener('click', function () { //открытие главного меню
  let btn = document.querySelector('.burger-wrapper');
  let nav = document.querySelector('.nav');
  let menu = document.querySelector('.js-menu');
  let body = document.querySelector('body');
  if(btn.classList.contains('js-burger')){
    btn.classList.add('js-burger-close');
    setTimeout(function() {
      btn.classList.remove('js-burger', 'js-burger-close')
    }, 1000)
  }

  if(document.body.clientWidth > 1050) {
    btn.classList.toggle('js-burger')
    menu.classList.toggle('js-menu-open');
    body.classList.toggle('js-body-overflow');
    nav.classList.remove('js-small-nav');
  } else {
    btn.classList.toggle('js-burger')
    menu.classList.toggle('js-menu-open');
    body.classList.toggle('js-body-overflow');
  }
  if (pageYOffset > 400 && !menu.classList.contains('js-menu-open')) {
    nav.classList.add('js-small-nav');
  } else {
    nav.classList.remove('js-small-nav');
  }
})

document.querySelector('.cookie__btn.agree').addEventListener('click', function(){
  let cookie = document.querySelector('.cookie');
  cookie.classList.add('cookie-close');
  setTimeout(() => {
    cookie.style.display = "none";
  }, 500);
})
document.querySelector('.cookie__btn.disagree__open').addEventListener('click', function(){
  let cookiepopup = document.querySelector('.disagree-cookie');
  cookiepopup.classList.add('disagree-open-popup');
})
document.querySelector('.cookie__btn.disagree__close').addEventListener('click', function(){
  let cookiepopup = document.querySelector('.disagree-cookie');
  cookiepopup.classList.remove('disagree-open-popup');
})
