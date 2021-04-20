var getWeather = function(cityID) {
    var myKey = '953df2735637440fe1a5a9f207d9928e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id='+ cityID + '&appid=' + myKey)
    .then(response => response.json())
    .then(data => console.log(data));
    }
  
  getWeather();