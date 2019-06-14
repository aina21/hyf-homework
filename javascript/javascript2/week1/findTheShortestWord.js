
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

/**
 * function to find a shortest word
 *
 * @param {*} list array of words
 * @returns shortest word
 */
function findShortestWord(list) {
    // return list.reduce((smallest, word) => word.length < smallest.length ? word : smallest, danishWords[0])
    let smallest = list[0];
    for(word of list){
        smallest = word.length < smallest.length ? word : smallest;
    }
    return smallest;
}

//run
console.log(findShortestWord(danishWords));