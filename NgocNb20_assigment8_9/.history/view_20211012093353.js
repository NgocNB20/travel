var d = new Date();
var n = d.getDay();
var data=[{title: 'Mark',brief:'Otto',createdate:n}]
$(".view-content").click(function(){   
    $('#show-view').children().remove();
    console.log("a"+d.getDay());    
         if($('#show-view').children().length==0){
       // draw data to table:
       $('#show-view').append(
        `                    <h2 class="title-add">View Content</h2>
        <h3 class="title-form">Profile form elements</h3>
        <div class="container ">
            <div class="row form">
                <div class="col-10">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Brief</th>
                                <th scope="col">Created Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
    );      
         }
        
})

$(".view-form").click(function(){  
    
     $('#show-view').children().remove();
    if($('#show-view').children().length==0){
  
  $('#show-view').append(
   `                     <h2 class="title-add">Edit profile</h2>
   <h3 class="title-form">Profile form elements</h3>
   <div class="container ">
     <div class="row form">
       <div class="col-10">
         <form id="form_input">
           <div class="form-group ">
             <label for="exampleFormControlInput1" class="form-desc">FirtName</label>
             <input type="text" class="form-control" id="exampleFormControlInput1"
               placeholder="Enter the first name">
               <span class="form-message"></span>
           </div>
           <div class="form-group ">
             <label for="exampleFormControlInput1" class="form-desc">Last Name</label>
             <input type="text" class="form-control " id="exampleFormControlInput1"
               placeholder="Enter the last name">
               <span class="form-message"></span>
           </div>
           <div class="form-group ">
             <label for="exampleFormControlInput1" class="form-desc">Email</label>
              <br><span class="form-email" >ngocmeu200@gmail.com</span>
           </div>
           <div class="form-group ">
             <label for="exampleFormControlInput1" class="form-desc">Phone</label>
             <input type="text" class="form-control " id="exampleFormControlInput1"
               placeholder="Enter your phone number">
               <span class="form-message"></span>
           </div>
           <div class="form-group">
             <label for="exampleFormControlTextarea1" class="form-desc">Description</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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