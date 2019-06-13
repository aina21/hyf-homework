const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function findShortest(){
const shortest = '';
for(words of danishWords){
  if(words.lenghth < shortest.length) shortest = words;
}
return shortest;
}
console.log(findShortest(danishWords));