/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * We are at the candystore and want to check how much candy can we buy with money that we want to spend.
 */


//amount of money that customer want to spend for buying deliciouse candys
const amountToSpend = Math.floor((Math.random() * 90) + 100);

//candy class
class Candy {
    constructor(candyType, pricePerGram) {
        this.candyType = candyType;
        this.pricePerGram = pricePerGram;
    }
    addCandy(weight) {
        return this.pricePerGram * weight;
    }
};

//candy table is store candy options
const candyTable = [
    new Candy("Sweet", 0.5),
    new Candy("Chocolate", 0.7),
    new Candy("Toffee", 1.1),
    new Candy("Chewing-gum", 0.03)
]

//check if we have more buget for buy more candys
function canBuyMoreCandy(total) {
    if (amountToSpend > total) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

//show basket
function showBasket() {
    for (const candyT of candyTable) {
        let weightTotal = 0;
        for (const candy of boughtCandy) {
            if (candy.type === candyT.candyType) {
                weightTotal += candy.weight;
            };
        }
        console.log(`you have ${candyT.candyType} and total weight of it is ${weightTotal}`);
    }
}

//run program
const boughtCandy = [];
total = 0;
console.log(`You have ${amountToSpend} amount to spend`);
while (canBuyMoreCandy(total)) {
    let candyType = Math.floor(Math.random() * 4);
    let weight = Math.random() * 10;

    boughtCandy.push({
        type: candyTable[candyType].candyType,
        weight: weight
    });

    total += candyTable[candyType].addCandy(weight);
}

console.log(`In your basket you have: `)
showBasket();


