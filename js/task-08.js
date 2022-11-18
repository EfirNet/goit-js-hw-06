const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input")

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const elements = event.currentTarget.elements
    const email = elements.email.value;
    const password = elements.password.value;
    const formData = {email, password,};
    if (email.length === 0 || password.length === 0) {
        alert ("Не спешите :), нужно вести все данные")
    } else {
        event.target.reset();
        console.log(formData)
    }
}