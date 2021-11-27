var inputElement=document.querySelectorAll(".form-group input");
 

var emailElemnt=document.getElementById("email");
 

var passlElemnt=document.getElementById("password");
 

var formElement=document.querySelector("#form-1");
 

inputElement.forEach((input)=>{ 
    var errorMessage=input.parentElement.querySelector('.form-message');
    if(input.type =="checkbox"){
        input.onblur=()=>
        {   console.log(input.type);
             
        };   
    }
    input.oninput=()=>
    {
        var errorMessage=input.parentElement.querySelector('.form-message');
        errorMessage.innerText="";
        input.parentElement.classList.remove('invalid');
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
        
    
