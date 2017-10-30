$(document).ready(function(){
	function news() {
	
		$("#news").html("<ul></ul>");

		  $.ajax({
		    type: "GET",
		    url: "http://www.lastampa.it/rss.xml",
		    dataType: "xml",
		    success: function(xml){
		    $(xml).find('item').each(function(){
		      var sTitle = $(this).find('title').text();
		      $("<li></li>").html(sTitle).appendTo("#news ul");
		    });
		  },
		  error: function() {
		    alert("An error occurred while processing XML file.");
		  }
		  });

	}
	setTimeout(news, 1000);
});