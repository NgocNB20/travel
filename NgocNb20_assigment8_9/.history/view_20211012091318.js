

$(".view-content").click(function(){       
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

$(".form-content").click(function(){       
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