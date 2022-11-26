/* 
?Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
 */
//?--------------------Вариант 1--------------------------
const bodyEl = document.querySelector('body')
const textEl = document.querySelector('.color')
const btnEl = document.querySelector('.change-color')

function getColorChanger() {
  const colorName = getRandomHexColor()
  bodyEl.style.backgroundColor = colorName
  textEl.textContent = colorName
}

btnEl.addEventListener('click', getColorChanger)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

//?--------------------Вариант 2--------------------------
/* 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const text = document.querySelector('.color');

button.addEventListener('click', buttonClickHandler);

function buttonClickHandler(event) {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
}
 */