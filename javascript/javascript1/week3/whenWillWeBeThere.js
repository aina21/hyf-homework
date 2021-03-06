/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will calculate the time it will take to arrive at your destination
 */

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
    timeToArrive: function(){
        const time = this.destinationDistance / this.speed;
        return time;
    },
    timeConventer: function(){
        const time = this.timeToArrive()
        const hour = parseInt(time) ;
        let minute =  parseInt((time - Math.floor(time)) * 60 );
        return hour + " hours and " + minute + " minutes" ;

    }
  };

//run
const travelTime = travelInformation.timeConventer();
console.log(travelTime); // 8 hours and 38 minutes