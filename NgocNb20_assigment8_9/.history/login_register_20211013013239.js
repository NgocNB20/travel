


$().ready(function(

) {
    $.validator.addMethod("validateEmail", function (value, element) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.optional(element) || re.test(value);
    }, "Value is not email");


    //validate form_input
    $("#form_input").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
        
		rules: {
            "firtname": {
				required: true,
				maxlength: 50
			},
			"lastname": {
				required: true,
				maxlength: 50,
			},
		},
		messages: {
            "firtname": {
				required: "firtname is not empty",
				maxlength: "max length 50 character"
			},
			"lastname": {
				required: "lastname is not empty",
				maxlength: "max length 50 charactor"
			},
 
		}
	});
     
	 
});