/* 
?Напиши скрипт, который для каждого элемента массива ingredients:
*Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
*Добавит название ингредиента как его текстовое содержимое.
*Добавит элементу класс item.
*После чего вставит все <li> за одну операцию в список ul#ingredients.
 */
//?--------------------Вариант 1--------------------------

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const listEl = document.querySelector('#ingredients')
const elements = ingredients.map(param => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = param
  return itemEl
})
// console.log('elements: ', elements);
listEl.append(...elements)


//?--------------------Вариант 2--------------------------
/* 
const list = document.querySelector('#ingredients');
const arrayForNewElem = [];

function createLiForIngr(array) {
  for (const name of array) {
    let newElement = document.createElement('li');
    newElement.textContent = name;
    newElement.classList.add('item');
    arrayForNewElem.push(newElement);
  }
}

createLiForIngr(ingredients);
list.append(...arrayForNewElem);
*/


