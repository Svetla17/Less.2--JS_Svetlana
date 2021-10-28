
//lexical environment

//1

// GlobalLE {num : undefined, value : undefined }
let num = 10;
// GlobalLE {num : 10, value : undefined }
const value = getValue();
// valueLE { parent: GlobalLE , value : NaN}

function getValue(num) {
    return 5 + num;
}

const newValue = getValue(30);
// GlobalLE {num : 10, getValue : f }



//2

// GlobalLE {text: undefined, otherText : undefined, swapText: undefined}


let text = 'some text';

// GlobalLE {text: 'some text', otherText : undefined, swapText: undefined}

let otherText = 'other text';

// GlobalLE {text: 'some text', otherText : 'other text', swapText: undefined}

let swapText = (text) => {
    // swapText { parent:  GlobalLE, temp: undefined, unSwapText: undefined }
    let temp = otherText;
    // swapText { parent:  GlobalLE, temp: otherText, unSwapText: undefined }
    unSwapText();
    otherText = text;
    
    function unSwapText() {
        otherText = temp;
    }
    //unSwapText {parent: swapText}
};

swapText('param text');

//3
// GlobalLE {a : undefined, b : undefined }

let a = 5;
let b = 10;
// GlobalLE {a : 5, b : 10, sum: f }



function sum(a, b) {
    return a + b;
}
// sumLE { parent: GlobalLE, subtraction: undefined, sum: 15 }
const subtraction = (a, b) => {
    a = a + 4;
    // sumLE { parent: GlobalLE, subtraction: f, doSubtraction: f, a : 9, b : 10  }
    
    function doSubtraction(a) {
        return a - b;
    }

    return doSubtraction(a);
};

if (a > b) {
    sum(a, b);
} else {
    subtraction(a, b);
}

// DOM


//2
// Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
// *Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым.


let ol = document.createElement('ol');
document.body.prepend(ol);

let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan" ];


for (let i = 0; i < arr.length; i++) {
             
       let li = document.createElement('li');
       ol.append(li);
       li.innerText = arr[i]; 
      
       if ((i + 1) % 2 == 0) {
        li.classList.add("even");
        
       } else {
        li.classList.add("odd"); 

       
    };      
  
      
}

function func1() {
    let block1 = document.querySelectorAll(".even");
    
    for (let x = 0; x < block1.length; x++) {
        block1[x].style.backgroundColor = "green";
        
    }
    
}   
func1()   

function func2() {
    let block2 = document.querySelectorAll(".odd");
    
    for (let y = 0; y < block2.length; y++) {
        block2[y].style.backgroundColor = "blue";
        
    }
    
}   
func2()   

// 3
// Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left)
// Пример вызова функции:  showMessage(“Всем привет”, ‘yellow’, 100, 50);
// Примечание: Задать для .message позиционирование fixed, для корректного расчета положения сообщения
// * Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться. 
// ** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие же и top, и left). Если есть - занять позицию +25px left и top. Если и в этот раз у нас имеется сообщение в данной позиции - повторять процедуру, пока не найдем свободное место.


    function showMessage (text, color, top, left) {  
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add("message"); 
    div.style.position = 'fixed'; 
    div.innerText = text;
    div.style.color = color;    
    div.style.top = top ;
    div.style.left = left;
    console.log(div);
    
}
showMessage('Всем привет', 'yellow', '300px', '50px')
