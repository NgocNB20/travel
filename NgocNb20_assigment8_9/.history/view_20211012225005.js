$(document).ready(function()
{
    
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
    function validateForm (InputElement){
        InputElement.forEach((input)=>{
            console.log(input);
       })
    
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
                    dataArray.push({title: $("#title").val(),brief:$("#brief").val(),createdate:date});
                    var formElement = $("#form_add");
                    var inputElement=$("#form_add .form-control");
                    var resetButton=$("#btn_reset");
                     for(let i=0; i<inputElement.length; i++){      
                         console.log(inputElement[i].parent());
                     }

                     
                                   
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

 
