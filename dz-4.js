
//1
function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
min(2,5);
min(3,-1);
min(1,1);
console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));

//2
function pow(x,n){
    let result = x ** n
    return result;
}

console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));

//3

function isEven(n){
    if (n % 2 == 0){
    return true;
} else {
    return false;
}
}
console.log (isEven(4));
console.log (isEven(5));

//4

// function deleteChars(str) {

//     let a = "";
//     let result = a - a[1] - a[a.length - 1];
//     return result;
    
// }
// console.log(deleteChars("Hello"));

//5
function convertFloor(floor){
    if (floor == -1 ) {
        return floor;
    } else if (floor < 14 ) {
        return floor + 1;
    }
    else {
        return floor;
    }
} 
console.log (convertFloor(-1)); 
console.log(convertFloor(2)); 
console.log(convertFloor(2)); 
console.log(convertFloor(0)); 
console.log(convertFloor(12)); 
console.log(convertFloor(14)); 
  

