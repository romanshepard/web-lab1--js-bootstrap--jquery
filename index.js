/**
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
//console.log(personalMoviesDB);
 */

var array = ['a','e','i','o','u'];

function getCount(str) {
    
    let count=0;
    for(let i=0;i<array.length;i++)
    {
        if(str.indexOf(array[i])!=-1)
        {
            for(let j=0;j<str.length;j++){
                if(str[j]==array[i]) count++;
            }
        }
    }
    return count;

    
  }

  const str ="abracadabraii";
  console.log(getCount(str));

  console.log(Math.round(2.3));

  function getAverage(marks){

       let sum=0;
        for(let i=0;i<marks.length;i++)
        {   
            sum+=marks[i];
        }
        return Math.round(sum/marks.length);
  }

  var arr = [1,5,87,45,8,8];
  console.log(getAverage(arr));


  var sex = [1,24,5,6,7,66,4,2,4];
 let mx1=0,mx2=0;
  for(let i=0;i<sex.length;i++)
  {
        if(sex[i]>mx1)
        {
            mx2 = mx1;
            mx1 = sex[i];
        }
        
  }
  console.log(mx1,mx2);
