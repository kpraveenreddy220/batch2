$(document).ready(function(){
  $('#login-form').submit(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  let email = $('#exampleInputEmail1').val();
	  
	  if(!email){
		  let emailElement = $('#emailHelp');
		  emailElement.text("Please enter valid email id");
		  emailElement.css('color', 'red');
	  }
	  
  });
	
	
});