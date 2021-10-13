// 1
let arr = ['Svetlana', 'Mark', 'Olga'].map(item => item.length);
console.log (arr);

// 2
let arr2 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];
arr2.forEach(item => {
    if (typeof item === 'string'){
        console.log(item + ' - string value');
    } else {
        console.log(item + ' - number value');
    }
});


 
// 3
let arr3 = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let arr4 = arr3.map(item => item + 10);
console.log (arr4);

// 4

    