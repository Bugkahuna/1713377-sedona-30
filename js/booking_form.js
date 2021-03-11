let popup= document.querySelector('.search-button');
let modal = document.querySelector('.modal-window');
popup.onclick=function(){
  modal.classList.toggle('modal-close');
  modal.classList.toggle('modal-show')};
