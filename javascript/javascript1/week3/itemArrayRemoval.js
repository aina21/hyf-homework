/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will remove special name from names list 
 */

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
function removeFromList(list , name) {
    const index = list.indexOf(name);
    list.splice(index, 1);
}

// Code done
removeFromList(names, nameToRemove);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']