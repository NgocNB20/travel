var inputElement=document.querySelectorAll(".form-group input");
console.log(inputElement);

var emailElemnt=document.getElementById("email");
console.log(emailElemnt);

var passlElemnt=document.getElementById("password");
console.log(passlElemnt);

var formElement=document.querySelector("#form-1");
console.log(formElement);

inputElement.forEach((input)=>{ 
    var errorMessage=input.parentElement.querySelector('.form-message');
    input.onblur=()=>
    {    
        if(isRequired(input.value)||minLength(input.value)){
            if(isRequired(input.value)){
                errorMessage.innerText=isRequired(input.value);
                input.parentElement.classList.add('invalid');
            }else{
                errorMessage.innerText=minLength(input.value);
                input.parentElement.classList.add('invalid');
            }
    }else{
        errorMessage.innerText="";
        input.parentElement.classList.remove('invalid');
    }
    };
    input.oninput=()=>
    {
        var errorMessage=input.parentElement.querySelector('.form-message');
        errorMessage.innerText="";
        input.parentElement.classList.remove('invalid');
    }
    
  

})

formElement.onsubmit=(event)=>{ event.preventDefault();}

function isRequired(value) {
        return value.trim()? undefined : 'Value input not empty';  
}

function minLength (value){
        return (value.length<=50)?undefined:`max length 50 charator`;           
            }
        
    
