$(".view-content").click(function(){
    $.ajax({
              method: 'get',
                url: './view/html'
            }).done(function(data) {
               students = data;
                  drawStudent();
             });
})