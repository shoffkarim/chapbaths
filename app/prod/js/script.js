let swiper = new Swiper('.swiper-container', { //инициализация свайпера
  loop: true,
  width: 1290,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', function () {
  let btnNext = document.querySelector('.bathslider .swiper-button-next'); //поставить в конпки название бань
  let btnPrev = document.querySelector('.bathslider .swiper-button-prev');
  let nextSlide = document.querySelector('.bathslider .swiper-slide-next');
  let nextPrev = document.querySelector('.bathslider .swiper-slide-prev');
  btnNext.innerHTML = nextSlide.getAttribute('data-name');
  btnPrev.innerHTML = nextPrev.getAttribute('data-name');
});
document.addEventListener("DOMContentLoaded", function () {
  if(document.querySelector('.bathslider')){ //вывод списка названий бань
    let sliderList = document.querySelectorAll(".slider-baths .slide");
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
    btnNext.innerHTML = nextSlide.getAttribute('data-name');
    btnPrev.innerHTML = nextPrev.getAttribute('data-name');
  }
});

function uniqueArray(arr) { //функция удаления одинаковых элементов из массива
  let res = []
  for (let str of arr) {
    if(!res.includes(str)){
      res.push(str);
    }
  }
  return res
}
