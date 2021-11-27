var formElement = document.querySelector("#form_input");
var inputElement=formElement.querySelectorAll("input.form-control");
console.log(formElement);
console.log(inputElement);

formElement.onsubmit = (event) => {
  event.preventDefault();
  console.log("hello");
   inputElement.forEach((input)=>{
    var errorMessage = input.parentElement.querySelector('.form-message');
    errorMessage.innerText = " ";
    input.classList.remove('invalid');    
    if (minLength(input.value)) {
        errorMessage.innerText = minLength(input.value);
        input.classList.add('invalid');       
    }
   })
}
function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}