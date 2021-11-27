var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var data=[
    {title: 'Mark',brief:'Otto',createdate:date},
    {title: 'Mark1',brief:'Otto1',createdate:date},
    {title: 'Mark2',brief:'Otto2',createdate:date},
]
//view form
    $(".view-content").on('click',()=>{  
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
        });
           });

           
    //view edit
    $(".view-form").on('click',()=>{  
        $.ajax({
            method: 'GET',
            url: './view.html'
        }).done(function(data) {
            $("#show-view").html(data);           
        });
           });


 
