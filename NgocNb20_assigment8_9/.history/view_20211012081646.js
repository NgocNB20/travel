$(".view-content").click(function(){
    $.ajax({
              method: 'GET',
                url: './view/html'
            }).done(function(data) {
               students = data;
                  drawStudent();
             });
})