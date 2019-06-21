console.log('Script loaded');

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
const searchInput = document.querySelector('.search > input');
const countrySelect = document.querySelector('.country > select');
const sortSelect = document.querySelector('.sort > select');

const SORTOPTION = {
    NAME: 'name',
    EXPENSIVE: 'expensive',
    CHEAP: 'cheap'
}

/**
 * render product
 *
 * @param {*} list => product list
 */
function renderProducts(list) {
    const ul = document.querySelector("section.products > ul");


    clearList(ul);
    for (const product of list) {
        // const btnCart = document.createElement('button');
        // btnCart.innerHTML = "Add to cart"
        const li = document.createElement('li');

        // li.addEventListener('click',function(){
        //     const 
        // })

        li.appendChild(createList(product));
        // li.appendChild(btnCart);
        ul.appendChild(li);

    }

}

/**
 * create nested list
 *
 * @param {*} parent => parent node
 * @returns => ul 
 */
function createList(parent) {
    const ul = document.createElement('ul');
    const keys = Object.keys(parent);

    for (const key of keys) {
        const li = document.createElement('li');
        if (Array.isArray(parent[key])) {
            li.appendChild(createList(parent[key]));
        } else {
            li.innerHTML = parent[key];
            li.setAttribute('class', key)
        }
        ul.appendChild(li);
    }
    return ul;
}

/**
 * clear nodes for refrshing list
 *
 * @param {*} parent => parent node 
 */
function clearList(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

renderProducts(products);

//search name of product
searchInput.addEventListener('change', function () {
    result = products.filter((item) => {
        return item.name.includes(searchInput.value);
    })
    renderProducts(result);
})



//Showing products that ships to country
// countrySelect.addEventListener('change', function(){
//     result = products.filter((item) => {
//         return item.shipsTo.includes(countrySelect.value);
//     })
//     renderProducts(result);
//     // console.log(countrySelect.text);
// })

function convertToLowerCase(str) {
    return str.trim().toLocaleLowerCase();
}

countrySelect.addEventListener('change', function () {
    const selectedCountryName = convertToLowerCase(countrySelect.value);

    result = products.filter(item => {
        return item.shipsTo.some(shippingCountry => {
            return convertToLowerCase(shippingCountry) === selectedCountryName;
        });
    });

    renderProducts(result);

});

//sort list
sortSelect.addEventListener('change', function () {
    let result = products;
    if (sortSelect.value === SORTOPTION.NAME) {
        result = products.sort((obj1, obj2) => {
            return obj1.name > obj2.name ? 1 : -1;
        });
    } else if (sortSelect.value === SORTOPTION.CHEAP) {
        result = products.sort((obj1, obj2) => {
            return obj1.price > obj2.price ? 1 : -1;
        })
    } else if (sortSelect.value === SORTOPTION.EXPENSIVE) {
        result = products.sort((obj1, obj2) => {
            return obj1.price < obj2.price ? 1 : -1;
        })
    }

    renderProducts(result)

})

//add to the cart