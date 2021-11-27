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

 
        $(document).ready(function () {
            $(".btn-add").click(function (event) {
                event.preventDefault();
                $.ajax({
                    url: '/view.html',
                    type: 'GET',
                    success: function (data) {
                        console.log("di vao day");
                        console.log(typeof data);
                    },
                    error: function (e) {
                        console.log(e.message);
                    }
                });
            })
            
        });
