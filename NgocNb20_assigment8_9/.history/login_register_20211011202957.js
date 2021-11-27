$().ready(function() {
	$("#form-1").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
            "username": {
				required: true,
				maxlength: 15
			},
			"email": {
				required: true,
				maxlength: 15
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
				required: "Bắt buộc nhập username",
				maxlength: "Hãy nhập tối đa 15 ký tự"
			},
			"email": {
				required: "Bắt buộc nhập username",
				maxlength: "Hãy nhập tối đa 15 ký tự"
			},
			"password": {
				required: "Bắt buộc nhập password",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			},
			"password_confirmation": {
				equalTo: "Hai password phải giống nhau",
				minlength: "Hãy nhập ít nhất 8 ký tự"
			}
		}
	});
});