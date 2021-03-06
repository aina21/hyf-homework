/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * program can figures out what weekday the event is being held, 
 * if have how many days from today  an event is being held
 */

const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getEventWeekday(daysLeft) {
    if (daysLeft === undefined) {
        throw console.error("Please add days to left");
    } else {
        const today = new Date();
        const result = (daysLeft + today.getDay()) % 7
        return weekDay[result];
    }
}

//run program
console.log("Your event is on" + getEventWeekday(9));
console.log("Your event is on" + getEventWeekday(400));
console.log("Your event is on" + getEventWeekday());

