
// 1. Fibonacci Series:

function fibonacci (Number, Prev1, Prev2, temp) {
    
    if (Number == 0) {
        return Prev1;
    }

    temp = Prev1;
    Prev1 = Prev1 + Prev2;
    Prev2 = temp; 

    return fibonacci(Number - 1, Prev1, temp, Prev1);
}

console.log(fibonacci(10, 1, 1, 0));  

// 2. The sum of Array Elements:
function sumOfArray (array, length) {

    if (length === 1) 
        return array[0];

    array[0] += array[length - 1];

    return sumOfArray(array, length - 1)
}

let arr = [1,2,3,4,5];

let sum = sumOfArray(arr, arr.length);
console.log(sum);


// Reverse a String:
function reversString (str, str2, length) {

    if (length === 0) 
        return str2;

    str2 += str[length - 1];
    
    return reversString (str, str2, length - 1);
}

let str = "Hello";
let str2 = "";

console.log(reversString(str,str2, str.length)); 


// Print a Triangle:
function printTriangle(height) {

    let triangle = '';
    
    for (let i = 0; i <= height; i++) {

      for (let j = 0; j <= i; j++) {
        triangle += '*';
      }
      triangle += '\n';
    }
    console.log(triangle);
  }
  
printTriangle(5);



// Power of a Number:
function pow(number, power) {
    if (power === 1) {
        return number;
    }
    return number * pow(number, power-1);
}

console.log(pow(5,3));


// Flatten-Nested Arrays:
array = [[1,2,3], [4, 5, 6], [7, 8, 9]]

function flatten_Nested_Arrays (array) {

    let arr = [];
    array.forEach( (value) => value.forEach( number => arr.push(number)));

    return arr;
}

console.log(flatten_Nested_Arrays(array));


// Binary Search:
function binarySearch (array, number) {

    array.sort( (a, b) => a - b );

    let left = 0, right = array.length - 1;

    while (left < right) {
        
        if (left > right) 
            return false;
        
        let mid = left + Math.floor((right-left+1) / 2)

        if (number < array[mid])
            right = mid - 1;
        else 
            left = mid;
    }

    // return index the number in array after sorted
    return array[left] == number ? left : -1;
}

console.log(binarySearch([2, 3, 20, 7, 15], 20));

