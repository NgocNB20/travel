$().ready(function() {

    $.validator.addMethod("validatePassword", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");

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
				minlength: 8,
                validatePassword: true,
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