var formElement = document.querySelector("#form_add");
var inputElement=formElement.querySelectorAll("input.form-control");
var resetButton=document.querySelector("#btn_reset");


//validate input
formElement.onsubmit = (event) => {
  event.preventDefault();
   inputElement.forEach((input)=>{
    console.log(input);    
    }
   })
}

//reset-input
resetButton.onclick = (event) => {
    var listEment=formElement.querySelectorAll('.form-control');
    listEment.forEach((element)=>{
        element.value = ' ';
    })
    inputElement.forEach((element)=>{
        inputElement.forEach((input)=>{
            var errorMessage = input.parentElement.querySelector('.form-message');
            errorMessage.innerText = " ";
            input.classList.remove('invalid');  
    })
})
}


//funtion validate
function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}

function isRequired(value) {
    return value.trim() ? undefined : 'Value input not empty';
}
 
 
