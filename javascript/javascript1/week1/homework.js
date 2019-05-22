/**
 * Javascript file for Hack Your Future, Javascript, homework Week1
 * author: Ida Naderian
 * this file includes
  1. Age-ify (A future age calculator)
  2. Goodboy-Oldboy (A dog age calculator)
  3. Housey pricey (A house price estimator)
  4. Ez Namey (Startup name generator) 
 */

//  1. Age-ify (A future age calculator)
const yearOfBirth = 1987;
const yearFuture = 2045;

const age = yearFuture - yearOfBirth;

console.log("Your age will be "+ age);

//  2. Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;

const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = [true, false];


if(shouldShowResultInDogYears[Math.floor(Math.random() * 2)]){
    console.log("Your dog will be " + dogYear + " human years old in " + yearFuture);
}else{
    console.log("Your dog will be " + (dogYear * 7) +" dog years old in " + yearFuture);
}


//  3. Housey pricey (A house price estimator)
//input data
const myFriend = ["Peter", "Juli"];
const houseWide = [8, 5];
const houseDeep = [10, 11];
const houseHigh = [10, 8];
const gardenSizeInM2 = [100, 70];
const paidPrice = [2500000, 1000000];

let volumeInMeters = 0;
let housePrice = 0;

for(let i = 0; i < 2; i++){
    volumeInMeters = houseHigh[i] * houseDeep[i] * houseWide[i];
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[i] * 300;

    if(housePrice >= paidPrice[i])
    {
        console.log(myFriend[i] + ", You got it from a good price")
    }else{
        console.log(myFriend[i] + ", It's too expensive");
    }
}

// 4. Ez Namey (Startup name generator) 
const firstWords = ["Easy", "Awesome", "Corporate", "Amazing", "Magnificent", "Wonderful", 
"Phenomenal", "Impressive", "Incredible", "Unbelievable"];
const secondWords = ["Company", "Operation", "Corporation", "Partnership", "Agency", "Institution", 
"multinational", "Group", "Business", "Firm"];

const randomNumber = [Math.floor(Math.random() * 10) , Math.floor(Math.random() * 10)];
const newStartupName = firstWords[randomNumber[0]] + " " + secondWords[randomNumber[1]]

console.log("The startup: \"" + newStartupName + "\" contains " + newStartupName.length + " characters");
