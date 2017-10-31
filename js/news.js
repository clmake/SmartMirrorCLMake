$(document).ready(function(){
	var interval = setInterval(function() {
	
		//$("#news").html("<ul></ul>");

		  $.ajax({
		    type: "GET",
		    url: "http://www.lastampa.it/rss.xml",
		    dataType: "xml",
		    success: function(xml){
		    $(xml).find('item').each(function(index){
		      var title = $(this).find('title').text();
		      $("#news"+index).text(title);
		      //$("<li></li>").html(index).appendTo("#news ul");

		    });
		  },
		  error: function() {
		    alert("An error occurred while processing XML file.");
		  }
		  });

	},1000);
	
});