$().ready(function() {
    $.validator.addMethod("validateEmail", function (value, element) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.optional(element) || re.test(value);
    }, "Value is not email");

 

    //form_input
    $("#form_input").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
        onsubmit: false,
		rules: {
            "firtname": {
				required: true,
				maxlength: 50
			},
			"lastname": {
				required: true,
				maxlength: 50,
			},
			"phone": {
				required: true,
                maxlength: 11,
			},
			"desc": {
				required: true,
			}
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
			"phone": {
				required: "phone is not empty123",
				maxlength: "min length 11 charactor"
			},
			"desc": {
				required: "desc is not empty"				
			}
		}
	});
     
	 
});