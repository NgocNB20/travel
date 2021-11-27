$(document).ready(function()
{
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var dataArray=[
        {title: 'Mark',brief:'Otto',createdate:date},
        {title: 'Mark1',brief:'Otto1',createdate:date},
        {title: 'Mark2',brief:'Otto2',createdate:date},
    ]
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
                    console.log($("#title").val());     
                    console.log($("#brief").val());  
                    console.log($("#content").val());  
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
            });
               });
         
               
})



 






 
//     $(".view-content").on('click',()=>{  
//         $('#show-view').children().remove();   
//              if($('#show-view').children().length==0){
            
           
//             $('#show-view').append(
//                 `                    <h2 class="title-add">View Content</h2>
//                 <h3 class="title-form">Profile form elements</h3>
//                 <div class="container ">
//                     <div class="row form">
//                         <div class="col-10">
//                             <table class="table table-bordered" >
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">#</th>
//                                         <th scope="col">Title</th>
//                                         <th scope="col">Brief</th>
//                                         <th scope="col">Created Date</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody id="show_table">
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>`
//             );
        
//            data.forEach(function(student, index) {
//             $('#show_table').append(
//                 `<tr>
//                     <th scope="row">${index+1}</th>
//                     <td>${student.title}</td>
//                     <td>${student.brief}</td>
//                     <td>${student.createdate}</td>
//                 </tr>`
//             );
//            })           
//     }
// })

// $(".view-form").on('click',function(){  
//     $('#show-view').children().remove();
//    if($('#show-view').children().length==0){
 
//  $('#show-view').append(
//   `          <h2 class="title-add">Add Content</h2>
//   <h3 class="title-form">Content form elements</h3>
//   <div class="container ">
//     <div class="row form">
//       <div class="col-10">
//         <form id="form_input">
//           <div class="form-group ">
//             <label for="title" class="form-desc">Title</label>
//             <input type="text" class="form-control"   id="title" name="title" 
//               placeholder="Enter the title">
//               <span class="form-message"></span>
//           </div>
//           <div class="form-group">
//             <label for="brief" class="form-desc">Brief</label>
//             <textarea class="form-control"   rows="4" id="brief" name="brief"></textarea>
//           </div>
//           <div class="form-group">
//             <label for="content" class="form-desc">Content</label>
//             <textarea class="form-control"   rows="6 name="content" id="content" "></textarea>
//           </div>
//           <div class="form-group">
//             <input class="btn btn-primary btn-add"  type="submit" value="Submit Button">
//             <input class="btn btn-primary " id='btn_reset' type="button" value="Reset Button">
//           </div>
//         </form>
//       </div>

//     </div>

//   </div>`
// );      
//    }   
// })
// $("#profile").on('click',function() {
//     $('#show-view').children().remove();
//     if($('#show-view').children().length==0){
//     $('#show-view').append(
//         `                             <h2 class="title-add">Edit profile</h2>
//         <h3 class="title-form">Profile form elements</h3>
//         <div class="container ">
//           <div class="row form">
//             <div class="col-10">
//               <form id="form_input">
//                 <div class="form-group ">
//                   <label for="firtname" class="form-desc">FirtName</label>
//                   <input type="text" class="form-control" id="firtname" name="firtname"
//                     placeholder="Enter the first name">
//                     <span class="form-message"></span>
//                 </div>
//                 <div class="form-group ">
//                   <label for="lastname" class="form-desc">Last Name</label>
//                   <input type="text" class="form-control " id="lastname" name="lastname"
//                     placeholder="Enter the last name">
//                     <span class="form-message"></span>
//                 </div>
//                 <div class="form-group ">
//                   <label for="exampleFormControlInput1" class="form-desc">Email</label>
//                    <br><span class="form-email" >ngocmeu200@gmail.com</span>
//                 </div>
//                 <div class="form-group ">
//                   <label for="phone" class="form-desc">Phone</label>
//                   <input type="text" class="form-control " id="phone" name="phone"
//                     placeholder="Enter your phone number">
//                     <span class="form-message"></span>
//                 </div>
//                 <div class="form-group">
//                   <label for="desc" class="form-desc">Description</label>
//                   <textarea class="form-control" id="desc" rows="3 name="desc"></textarea>
//                 </div>
//                 <div class="form-group">
//                   <input class="btn btn-primary btn-add"  type="submit" value="Submit Button">
//                   <input class="btn btn-primary" id="btn_reset" type="button" value="Reset Button">
//                 </div>
//               </form>
//             </div>

//           </div>

//         </div>
//     </div>`
//      );
//     }  
// })
 
