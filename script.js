const hamb = document.querySelector(".header__burger-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector('.popup__button')


hamb.addEventListener("click", openPopup);
popupCloseButton.addEventListener('click', closePopup)

function openPopup(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.add("open");
    hamb.classList.add('close')
   
  }

  function closePopup(e) {
    e.preventDefault();
    popup.classList.remove('open')
    hamb.classList.remove('close')
  }