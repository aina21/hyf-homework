/* movies format 
{"title": "'71",
"year": 2014,
"rating": 7.2,
"votes": 41702,
"running_times": 5940} */

//movies list
const movies = getMovies();

/** 
* 1.Create an array of movies containing the movies with a short title (you define what short means)
*/
const shortTitleMovies = movies.filter(movie => {
  if (movie.title.length < 5) {
    return movie;
  }
});

/** 
 * 2.Create an array of movie titles with long movie titles
 */ 
const longTitleMovies = movies.filter(movie => {
  if (movie.title.length >= 50) {
    return movie;
  }
});

/**
 * 3.Count the number of movies made between 1980-1989 (including both the years)
 */
const moviesFrom80s = movies.filter((total, movie) => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    total++;
  }
  return total;
}, 0);
console.log('3. Count of movies from 80s = ', moviesFrom80s.length);


/**
 * 4.Create a new array that has an extra key called tag. 
 * The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
 */

//tag array
const tag = {
  GOOD: "Good",
  AVERAGE: "Average",
  BAD: "Bad"
};

function createTag(movie) {
    if (movie.rating >= 7) {
      movie["tag"] = tag.GOOD;
    } else if (movie.rating < 7 && movie.rating >= 4) {
      movie["tag"] = tag.AVERAGE;
    } else {
      movie["tag"] = tag.BAD;
    }
}

movies.forEach(createTag);

/** 
 * Using chaining, 
 * first filter the movies array to only contain the movies rated higher than 6.
 *  Now map the movies array to only the rating of the movies.
*/
const rateMoreThan6 = movies
  .filter(movie => {
    if (movie.rating > 6) return movie;
  })
  .map(movie => movie.rating);

/**
 * looking for a word in title of movies
 *
 * @param {*} word => missing word
 * @returns => list of movies includes
 */
function splitIntoWords(word) {
  return word.toLowerCase().split(/[^a-z0-9+]+/gi);
}

function searchMoviesWithTitle(word) {
  const result = movies.filter(movie => {
    if (splitIntoWords(movie.title).includes(word.toLowerCase())) return movie;
  });
  return result;
}

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const totalNumberOfMovies =
  searchMoviesWithTitle("Surfer").length +
  searchMoviesWithTitle("AlIeN").length +
  searchMoviesWithTitle("Benjamin").length;
// console.log(totalNumberOfMovies); => 11

//duplicate
//find words in string that duplicated and return into array
String.prototype.wordDuplicate = function() {
  const list = this.split(" ");
  return list.filter((item, index) => list.indexOf(item) !== index);
};

//array of movies where a word in the title is duplicated
const arrayOfDuplicateTitle = movies.filter(item => {
  if (item.title.wordDuplicate().length !== 0) {
    return item;
  }
});

//mostly duplicated word in title
function maxDuplicatedWord(title) {
  title = title.wordDuplicate().sort();

  let cnt = 0;
  let max = 0;
  let current = title[0];

  for (const word of title) {
    if (word !== current) {
      if (cnt > max) {
        max = cnt;
      }
      cnt = 1;
      current = word;
    } else {
      cnt++;
    }
  }

  if (cnt > max) {
    return {
      word: current,
      value: cnt + 1
    };
  } else {
    return {
      word: current,
      value: max + 1
    };
  }
}

// find the max duplicated word
const maxDuplicatedTitle = movies.reduce(
  (mostDuplicate, item) => {
    mostDuplicate =
      maxDuplicatedWord(item.title).value > mostDuplicate.value
        ? maxDuplicatedWord(item.title)
        : mostDuplicate;
    return mostDuplicate;
  },
  {
    word: "",
    value: 0
  }
);

// console.log(maxDuplicatedTitle); => {word: "Mad", value: 4}

// Calculate the average rating of all the movies
const averageOfAllMovies =
  movies.reduce((sum, item) => {
    sum += item.rating;
    return sum;
  }, 0) / movies.length;

//   console.log(parseFloat(averageOfAllMovies).toFixed(2)); => 6.63

//Count the total number of Good, Average and Bad movies
const total = movies.reduce(
  (total, item) => {
    if (item.tag === tag.GOOD) {
      total.totalGood = total.totalGood + 1;
    } else if (item.tag === tag.AVERAGE) {
      total.totalAverage = total.totalAverage + 1;
    } else {
      total.totalBad = total.totalBad + 1;
    }
    return total;
  },
  {
    totalGood: 0,
    totalAverage: 0,
    totalBad: 0
  }
);
// console.log(total); => {totalGood: 2602, totalAverage: 3837, totalBad: 88}
