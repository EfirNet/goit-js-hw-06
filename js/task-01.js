
const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.children.length);

const itemEl = document.querySelectorAll('.item')

itemEl.forEach(group => {
    console.log('Category :', group.firstElementChild.textContent)
    console.log('Elements :', group.lastElementChild.children.length)
});

















//!------------------------------------------------------
/* 
const listEl = document.querySelector('#categories');
const titleEl = document.querySelectorAll("h2");
const itemEl = document.querySelectorAll('.item');

console.log('Number of categories :', listEl.children.length);

itemEl.forEach(function (group) {
    console.log('Category :',group.children[0].textContent)
    console.log('Elements :',group.children[1].children.length)
})
 */
//!------------------------------------------------------
/* 
const categoriesEl = document.querySelector('#categories');
const allCategories = categoriesEl.children;
console.log('Number of categories: ', allCategories.length);

Array.from(allCategories).forEach(el => {
    console.log('Category: ', el.firstElementChild.textContent);
    console.log('Elements: ', el.lastElementChild.children.length)
});
 */
//!------------------------------------------------------
/* 
const allItems = document.querySelectorAll('.item');
const list = document.querySelector('#categories');
const listItems = list.children;

function countItems(array) {
    console.log(`Number of categories: ${array.length}`);
};

function getItemInform(array) {
    for (let i = 0; i < array.length; i += 1) {
        let title = array[i].firstElementChild.textContent;
        let amountOfItems = array[i].lastElementChild.querySelectorAll('li');
        console.log(`Category: ${title}`);
        console.log(`Elements: ${amountOfItems.length}`);
        
    }
};

(countItems(allItems));
(getItemInform(listItems));
 */
//!------------------------------------------------------