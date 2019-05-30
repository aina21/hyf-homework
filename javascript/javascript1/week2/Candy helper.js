/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * We are at the candystore and want to check how much candy can we buy with money that we want to spend.
 */


//amount of money that customer want to spend for buying deliciouse candys
const amountToSpend = Math.floor((Math.random() * 90) + 10);

//candy class
 class Candy{
     constructor(candyType, pricePerGram){
        this.candyType = candyType;
        this.pricePerGram = pricePerGram;
     }
     addCandy(weight){
         return Math.floor(this.pricePerGram * weight);
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
 function canBuyMoreCandy(boughtCandy){
    if(amountToSpend > boughtCandy){
        console.log("You can buy more, so please do!");
        return true;
    }
    else{
        console.log("Enough candy for you!");
        return false;
    }
 }

//run program
let boughtCandy = 0;    
console.log("You have " + amountToSpend + " amount to spend");
while(canBuyMoreCandy(boughtCandy))
{
    let candyType = Math.floor(Math.random() * 3);
    let weight = (Math.random() * 10).toFixed(2);
    console.log("You add "+ weight + " of " + candyTable[candyType].candyType + " to your basket.");

    boughtCandy += candyTable[candyType].addCandy(weight);
}
    
    
 
