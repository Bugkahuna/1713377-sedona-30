const popup= document.querySelector('.search-button');
const modal = document.querySelector('.modal-window');
popup.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.toggle('modal-show');
});

modal.classList.remove('modal-show');

