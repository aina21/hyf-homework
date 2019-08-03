class Product {
  constructor(name, price, currentCurrency = "DKK") {
    this.name = name;
    this.price = price;
    this.currentCurrency = currentCurrency;
  }

  changePrice(price) {
    this.price = price;
  }
  /**
   * exchange current currency and price
   *
   * @param {string} currency
   * @memberof Product
   */
  convertToCurrency(currency) {
    const apiKey = "62eba05a1eaf281ad316";
    return fetch(
      `https://free.currconv.com/api/v7/convert?q=${
        this.currentCurrency
      }_${currency}&compact=ultra&apiKey=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        this.currentCurrency = currency;
        const newPrice =
          this.price * data[`${this.currentCurrency}_${currency}`];
        this.changePrice(newPrice);
      })

      .catch(error => console.error(error));
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  /**
   * add product to shopping cart
   *
   * @param {Product} product
   * @memberof ShoppingCart
   */
  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  /**
   *remove product from shopping cart
   *
   * @param {Product} product
   * @memberof ShoppingCart
   */
  removeProduct(product) {
    // Implement functionality here
    const removeIndex = this.products.indexOf(product);
    this.products.splice(removeIndex, 1);
    this.renderProduct();
  }

  /**
   * search products in shopping cart
   *
   * @param {string} productName
   * @returns => list of product
   * @memberof ShoppingCart
   */
  searchProduct(productName) {
    // Implement functionality here
    productName = productName.trim().toLocaleLowerCase();
    return this.products.filter(product => {
      return product.name === productName;
    });
  }

  /**
   * calculate total price
   *
   * @returns => total number
   * @memberof ShoppingCart
   */
  getTotal() {
    // Implement functionality here
    return this.products.reduce((total, product) => {
      total += product.price;
      return total;
    }, 0);
  }

  /**
   * render the products to html
   *
   * @memberof ShoppingCart
   */
  renderProduct() {
    /**
     *
     *
     * @param {DOM-element} parent
     * @param string data
     * @returns => DOM-element
     */
    function createList(parent, data) {
      const list = document.createElement("li");
      list.innerHTML = data;
      parent.appendChild(list);

      return list;
    }

    /**
     *
     *
     * @param {DOM-element} parent
     * @param {boolean} [isAddedToCart=false]
     */
    function addActionButton(parent) {
      const activeButton = document.createElement("button");
      activeButton.innerHTML = "delete";
      parent.appendChild(activeButton);

      return activeButton;
    }

    const listOfProducts = document.querySelector("ul.listOfProducts");
    listOfProducts.innerHTML = "";

    this.products.forEach(product => {
      const productElem = createList(listOfProducts, product.name);
      console.log(typeof product.price);
      createList(productElem, product.price);
      const that = this;

      listOfProducts.appendChild(productElem);

      addActionButton(productElem).addEventListener("click", function() {
        that.removeProduct(product);
      });
    });
    createList(listOfProducts, `Total price: ${this.getTotal()}`);
  }

  /**
   * get a user from api https://jsonplaceholder.typicode.com
   *
   * @param {number} id => user id
   * @returns => api value
   * @memberof ShoppingCart
   */
  getUser(userId) {
    // Implement functionality here
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.username = data.username;
        const userInfoElem = document.querySelector("div.userInfo");
        userInfoElem.innerHTML = `<h1>${this.username}</h1>`;
        this.renderProduct();
      })
      .catch(error => console.error(error));
  }
}

const productList = [
  new Product("flat-screen", 5000),
  new Product("mobile", 10000),
  new Product("computer", 15000),
  new Product("smart watch", 4000)
];

const shoppingCart = new ShoppingCart([]);
shoppingCart.addProduct(productList[0]);
shoppingCart.addProduct(productList[3]);
shoppingCart.addProduct(productList[2]);

const searchInput = document.querySelector("#search-input");
const currencySelect = document.querySelector("#currency");
const addButton = document.querySelector(".addBtn");

function render() {
  const productDetailList = document.querySelector("#products");

  productList.forEach(product => {
    const productOptionElem = document.createElement("option");
    productOptionElem.innerHTML = product.name;
    productDetailList.appendChild(productOptionElem);
  });

  shoppingCart.getUser(4);
}

//change currency
currencySelect.addEventListener("change", () => {
  // shoppingCart.products.forEach(product => {
  //   product.convertToCurrency(currencySelect.value);
  // });
  Promise.all(shoppingCart.products.map(product => {
    return product.convertToCurrency(currencySelect.value);
  })).then(data => {
    shoppingCart.renderProduct();
  });
});

//add new product
addButton.addEventListener("click", function() {
  productList.forEach(item => {
    if (item.name === searchInput.value) {
      shoppingCart.addProduct(item);
    }
  });

  shoppingCart.renderProduct();
});

render();
