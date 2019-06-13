/**
 * Javascript file for Hack Your Future, Javascript2, homework Week2
 * author: Ida Naderian
 * 
 * program should find shortest word in list
 */

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

/**
 * function to find a shortest word
 *
 * @param {*} list array of words
 * @returns shortest word
 */
function findShortestWord(list) {
    return list.reduce((smallest, word) => word.length < smallest.length ? word : smallest, danishWords[0])
}

//run
console.log(findShortestWord(danishWords));