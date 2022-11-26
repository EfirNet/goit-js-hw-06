/* 
?Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
*Все элементы галереи должны добавляться в DOM за одну операцию вставки.
*Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы. 
*/

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

//?--------------------Вариант 1--------------------------

const listEl = document.querySelector('.gallery')
listEl.insertAdjacentHTML('beforeend', createListItems(images))

function createListItems(items) {
  return items.map(({ url, alt }) => `<li class="item"><img src="${url}" alt="${alt}"></li>`)
}

//?--------------------Вариант 2--------------------------
/* 
for (const image of images) {
  listEl.insertAdjacentHTML("beforeend",
`<li class="item"><img src="${image.url}" alt="${image.alt}" style="width: 750px; height: 1260px;"></li>`);
}
 */
//?--------------------Вариант 3--------------------------
/* 
const elements = images.map( ({ url, alt })  => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');

  itemEl.insertAdjacentHTML("afterbegin",`<img src="${url}" alt="${alt}" style="width: 750px; height: 1260px;">`);
  return itemEl;
});

listEl.append(...elements);
 */
//?--------------------Вариант 4--------------------------
/* 
const list = document.querySelector('.gallery');

const markup = images.map(image =>
  `<li class='img-wrapper'><img src='${image.url}' alt='${image.alt}' class='image'></img></li>`).join(' ');

list.insertAdjacentHTML("beforeend", markup);
 */