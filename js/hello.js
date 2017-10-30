$(document).ready(function(){
	 var interval = setInterval(function() {

		 $("#msgid").html(new Date($.now()));
	
		},1000);
});