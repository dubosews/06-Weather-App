var stateList = [
  {
      "name": "Alabama",
      "code": "01"
  },
  {
      "name": "Alaska",
      "code": "02"
  },
  {
      "name": "Arizona",
      "code": "04"
  },
  {
      "name": "Arkansas",
      "code": "05"
  },
  {
      "name": "California",
      "code": "06"
  },
  {
      "name": "Colorado",
      "code": "08"
  },
  {
      "name": "Connecticut",
      "code": "09"
  },
  {
      "name": "Delaware",
      "code": "10"
  },
  {
      "name": "District of Columbia",
      "code": "11"
  },
  {
      "name": "Florida",
      "code": "12"
  },
  {
      "name": "Georgia",
      "code": "13"
  },
  {
      "name": "Hawaii",
      "code": "15"
  },
  {
      "name": "Idaho",
      "code": "16"
  },
  {
      "name": "Illinois",
      "code": "17"
  },
  {
      "name": "Indiana",
      "code": "18"
  },
  {
      "name": "Iowa",
      "code": "19"
  },
  {
      "name": "Kansas",
      "code": "20"
  },
  {
      "name": "Kentucky",
      "code": "21"
  },
  {
      "name": "Louisiana",
      "code": "22"
  },
  {
      "name": "Maine",
      "code": "23"
  },
  {
      "name": "Maryland",
      "code": "24"
  },
  {
      "name": "Massachusetts",
      "code": "25"
  },
  {
      "name": "Michigan",
      "code": "26"
  },
  {
      "name": "Minnesota",
      "code": "27"
  },
  {
      "name": "Mississippi",
      "code": "28"
  },
  {
      "name": "Missouri",
      "code": "29"
  },
  {
      "name": "Montana",
      "code": "30"
  },
  {
      "name": "Nebraska",
      "code": "31"
  },
  {
      "name": "Nevada",
      "code": "32"
  },
  {
      "name": "New Hampshire",
      "code": "33"
  },
  {
      "name": "New Jersey",
      "code": "34"
  },
  {
      "name": "New Mexico",
      "code": "35"
  },
  {
      "name": "New York",
      "code": "36"
  },
  {
      "name": "North Carolina",
      "code": "37"
  },
  {
      "name": "North Dakota",
      "code": "38"
  },
  {
      "name": "Ohio",
      "code": "39"
  },
  {
      "name": "Oklahoma",
      "code": "40"
  },
  {
      "name": "Oregon",
      "code": "41"
  },
  {
      "name": "Pennsylvania",
      "code": "42"
  },
  {
      "name": "Puerto Rico",
      "code": "72"
  },
  {
      "name": "Rhode Island",
      "code": "44"
  },
  {
      "name": "South Carolina",
      "code": "45"
  },
  {
      "name": "South Dakota",
      "code": "46"
  },
  {
      "name": "Tennessee",
      "code": "47"
  },
  {
      "name": "Texas",
      "code": "48"
  },
  {
      "name": "Utah",
      "code": "49"
  },
  {
      "name": "Vermont",
      "code": "50"
  },
  {
      "name": "Virginia",
      "code": "51"
  },
  {
      "name": "Virgin Islands",
      "code": "78"
  },
  {
      "name": "Washington",
      "code": "53"
  },
  {
      "name": "West Virginia",
      "code": "54"
  },
  {
      "name": "Wisconsin",
      "code": "55"
  },
  {
      "name": "Wyoming",
      "code": "56"
  }
];




var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('searchBtn');
const searchList = [];




function getCoor() {
  // Replace `octocat` with anyone else's GitHub username
  var cityName = document.getElementById('cityName').value;
  var stateCode = document.querySelector('#selectState').value;
  var stateName = [];
  
  console.log(searchList);
  console.log(cityName);
  var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+cityName+',840&limit=5&appid=eab8561950e4b94c392acf01f1ed5a8c';
  console.log(geoUrl);
  fetch(geoUrl)
    .then(function(response) {
  
      return response.json();
    })
    .then(function(data) {
      
      console.log(data);

      //Get selected state name from drop list
      for(var i = 0; i < stateList.length; i++){
        if(stateList[i].code === stateCode){
          stateName.push(stateList[i].name);
          console.log(stateName);
        }
      }
      
      for(var d = 0; d < data.length; d++) {
        var countryR = data[d].country;
        var stateR = data[d].state;
        var cityR = data[d].name;
        var latR = data[d].lat;
        var lonR = data[d].lon;
        var arrPosSt = stateName.length;
        var arrPosStAdj = arrPosSt-1;
        console.log(countryR);
        console.log(stateR);
        console.log(cityR);
        console.log(latR);
        console.log(lonR);
        
        if(stateName[arrPosStAdj] === stateR) {
          console.log("STATE MATCH");

          var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latR+'&lon='+lonR+'&units=imperial&appid=3f433b13a70f353fc820368ee2470526';

          fetch(weatherUrl)
            .then(function(response) {
          
              return response.json();
            })
            .then(function(weatherResp) {

              // Response Pieced and Stored
              var weatherCurrent = weatherResp.current;
              var weatherDaily = weatherResp.daily;
              var weatherHourly = weatherResp.hourly;

              // Build Logs
              console.log("Weather Response: ", weatherResp);
              console.log("--> Current Weather: ", weatherCurrent);
              console.log("--> Daily Weather: ", weatherDaily);
              console.log("--> Hourly Weather: ", weatherHourly);

              // Card Build

                // Current Weather Card Variables
                var currentTemp = weatherCurrent.temp;
                var currentFeel = weatherCurrent.feels_like;
                var currentHumidity = weatherCurrent.humidity;
                var currentUvi = weatherCurrent.uvi;
                var currentWindSpeed = weatherCurrent.wind_speed;
                var currentWindDeg = weatherCurrent.wind_deg;
                var currentWindGust = weatherCurrent.temp;
                var currentWeather = weatherCurrent.weather;
                  var currentMain = currentWeather[0].main;
                  var currentDescription = currentWeather[0].description;
              
                // Wind Direction Conversion
                function windDirConvert(){
                  if(currentWindDeg < 348.75 && currentWindDeg > 11.25){
                    return "N"
                  }if(currentWindDeg < 11.25 && currentWindDeg > 33.75){
                    return "NNE"
                  }if(currentWindDeg < 33.75 && currentWindDeg > 56.25){
                    return "NE"
                  }if(currentWindDeg < 56.25 && currentWindDeg > 78.75){
                    return "ENE"
                  }if(currentWindDeg < 78.75 && currentWindDeg > 101.25){
                    return "E"
                  }if(currentWindDeg < 101.25 && currentWindDeg > 123.75){
                    return "ESE"
                  }if(currentWindDeg < 123.75 && currentWindDeg > 146.25){
                    return "SE"
                  }if(currentWindDeg < 146.25 && currentWindDeg > 168.75){
                    return "SSE"
                  }if(currentWindDeg < 168.75 && currentWindDeg > 191.25){
                    return "S"
                  }if(currentWindDeg < 191.25 && currentWindDeg > 213.75){
                    return "SSW"
                  }if(currentWindDeg < 213.75 && currentWindDeg > 236.25){
                    return "SW"
                  }if(currentWindDeg < 236.25 && currentWindDeg > 258.75){
                    return "WSW"
                  }if(currentWindDeg < 258.75 && currentWindDeg > 281.25){
                    return "W"
                  }if(currentWindDeg < 281.25 && currentWindDeg > 303.75){
                    return "WNW"
                  }if(currentWindDeg < 303.75 && currentWindDeg > 326.25){
                    return "NW"
                  }if(currentWindDeg < 326.25 && currentWindDeg > 348.75){
                    return "NNW"
                  }else{
                    return 
                  }
                };
                
                var currentWindDirection = windDirConvert();
                console.log("Direction Response: ", currentWindDirection);

                //Current Weather Card Build
                
                var currentCardTemplate = `
                  <div class="currentB">  
                    <div class="currentW">
                      <p class="currentWTxt">Current Weather</p>
                      <p class="location">`+cityR+`, `+stateName+` </p>
                    </div>
                    <div class="cTemp">
                      <div class="main">`+currentMain+`</div>
                      <p class="temp">`+currentTemp+` ºf</p>
                      <p class="feel">Feels like: `+currentFeel+` ºf</p>
                    </div>
                    <div class="data">
                      <p>Wind: `+currentWindSpeed+`mph `+currentWindDirection+`</p>
                      <p>Wind Gust: `+currentWindGust+`mph</p>
                      <p>Humidity: `+currentHumidity+`</p>
                      <p>UV Index: `+currentUvi+`</p>
                    </div>
                  </div>
                  `;
                 
                // Current Card Bundle  
                var currentRef = document.getElementById('current');
                var currentCardCreate = document.createElement('div');

                currentCardCreate.className = 'current';
                currentCardCreate.innerHTML = currentCardTemplate;
                currentRef.appendChild(currentCardCreate);
                
                // Forecast Build
                for(var f = 1; f < weatherDaily.length; f++) {
                
                // Forecast Variables
                var dailyTemp = weatherDaily[f].temp;
                var dailyMin = dailyTemp.min;
                var dailyMax = dailyTemp.max;
                var dailyWArr = weatherDaily[f].weather;
                var dailyDescription = dailyWArr[0].main;

                // Test Console Logs
                console.log("TempArr: ", dailyTemp);
                console.log("Min: ", dailyMin);
                console.log("Max: ", dailyMax);
                console.log("WArr: ", dailyWArr);
                console.log("description: ", dailyDescription);

                // Forecast Card Template
                var forecastCardTemplate =`
                  <div class="forecastDay">
                    <div class="max">
                      `+dailyMax+` ºf
                    </div>
                    <div class="min">
                      `+dailyMin+` ºf
                    </div>
                    <div class="dailyDescription">
                      `+dailyDescription+`
                    </div>
                  </div>
                `;

                // Current Card Bundle
                var forecastRef = document.getElementById('forecast');
                var forecastCardCreate = document.createElement('div');              

                  forecastCardCreate.className = 'current';
                  forecastCardCreate.innerHTML = forecastCardTemplate;
                  forecastRef.appendChild(forecastCardCreate);
                }
            })
        }
        
      }
    });
}



function stateCheck() {
  var check = document.querySelector('#selectState').value;
  searchList.push(check);
  console.log(check);
}

function stateListView() {
  var select = document.getElementById("selectState");
  console.log(stateList);

    for(var i = 0; i < stateList.length; i++) {
      var opt = stateList[i].name;
      var val = stateList[i].code;
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = val;
      el.id = "stateOpt";
      select.appendChild(el);
  }
};


fetchButton.addEventListener('click', getCoor);
stateListView();