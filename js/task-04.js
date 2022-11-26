/* 
?Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
*Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
*Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
*Обновляй интерфейс новым значением переменной counterValue.
 */
//?--------------------Вариант 1--------------------------

const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1
  },
  increment() {
    this.counterValue += 1
  },
}
const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')

decrementButton.addEventListener('click', function () {
  counter.decrement()
  valueEl.textContent = counter.counterValue
})

incrementButton.addEventListener('click', function () {
  counter.increment()
  valueEl.textContent = counter.counterValue
})

//?--------------------Вариант 2--------------------------
/* 
const counter = document.querySelector('#value');
let counterValue = 0;
const increaseValue = document.querySelector('[data-action="increment"]');
increaseValue.addEventListener('click', increaseValueClickHandler);
const decreaseValue = document.querySelector('[data-action="decrement"]');
decreaseValue.addEventListener('click', decreaseValueClickHandler);

function increaseValueClickHandler() {
    counter.textContent = counterValue += 1;
}
function decreaseValueClickHandler() {
    if (counterValue >= 1) {
     counter.textContent = counterValue -= 1;
    }
}
 */
//?--------------------Вариант 3--------------------------
/* 
const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);
 */

//?--------------------Вариант 4--------------------------
/* 
let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  // console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
  // console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});
 */