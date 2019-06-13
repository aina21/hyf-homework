console.log('Script loaded');

console.log(getAvailableProducts());


//my code

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

function renderProducts(list) {
    const ul = document.querySelector("section.products > ul");
    for (const product of list) {
        const li = document.createElement('li');
        li.appendChild(createList(product));
        ul.appendChild(li);
    }

}



function createList(parent) {
    const ul = document.createElement('ul')
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

renderProducts(products);