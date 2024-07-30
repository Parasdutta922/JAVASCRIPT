// What is an Array: An array is an object that can store multiple values at once.

// Creating array

// 1.) using array literal
let a = ['Strings', 1212, 'cool']; // 

console.log(a);

// 2.) Using the new keyword
const array2 = new Array("eat", "sleep");

console.log(array2);

// Note: It is recommended to use array literal to create an array.

// Accessing array element 


const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"


// Adding element to an Array using push() & unshift()


let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

//add an element at the start
dailyActivities.unshift('work');

console.log(dailyActivities); // ['work', 'eat', 'sleep']


// Remove an Element from an Array

// You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value.

let dailyActivities2 = ['work', 'eat', 'sleep'];

// remove the last element
dailyActivities2.pop();
console.log(dailyActivities2); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep'] and returning
const removedElement = dailyActivities2.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities2);  // ['work', 'eat']

//you can use the shift() method. The shift() method removes the first element and also returns the removed element.


let dailyActivities3 = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities3.shift();

console.log(dailyActivities3); // ['eat', 'sleep']

