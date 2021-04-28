var userFormEl = document.querySelector("#user-form");
var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".btn");
// var cityName = document.querySelector("#cityName");
// var temp = document.querySelector("#temp");
// var details = document.querySelector("#details");

//fetch API
button.addEventListener('click', function() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=953df2735637440fe1a5a9f207d9928e")
  .then(response => response.json())
  .then(data => {
    var nameValue = data.name;
    var tempValue = temp.name;
  })



.catch(err => alert("Incorrect city name!"))
})


//function for search
// var formSubmitHandler = function(event) {
//   event.preventDefault();
//   console.log(event);

//   var userCityInput = cityInputEl.value.trim();
//   if (userCityInput) {
//     getWeather(userCityInput);
//     userCityInput.value = "";
//   } else {
//     alert  ("Please enter a valid City");
//   }
// };
