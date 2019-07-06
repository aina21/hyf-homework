const btnWeather = document.querySelector(".weatherInfo-btnClick");
const btnCurrentLocation = document.querySelector(
  ".weatherInfo-btnCurrentLocation"
);
const cityNameInput = document.querySelector("#city_name");
const apiKey = "8bed317d21c1ba3f4c6ba9f83e0ae4f9";

/**
 *
 *
 * @param {*} cityName
 */
function weatherInfo(cityName) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?&q=" +
      cityName +
      "&units=metric&appid=" +
      apiKey
  )
    .then(resp => resp.json())
    .then(json => {
      localStorage.clear();
      localStorage.setItem("city", JSON.stringify(json));
      display(json);
    });
}

function WeatherInfoCurrentLocation(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&appid=" +
      apiKey
  )
    .then(resp => resp.json())
    .then(json => {
      localStorage.clear();
      localStorage.setItem("city", JSON.stringify(json));
      display(json);
    });
}

/**
 * clean a node chiles
 *
 * @param {} node
 */
function cleanItems(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

/**
 * render map
 *
 * @param {number} lat => latitude
 * @param {number} lng => longitude
 */
function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector("#map");
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 15
  });

  console.log(map);
}

/**
 *display data in html
 *
 * @param {json} data
 */
function display(data) {
  // weather icon

  const iconcode = data.weather[0].icon;
  const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  document.querySelector("#wicon").setAttribute("src", iconurl);

  // location
  document.querySelector("#location").innerHTML = data.name;

  // temperature
  document.querySelector("#temp").innerHTML = `${data.main.temp} &degC`;

  // speed
  const wind = data.wind.speed;

  // sunset & sunrise
  const secSunrise = data.sys.sunrise;
  const timeSunrise = new Date(secSunrise * 1000);
  const timeStingSunrise = timeSunrise.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });
  const secSunset = data.sys.sunset;
  const timeSunset = new Date(secSunset * 1000);
  const timeStingSunset = timeSunset.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });

  // cloudy
  const cloudsData = data.weather[0].description;
  const cloudiness = cloudsData.charAt(0).toUpperCase() + cloudsData.slice(1);
  const tableDataLi = document.createElement("li");
  const tableDataUl = document.querySelector(".table .table_data");
  const tableTitle = document.querySelector(".table .table_title");

  tableTitle.style.display = "block";
  cleanItems(tableDataUl);
  tableDataLi.innerHTML = `
            <ul>
                <li>${wind}</li>
                <li>${timeStingSunrise}</li>
                <li>${timeStingSunset}</li>
                <li>${cloudiness}</li>
            </ul>
        `;
  tableDataUl.appendChild(tableDataLi);

  // map
  const latitude = data.coord.lat;
  const longitude = data.coord.lon;
  renderLocationOnGoogleMap(latitude, longitude);
}

btnWeather.addEventListener("click", function(event) {
  weatherInfo(cityNameInput.value);
});

btnCurrentLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    // renderLocationOnGoogleMap(currentLocation.latitude, currentLocation.longitude);
    WeatherInfoCurrentLocation(
      currentLocation.latitude,
      currentLocation.longitude
    );
  });
});

window.addEventListener("load", event => {
  
  if(localStorage.getItem("city") !== null){
    const data = JSON.parse(localStorage.getItem("city"));
    display(data);
  }

});
