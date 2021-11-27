$(document).ready(function()
{
    //funtion validate
function minLength(value) {
    return (value.length <= 50) ? undefined : `max length 50 charator`;
}

function isRequired(value) {
    return value.trim() ? undefined : 'Value input not empty';
}
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var dataArray=[
        {title: 'Mark',brief:'Otto',createdate:date},
        {title: 'Mark1',brief:'Otto1',createdate:date},
        {title: 'Mark2',brief:'Otto2',createdate:date},
    ]
    const showTable=()=>dataArray.forEach((student, index)=>{
        console.log('hihi');
        $('#show_table').append(
            `<tr>
                <th scope="row">${index+1}</th>
                <td>${student.title}</td>
                <td>${student.brief}</td>
                <td>${student.createdate}</td>
            </tr>`
        );
       })
    function validateForm (oject){
        var formElement = $("#form_add");
        var inputElement=$("#form_add .form-control");
        var resetButton=$("#btn_reset");
        var count=0;
         for(let i=0; i<inputElement.length; i++){ 
            var errorMessage = inputElement[i].parentElement.querySelector('.form-message');   
            errorMessage.innerText = " ";
            inputElement[i].classList.remove('invalid'); 
            if (isRequired(inputElement[i].value)) {
                errorMessage.innerText = isRequired(inputElement[i].value);
                inputElement[i].classList.add('invalid');       
            } 
            if (minLength(inputElement[i].value)) {
                errorMessage.innerText = minLength(inputElement[i].value);
                inputElement[i].classList.add('invalid');       
            }
            if(!isRequired(inputElement[i].value)&&!minLength(inputElement[i].value)){
                count++;
            }
         }
         if(count===inputElement.length){
            dataArray.push(oject);
            for(let i=0; i<inputElement.length; i++){ 
                inputElement[i].value=" ";
             }
         }
          
    
    }



   
    //view edit
        $("#profile").on('click',()=>{  
            $.ajax({
                        method: 'GET',
                        url: './edit.html'
                    }).done(function(data) {
                        $("#show-view").html(data);   
                                        
                    });
                   
        });
    
        //view form
        $(".view-form").on('click',()=>{ 
             
            $.ajax({
                method: 'GET',
                url: './add.html'
            }).done(function(data) {
                $("#show-view").html(data); 
                $('#form_add').submit((event)=>{
                    event.preventDefault();
                    validateForm({title: $("#title").val(),brief:$("#brief").val(),createdate:date});


                     
                                   
                })     
                
            });
           
               }
        );
        
    
               
        //view content
        $(".view-content").on('click',()=>{  
            $.ajax({
                method: 'GET',
                url: './view_content.html'
            }).done(function(data) {
                $("#show-view").html(data); 
                showTable();           
            });
               });
         
               
})

 
