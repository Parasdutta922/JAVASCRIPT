// what is string : Strings are a way to use text in programming.

//Creating Strings

a = 'cool';
b = 'doom';
c = `carry`;

console.log(a, b, c);

//another way

console.log(`Dr. Doom ${c}`); // this way is easier to use variables in strings.

// Accessing the Strings

console.log(a[0]);
console.log(a.charAt(1));

/* Note:
1.) JS Strings are immutable meaning non changeable
2.) JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values. 
*/

let h = 'a';
let i = 'A';

console.log(h === i);

//JavaScript String Objects 


const d = 'hello';
const s = new String('hello');

console.log(d); // "hello"
console.log(s); // "hello"

console.log(typeof d); // "string"
console.log(typeof s); // "object"

// String Methods


const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"
