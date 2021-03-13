let popup= document.querySelector('.search-button');
let modal = document.querySelector('.modal-window');
popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});
