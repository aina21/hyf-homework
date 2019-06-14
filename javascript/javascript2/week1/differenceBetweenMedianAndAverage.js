
// use the functions on this array
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];


/**
 * average function
 *
 * @param {*} list array of numbers
 * @returns average number
 */
function average(list) {

    // sum = list.reduce((sum, price) => sum += price)
    let sum = 0;
    for(item of list){
        sum += item;
    }
    return sum / list.length;
}


/**
 * median function
 *
 * @param {*} list array of numbers
 * @returns median
 */
function median(list) {
    const listLength = list.length / 2;
    //sort a array
    list.sort();

    //find a median
    if (list.length % 2 === 0) {
        //When there are two middle numbers we average them.
        return (list[listLength / 2] + list[listLength / 2 - 1]) / 2;
    } else {
        return list[listLength - 1 / 2];
    }
}


/**
 *create a object of median and average
 *
 * @param {*} list array of numbers
 * @returns object
 */

function createStatistics(list) {
    return {
        average: average(list),
        median: median(list)
    }
}

//run
const sampleObject = createStatistics(housePrices);
console.log("Average number of list ", sampleObject.average,
    " and Median number of list ", sampleObject.median);