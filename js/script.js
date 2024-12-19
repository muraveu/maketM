// отклик на кнопку для меню бургера
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("brgr-menu").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})
// скролл 
let scroll = document.querySelector('.container');
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
rightButton.addEventListener('click', ()=> {
  scroll.scrollLeft += 425;
});
leftButton.addEventListener('click', ()=> {
  scroll.scrollLeft -= 425;
});

let scrollM = document.querySelector('.containerM');
let leftButtonM = document.getElementById('leftM');
let rightButtonM = document.getElementById('rightM');
rightButtonM.addEventListener('click', ()=> {
  scrollM.scrollLeft += 315;
});
leftButtonM.addEventListener('click', ()=> {
  scrollM.scrollLeft -= 315;
});