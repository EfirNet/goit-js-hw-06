/* 
?Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
 */
//?--------------------Вариант 1--------------------------

const textEl = document.querySelector('#text')
const inputEl = document.querySelector('#font-size-control')

console.log(inputEl.value)

inputEl.addEventListener('change', userChangeRange)

function userChangeRange() {
  textEl.style.fontSize = `${inputEl.value}px`
  return textEl
}

//?--------------------Вариант 2--------------------------
/* 
const controller = document.querySelector('#font-size-control');
controller.addEventListener('input', inputControllerHandler);

const text = document.querySelector('#text');


function inputControllerHandler(event) {
    let currentValue = event.currentTarget.value;
    text.style.fontSize = `${currentValue}px`;
}
 */
//?--------------------Вариант 3--------------------------
/* 
let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};
 */
//?--------------------Вариант 4--------------------------
/* 
let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};
 */