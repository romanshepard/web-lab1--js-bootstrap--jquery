const personalMoviesDB = {
    count:  0,
    movies: {},
    geners: [],
   privat: false
};

for(let i=0;i<1;i++)
{
    const numberOfFilms = prompt("How many movies do you see?","0");
    const lastmovies = prompt("One of the last movies","Name of movie");
    
    if( lastmovies === true &&(lastmovies.length != 0 || lastmovies.length<=50 ))
    {
        personalMoviesDB.movies[0]=lastmovies;
    }else 
    {
        alert("Введите правильно должно быть не ноль и не ботльше 50 символов")

        const numberOfFilms = prompt("How many movies do you see?","0");
        const lastmovies = prompt("One of the last movies","Name of movie");
        const rate = prompt("Give points rate 0 to 10","0");
    }
    
    
    personalMoviesDB.count=numberOfFilms;
    personalMoviesDB.movies[1]=rate;

   
}

if(personalMoviesDB.count<10) 
    alert("sefe")
else if (personalMoviesDB.count>=10 && personalMoviesDB.count<=30)
alert(1);


console.log(personalMoviesDB);

