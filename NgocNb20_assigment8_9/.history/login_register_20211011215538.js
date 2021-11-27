$().ready(function() {
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
				maxlength: 50
			},
			"password": {
				required: true,
				minlength: 8
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