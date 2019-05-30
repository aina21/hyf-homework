/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * program decide what the user should wear based on the temperature
 */

function chooseClothesBaseOnTemperature(temperature)
{
    const clothesToWear = {
        SPRING:"Light Sweater",
        SUMMER:"T-shirt",
        AUTUM:"Good Jacket",
        WINTER:"Hat and Gloves "
        };

    if(temperature > 25){
        return clothesToWear.SUMMER;
    } else if(temperature > 15 && temperature <= 25) {
        return clothesToWear.SPRING;
    } else if(temperature > 5 && temperature <= 15){
        return clothesToWear.AUTUM;
    } else if(temperature <= 5){
        return clothesToWear.WINTER;
    }
}

//run program
console.log("I recommend you to wear "+chooseClothesBaseOnTemperature(30));

