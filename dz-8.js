//2
// При скроле, в момент активного 2-го экрана покажите фиксированную кнопку 
// внизу страницы, которая до этого будет являться скрытой.


const button2 = document.getElementById('button2');

window.addEventListener('scroll', function () {
    
        if (window.scrollY = 500) {
            button2.style.visibility = "visible";
        } 
       
});
    //                     Объекты
    // 1
    // Создать объект car с набором свойств по желанию. 
    // Вывести в цикле все ключи и значения объекта.

    let car = {
        model: "Porshe",
        color: "black",
        number: "2200"

    }
    for (let key in car) {
        console.log(key, car[key]);
        
    };
    
    //  2
    // Создать объект user с свойствами name, email, phone, id. 
    // Скопировать этот объект со всеми свойствами в новую переменную newUser.

    let user = {
        name: 'Svetlana',
        email: '123@mail.ru',
        phone: 12365879,
        id: 'DF2365',
    }
    console.log(user);

    let newUser = Object.assign({}, user)
    console.log(newUser);

    // 3
    // Создать объект circle со свойствами: radius, color. 
    // Также создать в объекте метод   calculateCircumference(), 
    // при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).

    let circle = {
        radius: 5,
        color: "green",
        calculateCircumference (){
            console.log(2*Math.PI*this.radius);
        }
    };
    circle.calculateCircumference ();


    


