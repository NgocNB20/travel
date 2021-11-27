$(".view-content").click(function(){
    $.ajax({
              method: 'GET',
                url: 'https://dea6010c-7e78-4a94-9ae1-896b858ea204.mock.pstmn.io/students'
            }).done(function(data) {
               students = data;
                  drawStudent();
             });
})