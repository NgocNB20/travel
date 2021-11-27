
 

var formElement = document.querySelector("#form_input");
formElement.onsubmit = (event) => {
  event.preventDefault();
  console.log(formElement.querySelectorAll(".form-desc input").length);
   
}