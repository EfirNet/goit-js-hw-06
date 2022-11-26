/* 
?Напиши скрипт который:
*Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
*Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
 */

const listEl = document.querySelector('#categories')
console.log('Number of categories:', listEl.children.length)

const itemEl = document.querySelectorAll('.item')

itemEl.forEach(group => {
  console.log('Category :', group.firstElementChild.textContent)
  console.log('Elements :', group.lastElementChild.children.length)
})
