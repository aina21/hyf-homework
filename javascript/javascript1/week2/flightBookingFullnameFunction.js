/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * program can print fullname of customer
 * and also have option to write formal fullname
 */

//write prototype for checking empty string
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function getFullname(firstName, lastName, useFormalName) {
    const fullname = firstName + " " + lastName;
    if(fullname.isEmpty()){
        throw console.error("Please add your name");
    }else if (useFormalName) {
        return "Lord " + fullname;
    } else {
        return fullname;
    }
}

//run program
console.log(getFullname("Benjamin", "Hughes", true));
console.log(getFullname("Benjamin", "Hughes", false));
console.log(getFullname("Benjamin", "", false));
console.log(getFullname("", "Hughes", true));
// console.log(getFullname("", "", true));

