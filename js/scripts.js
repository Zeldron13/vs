"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    geners: [],
    privat: false
};





const a = prompt("Один из последних фильмов?"),
      b = prompt("Насколько вы его оцените?"),
      c = prompt("Один из последних фильмов?"),
      d = prompt("Насколько вы его оцените?");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;



console.log(personalMovieDb);