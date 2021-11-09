// Ваша задача реализовать класс Person. Вы должны заполнить метод Constructor, 
// чтобы принять имя как строку и возраст как число, реализовать метод getInfo получения информации, 
// который должен вернуть, например, “johns age 34”


class Person {

    constructor(name, age) { 
    this.name = name; 
    this.age = age;
    } 
        getInfo() {
            console.log(`${this.name} age ${this.age}`);     
            
    }
};
 let man = new Person ('Johns', 34);
 man.getInfo();



//  Создать класс Person со стандартными свойствами (имя, возраст) и действиями
//  (идти, разговаривать, есть) человека, от него наследовать классы Ребенок и взрослый со 
//  своими особенными и методами свойствами (н-р, у ребенка - плакать или ходить в школу)

class Person1 {

    constructor(name, age) { 
    this.name = name; 
    this.age = age;    
    }
    go(){}
    speak(){}
    eat(){}

} 

class Child extends Person1 {
        constructor(name, age ) {
            super(name, age);            
        }
        cry(){}
        goScholl(){}
    }
   
    
    class Adult extends Person1 {
        constructor(name, age) {
            super(name, age);        
        }
        work(){}
        driveCar(){}  
       }
                 
  

    // Создать дату 18 декабря 2019 года, 12 часов, 20 минут
    

    let d = new Date(2019, 11, 18, 12, 20);
    console.log(d);

    

    // Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

    let user = {
      name: "User photo",
      size: "200 x 200",
      
    };

    let  jsonUser = JSON.stringify(user);
    console.log(jsonUser);

    let newUser = JSON.parse(jsonUser) 
    console.log(newUser);


    
      




     // Создайте асинхронную функцию getUsers(names), которая получает на вход массив 
    // логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает 
    // массив объектов-пользователей.
    // Информация о пользователе GitHub с логином USERNAME доступна по ссылке: 
    // https://api.github.com/users/USERNAME.
    
    