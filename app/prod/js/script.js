let BathSwiper = new Swiper('.swiper-container', { //инициализация свайпера
  loop: true,
  width: 1290,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 40,
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
  spaceBetween: 38,
  navigation: {
    nextEl: '.activity-slider__btn.next',
    prevEl: '.activity-slider__btn.prev',
  },
  autoplay: {
    delay: 3000,
  },
});
BathSwiper.on('slideChange', function () {
  let btnNext = document.querySelector('.bathslider .swiper-button-next'); //поставить в конпки название бань
  let btnPrev = document.querySelector('.bathslider .swiper-button-prev');
  let nextSlide = document.querySelector('.bathslider .swiper-slide-next');
  let nextPrev = document.querySelector('.bathslider .swiper-slide-prev');
  let linkAbout = document.querySelector('.slider-links-list__item.more-info a');
  btnNext.innerHTML = nextSlide.getAttribute('data-name');
  btnPrev.innerHTML = nextPrev.getAttribute('data-name');
  setTimeout(() => {
    let active = document.querySelector('.swiper-slide-active');
    linkAbout.setAttribute('href', active.getAttribute('href')); //смена href в ссылке подробнее о бани
  }, 500);


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
    let btnNext = document.querySelector('.bathslider .swiper-button-next'); //поставить в конпки название бань
    let btnPrev = document.querySelector('.bathslider .swiper-button-prev');
    let nextSlide = document.querySelector('.bathslider .swiper-slide-next');
    let nextPrev = document.querySelector('.bathslider .swiper-slide-prev');
    let linkAbout = document.querySelector('.slider-links-list__item.more-info a');
    btnNext.innerHTML = nextSlide.getAttribute('data-name');
    btnPrev.innerHTML = nextPrev.getAttribute('data-name');
    setTimeout(() => {
      let active = document.querySelector('.swiper-slide-active');
      linkAbout.setAttribute('href', active.getAttribute('href')); //смена href в ссылке подробнее о бани
    }, 500);
  }
});
window.addEventListener('scroll', function () { //изменение размера бокового меню
  let nav = document.querySelector('.nav');
  if (pageYOffset > 400) {
    nav.classList.add('js-small-nav');
  } else {
    nav.classList.remove('js-small-nav');
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
  btn.classList.toggle('js-burger')
  menu.classList.toggle('js-menu-open');
  body.classList.toggle('js-body-overflow');
  nav.classList.remove('js-small-nav');

})

document.querySelector('.cookie__btn.agree').addEventListener('click', function(){
  let cookie = document.querySelector('.cookie');
  cookie.style.display = "none";
})
