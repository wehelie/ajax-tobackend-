
$(".check").on('click', function(){
	var target = $('.username-target'),
		feedback = $('.username-feedback'); 
	function changeFeedbackText(text)
	{
			feedback.text(text); 
	}

	function couldNotCheck(){
		changeFeedbackText('Could not check at this time'); 
	}
		$.ajax({

			url: 'username.php',
			type:'GET',
			data: {
				username:target.val()
			},
			dataType: 'json',
			success: function(data){
					if(data.available != undefined)
					{
						// defined
						if(data.available === true)
						{
							changeFeedbackText('That user name is available'); 
						}
					} else {
						couldNotCheck('Sorry, that username is not available'); 
					}
			},

			error: function(){
				couldNotCheck
			}
		});
});