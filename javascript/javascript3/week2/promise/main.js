console.log("loaded");

/**
 *  return promise that resolves after the resolveAfter seconds has passed.
 *
 * @param {number} resolveAfter => seconds
 * @returns => promise
 */
function setTimeoutPromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`I am called asynchronously after ${resolveAfter}`);
    }, resolveAfter * 1000);
  });
}

/**
 * get a current location
 *
 * @returns => promise
 */
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const currentLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
        resolve(currentLocation);
      },
      err => {
        error = {
          code: err.code,
          message: err.message
        };
        reject(error);
      }
    );
  });
}

//run
setTimeoutPromise(6).then(console.log);
setTimeoutPromise(3).then(console.log);
getCurrentLocation()
  .then(position => {
    // called when the users position is found
    console.log(position);
  })
  .catch(error => {
    // called if there was an error getting the users location
    console.log(error);
  });
