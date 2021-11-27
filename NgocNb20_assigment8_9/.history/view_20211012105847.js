var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var data=[
    {title: 'Mark',brief:'Otto',createdate:date},
    {title: 'Mark1',brief:'Otto1',createdate:date},
    {title: 'Mark2',brief:'Otto2',createdate:date},
]
$(".view-content").click(function(){   
    $('#show-view').children().remove();
    console.log(data);    
         if($('#show-view').children().length==0){
       // draw data to table:
       
        $('#show-view').append(
            `                    <h2 class="title-add">View Content</h2>
            <h3 class="title-form">Profile form elements</h3>
            <form class="container" id="form_input">
                <div class="row form">
                    <div class="col-10">
                        <table class="table table-bordered" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Brief</th>
                                    <th scope="col">Created Date</th>
                                </tr>
                            </thead>
                            <tbody id="show_table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>`
        );
    
       data.forEach(function(student, index) {
        $('#show_table').append(
            `<tr>
                <th scope="row">${index+1}</th>
                <td>${student.title}</td>
                <td>${student.brief}</td>
                <td>${student.createdate}</td>
            </tr>`
        );
       })
      
         }
        
})

$(".view-form").click(function(){  
    
     $('#show-view').children().remove();
    if($('#show-view').children().length==0){
  
  $('#show-view').append(
   `          <h2 class="title-add">Add Content</h2>
   <h3 class="title-form">Content form elements</h3>
   <div class="container ">
     <div class="row form">
       <div class="col-10">
         <form id="form_input">
           <div class="form-group ">
             <label for="exampleFormControlInput1" class="form-desc">Title</label>
             <input type="text" class="form-control" id="exampleFormControlInput1" name="title"
               placeholder="Enter the title">
               <span class="form-message"></span>
           </div>
           <div class="form-group">
             <label for="exampleFormControlTextarea1" class="form-desc">Brief</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name="brief"></textarea>
           </div>
           <div class="form-group">
             <label for="exampleFormControlTextarea1" class="form-desc">Content</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="6 name="content" "></textarea>
           </div>
           <div class="form-group">
             <input class="btn btn-primary btn-add " type="submit" value="Submit Button">
             <input class="btn btn-primary " id='btn_reset' type="button" value="Reset Button">
           </div>
         </form>
       </div>

     </div>

   </div>`
);      
    }   
})
$("#profile").click(function() {
    $('#show-view').children().remove();
    if($('#show-view').children().length==0){
    $('#show-view').append(
        `          <h2 class="title-add">Edit profile</h2>
        <h3 class="title-form">Profile form elements</h3>
        <div class="container ">
          <div class="row form">
            <div class="col-10">
              <form id="form_input">
                <div class="form-group ">
                  <label for="exampleFormControlInput1" class="form-desc">FirtName</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name="firtname"
                    placeholder="Enter the first name">
                    <span class="form-message"></span>
                </div>
                <div class="form-group ">
                  <label for="exampleFormControlInput1" class="form-desc">Last Name</label>
                  <input type="text" class="form-control " id="exampleFormControlInput1" name="lastname"
                    placeholder="Enter the last name">
                    <span class="form-message"></span>
                </div>
                <div class="form-group ">
                  <label for="exampleFormControlInput1" class="form-desc">Email</label>
                   <br><span class="form-email" >ngocmeu200@gmail.com</span>
                </div>
                <div class="form-group ">
                  <label for="exampleFormControlInput1" class="form-desc">Phone</label>
                  <input type="text" class="form-control " id="exampleFormControlInput1" name="phone"
                    placeholder="Enter your phone number">
                    <span class="form-message"></span>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="form-desc">Description</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3 name="desc"></textarea>
                </div>
                <div class="form-group">
                  <input class="btn btn-primary " type="submit" value="Submit Button">
                  <input class="btn btn-primary" id="btn_reset" type="button" value="Reset Button">
                </div>
              </form>
            </div>

          </div>

        </div>`
     );
    }  
})