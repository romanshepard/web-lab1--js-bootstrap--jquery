const numberOfFilms = prompt("How many movies do you see?","0");

//console.log(numberOfFilms);

const personalMoviesDB = {
    count:  numberOfFilms,
    movies: {},
    geners: [],
   privat: false
};

const lastmovies = prompt("One of the last movies","Name of movie");
let ans1 = lastmovies;

const rate = prompt("Give points rate 0 to 10","0");
let ans2 = rate;

personalMoviesDB.movies[0]=ans1;
personalMoviesDB.movies[1]=ans2;

console.log(personalMoviesDB);

