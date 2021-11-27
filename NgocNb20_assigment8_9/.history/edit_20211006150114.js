
 

var formElement = document.querySelector("#form_input");
formElement.onsubmit = (event) => {
  event.preventDefault();
  console.log(formElement.querySelectorAll("input.form-control").length);
   
}