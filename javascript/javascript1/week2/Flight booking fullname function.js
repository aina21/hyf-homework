/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * program can print fullname of customer
 * and also have option to write formal fullname
 */

 const firstName = "Benjamin";
 const lastName = "Hughes";
 let useFormalName = true;

 function getFullname(firstName, lastName, useFormalName)
{
    let fullname = firstName + " " +lastName;
    if(useFormalName){
        return "Lord " + fullname;
    } else {
        return fullname;
    }
}

//run program
console.log(getFullname(firstName, lastName, useFormalName));

