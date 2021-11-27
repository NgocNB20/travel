var formElement = document.querySelector("#form_input");
var inputElement=formElement.querySelectorAll("input.form-control");
var resetButton=document.querySelector(".btn_reset");
console.log(resetButton);


formElement.onsubmit = (event) => {
  event.preventDefault();
   inputElement.forEach((input)=>{
    var errorMessage = input.parentElement.querySelector('.form-message');
    errorMessage.innerText = " ";
    input.classList.remove('invalid');  
    if (isRequired(input.value)) {
        errorMessage.innerText = isRequired(input.value);
    input.classList.add('invalid');       
    }  
    if (minLength(input.value)) {
        errorMessage.innerText = minLength(input.value);
        input.classList.add('invalid');       
    }
   })
}
function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}

function isRequired(value) {
    return value.trim() ? undefined : 'Value input not empty';
}