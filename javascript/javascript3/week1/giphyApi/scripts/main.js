const apiKey = "4DFTmacmi8wOh1wFZlAzNmzDq2hBkbh8";
const searchButton = document.querySelector("button");
const searchInput = document.querySelector(".form-search > input");
const valueOfResult = document.querySelector(".form-resultNum > input");
const gallery = document.querySelector(".gallery");

/**
 * convert to lower case
 *
 * @param {string} str
 * @returns => lowecase string
 */
function convertToLowerCase(str) {
    return str.trim().toLocaleLowerCase();
  }

/**
 * remove images
 *
 * @param {object} item => the parentNode
 */
function cleanItems(item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}

/**
 * for fetch api and convert to json
 *
 * @param {string} key => api key
 * @param {string} name => name for search
 * @param {number} limit => number of search
 */
function findGiphy(key, name, limit=25) {
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
      name +
      "&api_key=" +
      key +
      "&limit=" +
      limit +
      "&offset=0&rating=G&lang=en"
  )
    .then(resp => resp.json())
    .then(json => {
      display(json);
    });
}

/**
 * for display data in html page
 * use dom
 *
 * @param {json} dataOfJson
 */
function display(dataOfJson) {
  const urlArray = dataOfJson.data.map(
    element => element.images.fixed_height.url
  );
  urlArray.forEach(element => {
    const image = document.createElement("img");
    image.setAttribute("src", element);
    gallery.appendChild(image);
  });
}


searchButton.addEventListener("click", () => {
  cleanItems(gallery);
  findGiphy(apiKey, convertToLowerCase(searchInput.value), valueOfResult.value);
});
