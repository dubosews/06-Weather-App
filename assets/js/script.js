var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var locationName = document.getElementById("search").value;
  var searchState = "32";
  var requestGeo = 'http://api.openweathermap.org/geo/1.0/direct?q='+locationName+'&limit=1&appid=eab8561950e4b94c392acf01f1ed5a8c';
  fetch(requestGeo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      console.log(locationName)
      console.log(requestGeo)
      console.log(data[0].lat)
      var searchLat = data[0].lat;
      var searchLon = data[0].lon;
      var cityName = data[0].name;
      var stateName = data[0].state;
      
      var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+searchLat+'&lon='+searchLon+'&exclude=hourly,minutely&units=imperial&appid=3f433b13a70f353fc820368ee2470526';
      fetch(requestUrl)
      .then(function (weatherResp) {
        return weatherResp.json();
      })
      .then(function(weatherData){
        console.log(weatherData)
        console.log(weatherData.current)
        var weatherCurrent = weatherData.current;
        var weatherForecast = weatherData.daily;
        console.log(weatherCurrent.humidity);
        displayWeather(weatherData);
        displayForecast(weatherForecast);
      });
function displayWeather(weatherDisp){
  console.log(weatherDisp);
  var currentWeather = weatherDisp.current;
  document.getElementById("currentWeather").innerHTML =
          `<div class="currentCard">
              <h1><u>Current Forecast</u></h1>
              <h3>`+cityName+`, `+stateName+`</h3>
              <h4>(date)</h4>
              <p>Current Temperature: <div class="weatherData">`+currentWeather.temp+`°F</div></p>
              <p>Wind Speed: <div class="weatherData">`+currentWeather.wind_speed+` mph</div></p>
              <p>Humidity: <div class="weatherData">`+currentWeather.humidity+`</div></p>
              <p>UV Index: <div class="weatherData">`+currentWeather.uvi+`</div></p>
          </div>`;
};
function displayForecast(forecastData) {
  console.log(forecastData);
  
  for (var i = 0; i < forecastData.length; i++) {
    var forecastTemp = forecastData[i].temp;
    var minTemp = forecastTemp.min;
    var maxTemp = forecastTemp.max;
    console.log(minTemp, maxTemp);
    
    var forcastCard =
          `<div class="currentCard">
              <h1><u>Daily Forecast</u></h1>
              <h4>(date)</h4>
              <p>Min Temp: <div class="weatherData">`+minTemp+`°F</div></p>
              <p>Max Temp: <div class="weatherData">`+maxTemp+`°F</div></p>
              <p>Wind Speed: <div class="weatherData">`+forecastData[i].wind_speed+` mph</div></p>
              <p>Humidity: <div class="weatherData">`+forecastData[i].humidity+`</div></p>
              <p>UV Index: <div class="weatherData">`+forecastData[i].uvi+`</div></p>
          </div>`;
    document.getElementById("weatherForecast").innerHTML += forcastCard;
  }
}
      // for (var i = 0; i < data.length; i++) {
      //   //Creating a h3 element and a p element
      //   var userName = document.createElement('h3');
      //   var userUrl = document.createElement('p');

      //   //Setting the text of the h3 element and p element.
      //   userName.textContent = data[i].login;
      //   userUrl.textContent = data[i].url;

      //   //Appending the dynamically generated html to the div associated with the id="users"
      //   //Append will attach the element as the bottom most child.
      //   usersContainer.append(userName);
      //   usersContainer.append(userUrl);
      // }
    });
}
fetchButton.addEventListener('click', getApi);
