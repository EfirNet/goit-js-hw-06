/* 
?Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
*Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
*Размеры самого первого <div> - 30px на 30px.
*Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
*Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
*Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
 */
//?--------------------Вариант 1--------------------------

const mainBlock = document.querySelector('#boxes')
mainBlock.style.marginTop = "10px"
const createBlockButton = document.querySelector('[data-create]');
const destroyAllButton = document.querySelector('[data-destroy]');

const inputEl = document.querySelector("#controls input");

function buildBlocks () {
  const newBlocks = []
  for (let i = 0; i < inputEl.value; i += 1) {
    const newBlock = document.createElement("div")
    const colorName = getRandomHexColor();
    newBlock.style.backgroundColor = colorName;

    newBlock.style.border = "2px solid black";
    newBlock.style.marginBottom = "10px";
    newBlock.style.marginRight = "10px";

    const size = 30 + i * 10;
    newBlock.style.height = `${size}px`;
    newBlock.style.width = `${size}px`;
    
    newBlocks.push(newBlock);
  }
  mainBlock.append(...newBlocks);
}
function clearFieldInput () {
  inputEl.value = "";
}
function destroyBlocks() {
  mainBlock.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
createBlockButton.addEventListener("click", buildBlocks);
destroyAllButton.addEventListener("click", destroyBlocks);
createBlockButton.addEventListener("click", clearFieldInput);

//?--------------------Вариант 2--------------------------
/* 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');


const createBoxes = amount => {
  const newElementsArray = [];
  for (let i = 0; i < amount; i += 1) {
    let newElement = document.createElement('div');
    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    newElementsArray.push(newElement);
  
  }

  return newElementsArray;
}

createButton.addEventListener('click', () => {
  let createdBoxes = createBoxes(input.value);
  boxes.append(...createdBoxes);
});

destroyButton.addEventListener('click', () => boxes.innerHTML = ''); 
*/