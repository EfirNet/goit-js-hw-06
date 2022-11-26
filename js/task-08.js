/* 
?Напиши скрипт управления формой логина.
*Обработка отправки формы form.login-form должна быть по событию submit.
*При отправке формы страница не должна перезагружаться.
*Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
*Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
*Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
 */
//?--------------------Вариант 1--------------------------

const formEl = document.querySelector('.login-form')
const inputEl = document.querySelectorAll('input')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()
  const elements = event.currentTarget.elements
  const email = elements.email.value
  const password = elements.password.value
  const formData = { email, password }
  if (email.length === 0 || password.length === 0) {
    alert('Не спешите :), нужно вести все данные')
  } else {
    event.target.reset()
    console.log(formData)
  }
}

//*--------------------кнопка RESET для очистки полей--------------------------

const btnResetEl = document.createElement("button")
btnResetEl.textContent = "Reset";
btnResetEl.style.marginTop = "16px";
btnResetEl.style.width = "320px"
btnResetEl.addEventListener('click', resetAllInformation)
function resetAllInformation () {
    formEl.reset()
}
formEl.after(btnResetEl);

//?--------------------Вариант 2--------------------------
/* 
const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
    const {
        elements: {
            email,
            password,
        }
    } = event.currentTarget;
    
if (email.value === '' || password.value === '') {
    return alert('Fill in all the fields to submit');
}
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
 */
//?--------------------Вариант 3--------------------------
/* 
const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}
 */