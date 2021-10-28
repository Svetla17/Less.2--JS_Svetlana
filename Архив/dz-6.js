//2
let btn_1 = document.createElement('button');
document.body.prepend(btn_1);
btn_1.innerText = 'Удалить';

let btn_2 = document.createElement('button');
document.body.prepend(btn_2);
btn_2.innerText = 'Добавить';


let spText = document.createElement('span');    
btn_2.after(spText);


btn_2.addEventListener('click', function addText(){

    let arr = spText.innerText = 'Текст';
    
                         
})
