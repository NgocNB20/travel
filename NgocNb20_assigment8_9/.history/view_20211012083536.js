$(".view-content").click(function(){
    $.ajax({
              method: 'POST',
                url: './view/html'
            }).done(function(data) {
               students = data;
                  drawStudent();
             });
})