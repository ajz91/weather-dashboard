//variable to select the form itself
var cityFormEl = document.querySelector("#city-form");
//variable to select the city input
var cityInputEl = document.querySelector("#cityInput");

var formSubmitHandler = function(event) {
  event.preventDefault();
  console.log(event);

  var userCityInput = cityInputEl.value.trim();
  if (userCityInput) {
    getWeather(userCityInput);
    userCityInput.value = "";
  } else {
    alert  ("Please enter a valid City");
  }
};

//fetch API
var getWeather = function(cityName) {
    var myKey = '953df2735637440fe1a5a9f207d9928e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id='+ cityName + '&appid=' + myKey)
    .then(response => response.json())
    .then(data => console.log(data));
}
  
  
cityFormEl.addEventListener("submit", formSubmitHandler);