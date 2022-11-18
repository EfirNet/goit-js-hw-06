//===================================================
const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';




//!!!Задача
/**
 *
 * @param users - масив обʼєктів юзерів
 * Ми хочемо створити новий список на сторінці, перед яким ми матимемо заголовок
 * з назвою users.
 *  У списка ми хочемо вимкнути маркери і створити картки наших юзерів.
 *  В картці мають бути присутні імʼя, імейл, телефон і назва компанії, де юзер працює.
 *  Побудова картки довільна.
 *  Обмежень немкає
 *
 *
 * @return void
 */
// function createUsersList(users) {
//     const initialAcc = '<h1>Users</h1>\n<ul style="list-style: none">';
//     const result = users.reduce((acc, { name, email, phone, company }) => {
//       return `
//              ${acc}
//             <li class="user">
//                   <p>${name}</p>
//                   <p>${email}</p>
//                   <p>${phone}</p>
//                   <p>${company.name}</p>
//             </li>
//         `
//     }, initialAcc) + '</ul>'
    
//     document.body.insertAdjacentHTML('beforeend', result)
// }
// !!!!!!!!

 