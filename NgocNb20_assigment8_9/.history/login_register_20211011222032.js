$().ready(function() {

    $.validator.addMethod("validateEmail", function (value, element) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.optional(element) || re.test(value);
    }, "Value is not email");

	$("#form-1").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
            "username": {
				required: true,
				maxlength: 50
			},
			"email": {
				required: true,
				maxlength: 50,
                validateEmail: true,
			},
			"password": {
				required: true,
				minlength: 8,
			},
			"password_confirmation": {
				equalTo: "#password",
				minlength: 8
			}
		},
		messages: {
            "username": {
				required: "user is not empty",
				maxlength: "max length 50 character"
			},
			"email": {
				required: "email is not empty",
				maxlength: "max length 50 charactor"
			},
			"password": {
				required: "password is not empty",
				minlength: "min length 8 charactor"
			},
			"password_confirmation": {
				equalTo: "Re password false"				
			}
		}
	});
});