$(document).ready(function() {
    const page = $(".hidden__photo");

    class DB {
        constructor(name, bookname, createdyear, keyPhoto, has) {
            this.name = name;
            this.bookname = bookname;
            this.createdyear = createdyear;
            this.keyPhoto = keyPhoto;
            this.has = false;
        }
    }

    const base = [
        new DB("Александр Пушкин", "Мой талисман", "1888-07-03", 1),
        new DB("Агата Кристи", "Убийство в Восточном экспрессе", "1988-12-02", 2),
        new DB("Уильям Шекспир", "Гамлет", "1982-10-12", 3),
    ];

    const check = () => {
        $.each(base, function(index, item) {
            if (item.name === $("#check__box").val() && item.bookname === $("#nameField").val() && item.createdyear === $("#date_athour").val()) {
                item.has = true;
            }
           // console.log(index,base[index].has);
        });

        

        let count = 0;
 
        $.each(base, function(index, item) {
            //console.log(item.name, item.bookname, item.createdyear, item.has);
            if (item.has === true) {
                count += 1;
                alert("Такая книга существует!!");
                
                let trueindex;
                $.each(base,function(index,item){
                    if(item.has ==true)
                    {
                        trueindex=index;
                        //return false;
                    }
                    //console.log(1);
                    //page.eq(trueindex).addClass("show");
                    
                });
               // console.log(page.eq(trueindex));
                page.eq(index).addClass("show");

            }
        });
    

        if (count === 0) {
            alert("Нет такой книги или вы неправильно написали что-то!!!!!!!!!!");
        }
    };

    $("#nameField").on("input", function() {
        $(".page__title").text($("#nameField").val());
    });

    $("#start").on("input", function() {
        $("#date_athour").val($("#start").val());
    });

    $("#btn__check").on("click", function() {
        if ($("#date_athour").val() === "" || $("#nameField").val() === "") {
            alert("Введите название книги или дату создания");
            $("#date_athour").val("");
            $("#nameField").val("");
        }

        check();
    });
});