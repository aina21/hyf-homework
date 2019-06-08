/**
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * author: Ida Naderian
 * 
 * program will show how long user use activites
 */

// class Activity{
//     constructor(date, activity, duration){
//         this.date = date;
//         this.activity = activity;
//         this.duration = duration;
//     }
   
    
// }
function createActivity(date, activity, duration){
    return {
        date = date,
        activity = activity,
        duration = duration
    }
}
const activities = [];
function addActivity(date, activity, duration){
    activities.push(new Activity(date, activity, duration));
}

function showStatus(limit = false, limitTime = 0){
    let minutes = activities.reduce((runningSum,activity) => (runningSum + activity.duration),0);
    let status;
    if (!Array.isArray(activities) || !activities.length){
        status = "activites list is empty";
    } else if(limit && minutes > limitTime){
                    console.log("You have reached your limit, no more smartphoning for you!");
            } else {
        status = "You have added " + activities.length + " activities. They amount to " + minutes + " min. of usage";
    }
    return status;
}
 
function findSpecificDay(date){
    const activitesInSpecificDate = activities.filter(item => {
        if(item.date === date){
            return item
        }
    });
    if (!Array.isArray(activitesInSpecificDate) || !activitesInSpecificDate.length){
        return "activites list is empty";
    }
    return activitesInSpecificDate;
}

function getMaximumDurationActivity(){
    
    return activities.reduce((max, item) => {
        if(item.duration > max) {
            max = item.duration;
          }
          return max;
    },0) 
  }

//run
addActivity(createActivity(Date.UTC(2019, 4, 21)).toLocaleDateString("en-UE"),'youtube',30);
addActivity(createActivity(Date.UTC(2019, 5, 1)).toLocaleDateString("en-UE"),'facebook',20);
addActivity(createActivity(Date.UTC(2019, 5, 1)).toLocaleDateString("en-UE"),'telegram',40);
addActivity(createActivity(Date.UTC(2019, 5, 3)).toLocaleDateString("en-UE"),'telegram',40);
addActivity(createActivity(Date.UTC(2019, 5, 5)).toLocaleDateString("en-UE"),'telegram',40);
addActivity(createActivity(Date.UTC(2019, 5, 3)).toLocaleDateString("en-UE"),'telegram',40);


// console.log(activities);
// console.log(showStatus(true, 40));
// console.log(findSpecificDay('6/1/2019'))
console.log(getMaximumDurationActivity());