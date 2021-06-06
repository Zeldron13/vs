"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    geners: [],
    privat: false
};

let a, b;

for(let i = 0; i <= 1; i++){

    a = prompt("Один из последних фильмов?");
    b = prompt("Насколько вы его оцените?");

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;
    } else {
        alert("erroe");
        i--;
    }


/*     if(a == ""){
        alert("введите название!");
        i--; 
        continue;
    } else if (a.length > 50){
        alert("Название не должно быть длиннее 50 символов!");
        i--; 
        continue;
    } 
    
*/


}

if (personalMovieDb.count <= 10){
    alert("маловато фильмовкуыпук");
}else if (personalMovieDb.count > 10 && personalMovieDb.count < 30){
    alert("средняк ");
}else if (personalMovieDb.count >= 30){
    alert("Киноман ");
}



console.log(personalMovieDb);