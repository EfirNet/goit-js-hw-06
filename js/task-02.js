const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listEl = document.querySelector('#ingredients');
const elements = ingredients.map(param => {
const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = param;
return itemEl;
});
// console.log('elements: ', elements);
listEl.append(...elements);