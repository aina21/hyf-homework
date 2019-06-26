console.log("Script loaded");

console.log(getAvailableProducts());

/*
[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},
...]
*/

const products = getAvailableProducts();
const searchInput = document.querySelector(".search > input");
const countrySelect = document.querySelector(".country > select");
const sortSelect = document.querySelector(".sort > select");

/**
 * render product
 *
 * @param {Array} list => product list
 */
function renderProducts(list) {
  const ul = document.querySelector("section.products > ul");

  clearList(ul);
  for (const product of list) {
    const btnCart = document.createElement("button");
    btnCart.innerHTML = "Add to cart";
    const li = document.createElement("li");

    //add to cart
    btnCart.addEventListener("click", function() {
      const cart = document.querySelector("section.cart > ul");
      console.log(cart);
      const liCart = document.createElement("li");
      liCart.innerHTML = `
            <li>
                <div class="name">${product.name}</div>
                <div class="price">${product.price}</div>
            </li>
            `;
      cart.appendChild(liCart);
    });

    li.appendChild(createList(product));
    li.appendChild(btnCart);
    ul.appendChild(li);
  }
}

/**
 * create nested list
 *
 * @param {object} parent => parent node
 * @returns => ul
 */
function createList(parent) {
  const ul = document.createElement("ul");
  const keys = Object.keys(parent);

  for (const key of keys) {
    const li = document.createElement("li");
    if (Array.isArray(parent[key])) {
      li.appendChild(createList(parent[key]));
    } else {
      li.innerHTML = parent[key];
      li.setAttribute("class", key);
    }
    ul.appendChild(li);
  }
  return ul;
}

/**
 * clear nodes for refrshing list
 *
 * @param {object} parent => parent node
 */
function clearList(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

renderProducts(products);

/**
 * convert to lower case
 *
 * @param {string} str
 * @returns
 */
function convertToLowerCase(str) {
  return str.trim().toLocaleLowerCase();
}
/**
 * filter by country name
 *
 * @param {array} productsList => list of products
 * @param {string} countryName => country name that we look for
 * @returns => array list of filtered product
 */
function filterByCountryName(productsList, countryName) {
  countryName = convertToLowerCase(countryName);

  if (!countryName) {
    return productsList;
  }

  return productsList.filter(product => {
    for (let shippingCountry of product.shipsTo) {
      shippingCountry = convertToLowerCase(shippingCountry);
      if (shippingCountry === countryName) {
        return true;
      }
    }

    return false;
  });
}
/**
 * filter by product name
 *
 * @param {array} productsList => list of product
 * @param {string} searchText
 * @returns => array list of filtered product
 */
function filterByName(productsList, searchText) {
  searchText = convertToLowerCase(searchText);

  if (!searchText) {
    return productsList;
  }

  return productsList.filter(product => {
    const name = convertToLowerCase(product.name);
    return name.includes(searchText);
  });
}

/**
 * sort array
 *
 * @param {array} productsList => list of products
 * @param {string} value => sort option
 * @returns => array list of product after sort
 */
function sortList(productsList, value) {
  const SORTOPTION = {
    name: { prop: "name", asc: true },
    cheap: { prop: "price", asc: true },
    expensive: { prop: "price", asc: false }
  };

  let result;
  if (SORTOPTION[value].asc) {
    result = productsList.sort((obj1, obj2) => {
      return obj1[SORTOPTION[value].prop] > obj2[SORTOPTION[value].prop]
        ? 1
        : -1;
    });
  } else {
    result = productsList.sort((obj1, obj2) => {
      return obj1[SORTOPTION[value].prop] < obj2[SORTOPTION[value].prop]
        ? 1
        : -1;
    });
  }

  return result;
}

/**
 *refresh product view with filter
 *
 */
function refreshProductsView() {
  let filteredProducts = filterByCountryName(products, countrySelect.value);
  filteredProducts = filterByName(filteredProducts, searchInput.value);
  filteredProducts = sortList(filteredProducts, sortSelect.value);

  renderProducts(filteredProducts);
}

//events
searchInput.addEventListener("keyup", refreshProductsView);
countrySelect.addEventListener("change", refreshProductsView);
sortSelect.addEventListener("change", refreshProductsView);

// //search name of product
// searchInput.addEventListener("change", function() {
//   result = products.filter(item => {
//     return item.name.includes(searchInput.value);
//   });
//   renderProducts(result);
// });

// /**
//  * this function convert string to lowercase
//  *
//  * @param {string} str
//  * @returns => string in lowercase
//  */

// function filterByName(){

// }
// countrySelect.addEventListener("change", function() {
//   const selectedCountryName = convertToLowerCase(countrySelect.value);

//   result = products.filter(item => {
//     return item.shipsTo.some(shippingCountry => {
//       return convertToLowerCase(shippingCountry) === selectedCountryName;
//     });
//   });

//   renderProducts(result);
// });

//sort list
// sortSelect.addEventListener("change", function() {

//   let result = products;
//   if (sortSelect.value === SORTOPTION.NAME) {
//     result = products.sort((obj1, obj2) => {
//       return obj1.name > obj2.name ? 1 : -1;
//     });
//   } else if (sortSelect.value === SORTOPTION.CHEAP) {
//     result = products.sort((obj1, obj2) => {
//       return obj1.price > obj2.price ? 1 : -1;
//     });
//   } else if (sortSelect.value === SORTOPTION.EXPENSIVE) {
//     result = products.sort((obj1, obj2) => {
//       return obj1.price < obj2.price ? 1 : -1;
//     });
//   }

//   renderProducts(result);
// });
