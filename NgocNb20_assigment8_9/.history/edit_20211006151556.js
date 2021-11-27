
var formElement = document.querySelector("#form_input");
var inputElement=formElement.querySelectorAll("input.form-control");
formElement.onsubmit = (event) => {
  event.preventDefault();
   inputElement.forEach((input)=>{
    var errorMessage = input.parentElement.querySelector('.form-message');
    console.log(errorMessage);
    if (minLength(input.value)) {
        errorMessage.innerText = minLength(input.value);
        input.classList.add('invalid');
         
    }
   })
   
}

function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}