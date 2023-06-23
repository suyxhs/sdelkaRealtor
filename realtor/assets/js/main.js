// MAP SCRIPT
let center = [59.94813793610263,30.378587766700726];

ymaps.ready(init);

function init() {
  let map = new ymaps.Map("map_id", {
    center: center,
    zoom: 13
  });

  let myPlacemark = new ymaps.Placemark(center, { 
    iconContent: 'Головной офис', //текст на иконке
    balloonContent: 'Красивый город' /*текст появляющийся после нажатия*/
}, {
    preset: 'islands#darkBlueStretchyIcon' //тип иконки
});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  //map.geoObjects.add(placemark);
  map.geoObjects.add(myPlacemark);
}

// BURGER SCRIPT

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


// rating script
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = rating.querySelector(".rating__value");
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}

// accordion script
const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".box");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}


