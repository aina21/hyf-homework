/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will calculate how much time a series have taken as a percentage of an average lifespan of 80 years.
 */

//write prototype for checking empty string
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

const lifeYears = 27;

//series
 class Series {

    constructor(title, days, hours, minutes){
        this.title = title;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
    }

    pctOfLife(years) {
        const minutesOfLife = years * 525949.2; 
        const minutesOfSerie = (this.days * 1440) + (this.hours * 60) + Math.round(this.minutes);
        return (minutesOfSerie / minutesOfLife) * 100; 

    }
 }

 //all series 
 const seriesDurations = [];

 function addSeries(title, days, hours, minutes){
    if(title)
    seriesDurations.push(new Series(title, days, hours, minutes));
 }

 function showAllSeriesDurations(){
    let total = 0;
    for(series of seriesDurations)
    {
        console.log(series.title + " took " + series.pctOfLife(lifeYears).toFixed(2) + " of my life");
        total += series.pctOfLife(lifeYears);
    }
    console.log("In total that is " + total.toFixed(2) + " of my life.");
 }
 //run 
 addSeries("Game of Thrones", 8, 0, 30);
 addSeries("Breaking Bad", 4, 23, 30);
 addSeries("Narcos", 8, 22, 0);
 addSeries("Westworld", 9, 19, 0);
 addSeries("Mindhunter", 10, 5, 0);
 addSeries("", 10, 5, 0);

 showAllSeriesDurations();


