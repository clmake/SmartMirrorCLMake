$(document).ready(function(){
	 var interval = setInterval(function() {

		 $("#time").html(new Date($.now()));
	
		},1000);
});