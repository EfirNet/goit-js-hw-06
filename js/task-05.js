/* 
?Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
 */
//?--------------------Вариант 1--------------------------

const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', anonymousVision)

function anonymousVision(event) {
  if (event.currentTarget.value.length > 0) {
    outputEl.textContent = event.currentTarget.value
  } else {
    outputEl.textContent = 'Anonymous'
  }
  return outputEl.textContent
}

//?--------------------Вариант 2--------------------------
/* 
const inputData = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputData.addEventListener('input', inputDataHandler);

function inputDataHandler(event) {
   let value = event.currentTarget.value;
    if (value !== '' && value !== ' ') {
       return nameOutput.textContent = value;
    }
   return nameOutput.textContent = 'Anonymous';
    
}
 */
//?--------------------Вариант 3--------------------------
/* 
let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else{
    nameOutput.innerHTML = input.value;
    }
}
 */
//?--------------------Вариант 4--------------------------
/* 
let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
  inputEl = event.currentTarget.value;
  console.log(inputEl);

  inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}
 */