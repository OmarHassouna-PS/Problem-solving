
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
        
        let mid = Math.floor((right+left+1) / 2);

        if (left > right) 
            return false;
        
        if (array[mid] > number)
            right = mid - 1;
        else 
            left = mid;
    }

    // return index the number in array after sorted
    return array[left] == number ? left : -1;
}

console.log(binarySearch([2, 3, 20, 7, 15], 2));


function binarySearch2 (arr, size, number) {

    let Low = 0;
    let High = size;
    
    while (Low <= High)
    {
        let Mid = Math.floor((Low + High) / 2);

        if (number == arr[Mid]) {
            return Mid;
        }
        else if (number > arr[Mid]) {
            Low = Mid + 1;
        }
        else {
            High = Mid - 1;
        }
    }  
    return false;  
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch2(arr2, 8, 1));


// Given a queue of integers, reverse the order of the elements in the queue.

let queue = [1, 2, 3, 4];

function reverseNumber (queue) {

    let stack = [];

    while (queue.length > 0) {

      let temp = queue.shift(); // copy the queue in the stack
      stack.push(temp);
    }

    while (stack.length > 0) {

        let temp = stack.pop(); // copy the stack in the queue
        queue.push(temp);
    }
}

reverseNumber(queue);
console.log(queue); // [4, 3, 2, 1]


// Implement a function that returns the minimum element in a stack in constant time complexity.

let stack2 = [];
let min = 0;

function minNumber (num) {

  if (stack2.length === 0)
    min = num;

  stack2.push(num);

  if (num < min)
    min = num;
}

minNumber(20);
minNumber(10);
minNumber(5);
minNumber(30);
                  // [20, 10, 5, 30]

console.log(min); // 5

// Implement a Queue using 2 stacks s1 and s2.

s1 = [];
s2 = [];

function dequeue() {

    if (s1.length === 0 && s2.length === 0)
        return undefined

    let temp = 0;

    if (s2.length === 0) {
        while (s1.length > 0) {
        let temp = s1.pop();
        s2.push(temp);
        }
    }

    temp = s2.pop();
    return temp;
}

function enqueue (item) {
  return s1.push(item);
}
  
enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);

console.log(dequeue()); // 1


//

// let s1 = [];

// function shift () {
  
//   let s2 = [];
//   let length = s1.length;
//   let num = 0; 

//   for (let index = 1; index < length; index++) {
      
//       s2.push(s1[index]);
//   }

//   num = s1[0];
//   s1 = s2;

//   return num;
// }

// function push (item) {
//     return s1.push(item);
// }
   
//   push(1);
//   push(2);
//   push(3);
//   push(4);

//           console.log(shift());

//   push(5);


// console.log(s1); // [2, 3, 4, 5]
