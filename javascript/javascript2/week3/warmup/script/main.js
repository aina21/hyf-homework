console.log("file loaded");
/**
 * 1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
 */
const title = document.querySelector(".h1");

setTimeout(() => {
  title.innerHTML = "Hello after 2.5 sconds";
}, 2500);

/**
 * 2. Create a function that takes 2 parameters: delay and stringToLog.
 * Calling this function should log out the stringToLog after delay seconds.
 * Call the function you have created with some different arguments.
 */

function delayTime(stringToLog, delay) {
  setTimeout(() => {
    title.innerHTML = stringToLog;
  }, delay);
}

// delayTime("Hello after 4 sconds", 4000);
delayTime("Hello after one scond", 1000);

/**
 * 3. Create a button in html.
 * When clicking this button, use the function you created in the previous task
 * to log out the text: "3.5 seconds after button is clicked"
 * 3.5 seconds after the button is clicked.
 */
const delayButton = document.querySelector(".btn_delay");
delayButton.addEventListener("click", () => {
  title.style.color = "black";
  delayTime("3.5 seconds after button is clicked", 3500);
});

/**
 * 4. Create two functions and assign them to two different variables.
 * One function logs out Earth, the other function logs out Saturn.
 * Now create a new third function that has one parameter: planetLogFunction.
 * The only thing the third function should do is call the provided parameter function.
 * Try call the third function once with the Earth function and once with the Saturn function.
 */

function showPlanet(planetLogFunction) {
  const PLANET = {
    earth: () => console.log("Hello from Earth"),
    saturn: () => console.log("Hello from Saturn")
  };
  return PLANET[planetLogFunction];
}

showPlanet("earth");

/**
 * 5. Create a button with the text called "Log location".
 * When this button is clicked
 * the location (latitude, longitude) of the user should be logged out
 * using this Geolocation API
 */

const locationButton = document.querySelector(".btn_location");

locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    // title.innerHTML =  `${position.coords.latitude} and ${position.coords.longitude}`;
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };

    // console.log(currentLocation);
    renderLocationOnGoogleMap(
      currentLocation.latitude,
      currentLocation.longitude
    );
  });
});

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

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: currentLocation.latitude, lng: currentLocation.longitude },
//     zoom: 12
//   });
// }
/**
 * 6. Now show that location on a map using fx the Google maps api
 */

/**
 * 7. Create a function called runAfterDelay.
 * It has two parameters: delay and callback.
 * When called the function should wait delay seconds and then call the provided callback function.
 * Try and call this function with different delays and different callback functions
 */

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}

runAfterDelay(10000, () => {
  title.innerHTML = "Hello from callback function after 10 seconds";
  title.style.color = "red";
});

runAfterDelay(30000, () => {
  title.innerHTML = "Hello from callback function after 30 seconds";
  title.style.color = "blue";
});

/**
 * 8. Check if we have double clicked on the page.
 * A double click is defined by two clicks within 0.5 seconds.
 * If a double click has been detected,
 * log out the text: "double click!"
 */

let clickCount = 0;

function doubleClick() {
  title.innerHTML = "double click!";
  title.style.color = "green";
}

document.body.addEventListener("click", function() {
  clickCount++;
  let singleClickTimer;
  if (clickCount === 1) {
    singleClickTimer = setTimeout(() => {
      clickCount = 0;
    }, 400);
  } else if (clickCount === 2) {
    clearTimeout(singleClickTimer);
    clickCount = 0;
    doubleClick();
  }
});

/**
 * Create a function called jokeCreator
 * that has three parameters: shouldTellFunnyJoke - boolean,
 * logFunnyJoke - function and logBadJoke - function.
 * If you set tellFunnyJoke to true it should call the logFunnyJoke
 * function that should log out a funny joke. And vice versa.
 */

function jokeCreator(shouldTellFunnyJoke = false, logFunnyJoke, logBadJoke) {
  return shouldTellFunnyJoke ? logFunnyJoke : logBadJoke;
}

function logFunnyJoke() {
  return "I tought a wolf to meditate, Now he's Aware Wolf";
}
function logBadJoke() {
  return `what is a big and red and wiggles in the sky?
              A jellycopter`;
}
console.log(jokeCreator(false, logFunnyJoke(), logBadJoke()));
