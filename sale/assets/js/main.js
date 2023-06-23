let akk = document.querySelectorAll('.akkord');

akk.forEach((item) => {
    let itemBody = item.querySelector('.container-showing')
    itemBody.style.height = '0px'
    item.querySelector('.container-date').onclick = function() {
        let akkordBody = this.closest('.akkord').querySelector('.container-showing')
        akkordBody.classList.toggle('container-showing-open')
        if( akkordBody.classList.contains('container-showing-open') ) {
            itemBody.style.height = '190px';
        }else {
            itemBody.style.height = '0px';
        }
    }
})



const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}