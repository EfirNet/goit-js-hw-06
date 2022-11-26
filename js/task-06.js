/* 
?Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
*Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
*Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
 */
//?--------------------Вариант 1--------------------------

const input = document.querySelector('#validation-input')
input.addEventListener('blur', inputBlurHandler)

function inputBlurHandler() {
  if (input.value.length === 6) {
    input.classList.remove('invalid')
    return input.classList.add('valid')
  }
  return input.classList.add('invalid')
}

//?--------------------Вариант 2--------------------------
/* 
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});

inputEl.addEventListener("blur", () => {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
});

<input id="input" value="Привет"></input>;
input.value = "Bye";
 */
//?--------------------Вариант 3--------------------------
/* 
let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
};
 */
//?--------------------Вариант 4--------------------------
/* 
let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
 */
//?--------------------Вариант 5--------------------------
/* 
const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})
 */
