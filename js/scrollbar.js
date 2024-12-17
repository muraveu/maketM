// отклик на кнопку для меню бургера
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("brgr-menu").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})
// скролл 
const container = document.querySelector('.container');
const items = document.querySelectorAll('.type-box');

// Переменные для перетаскивания
let isDown = false;
let startX;
let scrollLeft;


// Начало перетаскивания мышью
container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Останавливаем, если мышь не нажата
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // умножаем на 2 для скорости
  container.scrollLeft = scrollLeft - walk;
});

// Поддержка сенсорных экранов
let startXTouch;

container.addEventListener('touchstart', (event) => {
  startXTouch = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
  const currentX = event.touches[0].clientX;
  const deltaX = startXTouch - currentX;
  container.scrollLeft += deltaX; // Прокрутка по горизонтали
  startXTouch = currentX; // Обновляем начальный уровень
});