const listEl = document.querySelector('#categories');
console.log('Number of categories:', listEl.children.length);

const itemEl = document.querySelectorAll('.item')

itemEl.forEach(group => {
    console.log('Category :', group.firstElementChild.textContent)
    console.log('Elements :', group.lastElementChild.children.length)
});