var inputElement=document.querySelectorAll(".form-group input");
 

var emailElemnt=document.getElementById("email");
 

var passlElemnt=document.getElementById("password");
 

var formElement=document.querySelector("#form-1");
 

inputElement.forEach((input)=>{ 
    var errorMessage=input.parentElement.querySelector('.form-message');
    input.onblur=()=>
    {   console.log();
        if(input.type!='checkbox'&&isRequired(input.value)||minLength(input.value)){
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
        
    
