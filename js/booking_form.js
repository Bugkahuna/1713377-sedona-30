const popup= document.querySelector('.search-button');
const modal = document.querySelector('.modal-window');
popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-show");
});

const close_popup = document.querySelector(".find-button");
close_popup.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
