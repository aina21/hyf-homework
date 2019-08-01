class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
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
    return this.products.filter((product) => {
      return product.name === productName.name;
    })
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
  renderProducts() {
    // Implement functionality here
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

    const listOfProducts = document.querySelector("ul.listOfProducts");
    this.products.forEach(product => {
      listOfProducts.appendChild(createList(listOfProducts, product.name));
    });
  }

  /**
   * get a user from api https://jsonplaceholder.typicode.com
   *
   * @param {number} id => user id
   * @returns => api value
   * @memberof ShoppingCart
   */
  getUser(id) {
    // Implement functionality here
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
  }
}



const flatscreen = new Product("flat-screen", 5000);
const flatscreen2 = new Product("flat-screen2", 5000);

const shoppingCart = new ShoppingCart([]);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(flatscreen2);


console.log(shoppingCart.getTotal());

shoppingCart.renderProducts();
console.log(shoppingCart.getUser(4));