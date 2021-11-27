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

 
$(".btn-add").on("click",(function() {   
        $("#form_input").validate({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            
            rules: {
                "firtname": {
                    required: true,
                    maxlength: 50
                },
                "lastname": {
                    required: true,
                    maxlength: 50,
                },
                "phone": {
                    required: true,
                    maxlength: 11,
                },
                "desc": {
                    required: true,
                },
                "title": {
                    required: true,
                    maxlength: 50
                },
                "brief": {
                    required: true,
                    maxlength: 50
                },
                "content":{
                    required: true,
                }
            },
            messages: {
                "firtname": {
                    required: "firtname is not empty",
                    maxlength: "max length 50 character"
                },
                "lastname": {
                    required: "lastname is not empty",
                    maxlength: "max length 50 charactor"
                },
                "phone": {
                    required: "phone is not empty",
                    maxlength: "min length 11 charactor"
                },
                "desc": {
                    required: "desc is not empty"				
                },
                "title": {
                    required: "title is not empty",
                    maxlength: 50
                },
                 "brief": {
                    required: "brief is not empty",
                    maxlength: "min length 50 charactor"
                },
                "content": {
                    required: "content is not empty",
                    
                },
            }
        });
         
         
    });
