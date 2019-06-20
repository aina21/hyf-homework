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
// const sortSelect = document.querySelector('.sort > select');

console.log(countrySelect);

/**
 * render product
 *
 * @param {*} list => product list
 */
function renderProducts(list) {
    const ul = document.querySelector("section.products > ul");
    clearList(ul);
    for (const product of list) {
        const li = document.createElement('li');
        li.appendChild(createList(product));
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
        if(Array.isArray(parent[key])){
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
function clearList(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

renderProducts(products);

//search name of product
searchInput.addEventListener('change', function(){
    result = products.filter((item) => {
        return item.name.includes(searchInput.value);
    })
    renderProducts(result);
})

//Showing products that ships to country
countrySelect.addEventListener('change', function(){
    result = products.filter((item) => {
        return item.shipsTo.includes(countrySelect.value);
    })
    renderProducts(result);
    console.log(countrySelect.text);
})

//sort list

