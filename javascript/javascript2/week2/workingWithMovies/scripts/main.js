/* movies format 
{"title": "'71",
"year": 2014,
"rating": 7.2,
"votes": 41702,
"running_times": 5940} */

//movies list
const movies = getMovies();

//movies with a short title
const shortTitleMovies = movies.filter((movie) => {
    if(movie.title.length < 5){
        return movie;
    }
});

//long movie titles 
const longTitleMovies = movies.filter((movie) => {
    if(movie.title.length >= 50){
        return movie;
    }
});

//number of movies made between 1980-1989 (including both the years)
const numberOfMoviesBetween1980To1989 = movies.reduce((total, movie) => {
    if(movie.year > 1980 && movie.year < 1989){
        total++;
    }   
    return total;
},0);

//tag array 
const tag= {
    GOOD: 'Good', 
    AVERAGE: 'Average', 
    BAD: 'Bad'}


/**
 * create tag for movies array
 */
function createTag(){
    movies.forEach((movie) => {
        if(movie.rating >= 7) {
            movie['tag'] = tag.GOOD;
        } else if(movie.rating < 7 && movie.rating >= 4){
            movie['tag'] = tag.AVERAGE;
        } else {
            movie['tag'] = tag.BAD;
        } 
    });
}

//array to only the rating of the movies rated higher than 66
const rateMoreThan6 = movies.filter((movie) => {
    if(movie.rating > 6)
        return movie;
    })
    .map(movie => movie.rating);

/**
 * looking for a word in title of movies
 *
 * @param {*} word => missing word
 * @returns => list of movies includes 
 */
function searchMoviesWithTitle (word){
    
    const result = movies.filter((movie) => {
        if(movie.title.toLowerCase().includes(word.toLowerCase()))
            return movie;
    })
    return result;
}

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const totalNumberOfMovies = searchMoviesWithTitle('Surfer ').length 
+ searchMoviesWithTitle('AlIeN ').length 
+ searchMoviesWithTitle('Benjamin').length;
// console.log(searchMoviesWithTitle('Surfer'));

//duplicate
//find words in string that duplicated and return into array
String.prototype.wordDuplicate = function (){
    const list = this.split(' ')
    return list.filter((item, index) => list.indexOf(item) !== index);
}

//array of movies where a word in the title is duplicated
const arrayOfDuplicateTitle = movies.filter((item) => {
    if(item.title.wordDuplicate().length !== 0){
        return item;
    }
})

//mostly duplicated word in title
 function maxDuplicatedWord(title){
    title = title.wordDuplicate().sort();
    
    let cnt = 0;
    let max =0;
    let current = title[0];

    for (const word of title) {
        if(word !== current){
            if(cnt > max){
                max = cnt;
            }
            cnt = 1;
            current = word;
        } else {
            cnt++;
        }
    }

    if(cnt > max){
        return {
            word: current,
            value: cnt + 1
        }
    } else {
        return {
            word: current,
            value: max + 1
        }
    }
 }

//  find the max duplicated word 
 maxDuplicatedTitle = movies.reduce((mostDuplicate, item) => {
    mostDuplicate = maxDuplicatedWord(item.title).value > mostDuplicate.value ? maxDuplicatedWord(item.title) : mostDuplicate;
    return mostDuplicate;
 },{
    word: "",
    value: 0
 })

console.log(maxDuplicatedTitle);


