$(document).ready(function(){
	 var interval = setInterval(function() {

	 	time = new Date();

	 	mese = time.getMonth();
	 	giorno = time.getDate();
	 	anno = time.getFullYear();

	 	var month=new Array();
		month[0]="Gennaio";
		month[1]="Febbraio";
		month[2]="Marzo";
		month[3]="Aprile";
		month[4]="Maggio";
		month[5]="Giugno";
		month[6]="Luglio";
		month[7]="Agosto";
		month[8]="Settembre";
		month[9]="Ottobre";
		month[10]="Novembre";
		month[11]="Dicembre";

		ora = time.getHours();
		minuti = time.getMinutes();
		secondi = time.getSeconds();
		
		html = '<p>'+ora+':'+minuti+':'+secondi+'</p>'+'<p>'+giorno+'  '+month[mese]+'  '+anno+'</p>';

		$("#time").html(html);
	
		},1000);
});