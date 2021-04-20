//variable to select the form itself
var cityFormEl = document.querySelector("#city-form");

//variable to select the city input
var cityInputEl = document.querySelector("#city");

//fetch API
var getWeather = function(cityID) {
    var myKey = '953df2735637440fe1a5a9f207d9928e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id='+ cityID + '&appid=' + myKey)
    .then(response => response.json())
    .then(data => console.log(data));
}

var formSubmitHandler = function(event) {
  event.preventDefault();
  var cityValue = cityFormEl.value.trim();

  if (cityValue) {
    getWeather(cityValue);
    cityInputEl.value= "";
  } else {
    alert("Please enter a valid City ID");
  }
};
  
  
cityFormEl.addEventListener("submit", cityFormEl);