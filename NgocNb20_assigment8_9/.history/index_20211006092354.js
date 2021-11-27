var inputElement=document.querySelectorAll(".form-group input");
 

var emailElemnt=document.getElementById("email");
 

var passElemnt=document.getElementById("password");
 
var passConfirmElemnt=document.getElementById("password_confirmation");

var formElement=document.querySelector("#form-1");
 

inputElement.forEach((input)=>{ 
    var errorMessage=input.parentElement.querySelector('.form-message');
        input.onblur=()=>
        {  if(input.type !=='checkbox'){
            if(isRequired(input.value)||minLength(input.value)){
                if(isRequired(input.value)){
                    errorMessage.innerText=isRequired(input.value);
                    input.parentElement.classList.add('invalid');
                }else{
                    errorMessage.innerText=minLength(input.value);
                    input.parentElement.classList.add('invalid');
                }
        }else{
            errorMessage.innerText=" ";
            input.parentElement.classList.remove('invalid');
        }
        }
        };   
    
    if(input.type !=='checkbox'){
        input.oninput=()=>
        {
            var errorMessage=input.parentElement.querySelector('.form-message');
            errorMessage.innerText="";
            input.parentElement.classList.remove('invalid');
        }
    }
    if(input.id==='password_confirmation'){
        input.oninput=()=>
        {
         console.log(input.id)
            
           
        }
    }
   
    
  

}
)

formElement.onsubmit=(event)=>{ event.preventDefault();}

function isRequired(value) {
        return value.trim()? undefined : 'Value input not empty';  
}

function minLength (value){
        return (value.length<=50)?undefined:`max length 50 charator`;           
            }
function isConfirmation (value,getConfirmValue){
    return value===getConfirmValue?undefined:'Re passwork fail';
}
        
    
