
const photo1 =  document.querySelector("#photo1");
const photo2 =  document.querySelector("#photo2");
const photo3 =  document.querySelector("#photo3");

const nameField = document.querySelector("#nameField");
const box = document.querySelector("#check__box");
const date = document.querySelector("#date_athour");
const btn = document.querySelector("#btn__check");

const start = document.querySelector("#start");
const title = document.querySelector(".page__title");

const page = document.querySelectorAll(".hidden__photo");

//console.log(page[1].classList.add("show"));

class DB {
    constructor(name, bookname, createdyear, keyPhoto,has) {
        this.name = name;
        this.bookname = bookname;
        this.createdyear = createdyear;
        this.keyPhoto = keyPhoto;
        this.has = false;
    }
}

//бд
const base = [
    new DB("Александр Пушкин", "Мой талисман", "1888-07-03",1),
    new DB("Агата Кристи", "Убийство в Восточном экспрессе", "1988-12-02", 2),
    new DB("Уильям Шекспир", "Гамлет", "1982-10-12", 3),
];

const check = () =>
{
    //active block 
    // alert

    for(let i=0;i<base.length;i++)
    {
        if(base[i].name == box.value && base[i].bookname == nameField.value && base[i].createdyear == date.value)
        {
            base[i].has=true;
        }
    }

    let count = 0;
    
    base.forEach(item=>{
       console.log(item.name, item.bookname,item.createdyear,item.has);
       if(item.has==true)
       {
        count+=1;
         alert("Такая книга существует!!");
            // temp[].classList.add("show");


            let trueindex;
         for(let i = 0;i<base.length;i++)
         {
            if(base[i].has==true)
            {
                trueindex = i;
                break;
            }
         }
         console.log(trueindex);
         page[trueindex].classList.add("show");
       }



       
   });
 
   //console.log(nameField.value, box.value,date.value);
   
    if(count == 0) alert("Нет такой кникиги или вы неправильно написали что-то!!!!!!!!!!");
    
};

//динамический заголовок
nameField.addEventListener("input",function(){
    title.innerHTML= nameField.value;
});

//дата в инпут
start.addEventListener("input",function(){
    date.value = start.value;
});

//событие на кнопке
btn.addEventListener("click",function(){
    if(date.value ==="" || nameField.value==="")
    {
        alert("Введите название книги или дату создания");
        date.value =""; 
        nameField.value="";
    }
    
    check();
});

