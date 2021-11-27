var inputElement = document.querySelectorAll(".form-group input");


var emailElemnt = document.getElementById("email");


var passElemnt = document.getElementById("password");

var passConfirmElemnt = document.getElementById("password_confirmation");

var formElement = document.querySelector("#form-1");


inputElement.forEach((input) => {
    var errorMessage = input.parentElement.querySelector('.form-message');
    input.oninput=()=>{
        errorMessage.innerText = " ";
        input.parentElement.classList.remove('invalid');
    }
    input.onblur = () => {
        
        if (input.type !== 'checkbox') {
            if (isRequired(input.value)) {
                errorMessage.innerText = isRequired(input.value);
                input.parentElement.classList.add('invalid');
            } else if (minLength(input.value)) {
                errorMessage.innerText = minLength(input.value);
                input.parentElement.classList.add('invalid');
            } else {
                errorMessage.innerText = " ";
                input.parentElement.classList.remove('invalid');
            }
        }
    };
    if (input.id === 'password_confirmation') {
        input.oninput = () => {
            if (isConfirmation(input.value, passElemnt.value)) {
                console.log("di vo day");
                errorMessage.innerText = isConfirmation(input.value, passElemnt.value);
                input.parentElement.classList.add('invalid');
            } else {
                errorMessage.innerText = " ";
                input.parentElement.classList.remove('invalid');
                console.log("di vo day1");
            }
        }
    }
    if (input.id === 'email') {
        input.oninput = () => {
            if (isEmail(input.value)) {
                errorMessage.innerText = isEmail(input.value);
                input.parentElement.classList.add('invalid');
            } else {
                errorMessage.innerText = " ";
                input.parentElement.classList.remove('invalid');
            }
        }
    }
}
)
function validateInput(input,errorMessage) {
    if (input.type !== 'checkbox') {
        if (isRequired(input.value)) {
            errorMessage.innerText = isRequired(input.value);
            input.parentElement.classList.add('invalid');
            return false;
        } else if (minLength(input.value)) {
            errorMessage.innerText = minLength(input.value);
            input.parentElement.classList.add('invalid');
            return false;
        } else {
            errorMessage.innerText = " ";
            input.parentElement.classList.remove('invalid');
            return true;
        }
    }
}
function validateConfirmation(input,errorMessage) {
    if (input.id === 'password_confirmation') {      
         if (isConfirmation(input.value, passElemnt.value)) {
             errorMessage.innerText = isConfirmation(input.value, passElemnt.value);
             input.parentElement.classList.add('invalid');
             return false;
         } else {
             errorMessage.innerText = " ";
             input.parentElement.classList.remove('invalid');
             return true;
         }
 }
}
function validateEmail(input,errorMessage) {
    if (input.id === 'email') {
        if (isEmail(input.value)) {
            errorMessage.innerText = isEmail(input.value);
            input.parentElement.classList.add('invalid');
            return false;
        } else {
            errorMessage.innerText = " ";
            input.parentElement.classList.remove('invalid');
            return true;
        } 
}
}
 
 

formElement.onsubmit = (event) => { 
    event.preventDefault(); 
    var isValid=true;
    inputElement.forEach((input) => {
        var errorMessage = input.parentElement.querySelector('.form-message');
if(!validateInput(input,errorMessage)&&validateConfirmation(input,errorMessage)&&validateEmail(input,errorMessage)) {
          
         isValid=false;
        }  
 
    }
   
    )
    console.log(isValid);
 


}

function isRequired(value) {
    return value.trim() ? undefined : 'Value input not empty';
}

function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}
function isConfirmation(value, getConfirmValue) {
    return value === getConfirmValue ? undefined : 'Re passwork fail';
}
function isEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value) ? undefined : 'Value is not email';
}


