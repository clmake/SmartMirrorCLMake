// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Turin, IT',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>'+'<p>'+weather.city+'</p>'+'<p>'+weather.currently+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});