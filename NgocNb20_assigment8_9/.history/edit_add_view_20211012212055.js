// var formElement = document.querySelector("#form_input");
// var inputElement=formElement.querySelectorAll("input.form-control");
// var resetButton=document.querySelector("#btn_reset");


// //validate input
// formElement.onsubmit = (event) => {
//   event.preventDefault();
//    inputElement.forEach((input)=>{
//     var errorMessage = input.parentElement.querySelector('.form-message');
//     errorMessage.innerText = " ";
//     input.classList.remove('invalid');  
//     if (isRequired(input.value)) {
//         errorMessage.innerText = isRequired(input.value);
//     input.classList.add('invalid');       
//     }  
//     if (minLength(input.value)) {
//         errorMessage.innerText = minLength(input.value);
//         input.classList.add('invalid');       
//     }
//    })
// }

// //reset-input
// resetButton.onclick = (event) => {
//     var listEment=formElement.querySelectorAll('.form-control');
//     listEment.forEach((element)=>{
//         element.value = ' ';
//     })
//     inputElement.forEach((element)=>{
//         inputElement.forEach((input)=>{
//             var errorMessage = input.parentElement.querySelector('.form-message');
//             errorMessage.innerText = " ";
//             input.classList.remove('invalid');  
//     })
// })
// }


// //funtion validate
// function minLength(value) {
//     return (value.length <= 50) ? undefined : `max length 50 charator`;
// }

// function isRequired(value) {
//     return value.trim() ? undefined : 'Value input not empty';
// }

// console.log($("#btn-add").val());         


$().ready(function(

    ) {
        $.validator.addMethod("validateEmail", function (value, element) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return this.optional(element) || re.test(value);
        }, "Value is not email");
 
    
        //form_input
        $("#form_add").validate({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            
            rules: {
                "title": {
                    required: true,
                    maxlength: 50
                },

            },
            messages: {                
                "title": {
                    required: "title is not empty",
                    maxlength: 50
                }
            }
        });
         
         
    });
 
