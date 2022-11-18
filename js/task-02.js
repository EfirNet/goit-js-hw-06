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

listEl.append(...elements);








// !!!!!!!!!!!!!!!!!!!!!!!

// const listEl = document.querySelector('#ingredients');
// const elements = ingredients.map(option => {
// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// itemEl.textContent = option;
// return itemEl;
// });

// listEl.append(...elements);

// !!!!!!!!!!!!!!!!!!!

// const list = document.querySelector('#ingredients');
// const arrayForNewElem = [];

// function createLiForIngr(array) {
//   for (const name of array) {
//     let newElement = document.createElement('li');
//     newElement.textContent = name;
//     newElement.classList.add('item');
//     arrayForNewElem.push(newElement);
//   }
// }

// createLiForIngr(ingredients);
// list.append(...arrayForNewElem);

// !!!!!!!!!!!!!!!!!!!!