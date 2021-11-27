
var formElement = document.querySelector("#form_input");
var inputElement=formElement.querySelectorAll("input.form-control");
formElement.onsubmit = (event) => {
  event.preventDefault();
   inputElement.forEach((input)=>{
    var errorMessage = input.parentElement.querySelector('.form-message');
   })
   
}

function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}