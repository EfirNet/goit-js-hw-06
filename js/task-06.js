const input = document.querySelector('#validation-input');
input.addEventListener('blur', inputBlurHandler);
 

function inputBlurHandler() {
  if (input.value.length === 6) {
    input.classList.remove('invalid');
      return  input.classList.add('valid');
    
    }
   return input.classList.add('invalid');
    
}