/*1. If-Else (Basic)
Q: Write a program that checks if a number is even or odd.

let num = prompt("enter Number check number are odd or even");
if(num % 2 === 0){
    console.log("number are even");
}else{
    console.log("number are odd");
}

*/



/*Create a program that compares two numbers and prints which one is larger.

let a = prompt("enter frist number")
let b = prompt("enter second number")
if (a>b) {
    console.log("a is greter");
}else{
    console.log("b is greter");
}
*/


// Create a traffic light system that suggests actions ("Go", "Slow down", "Stop") based on light color.

// let light = prompt("Enter Light Color")
// if(light === "green"){
//     console.log("Go");
// }
// if(light === "red"){
//     console.log("Stop");
// }
// if(light === "yellow"){
//     console.log("Slow down");
// }
    

/*Loop (For Loop)
Q: Print numbers from 1 to 10 using a for loop.*/

// let a = 1;
// for(a; a<=10; a++){
//     console.log(a);
// }


/*3. String (Length Check)
Q: Check if a string's length is greater than 5.*/

// let a = prompt("enter string");
// if (a.length >= 5){
//     console.log("length are more then 5");
// }else{
//     console.log("lenght are small then 5");
// }



// 4. Array Method (Push & Pop)
// Q: Add an element to an array and then remove the last element.


// a = ["hemant", "rahul", "jiya"]
// a.push("priya");
// a.pop("hemant")
// console.log(a);



// 5. Loop (While Loop)
// Q: Print numbers from 10 to 1 in reverse using a while loop.

// let a = 11;
// while(a>=1){
//     a--;
//     console.log(a);
// }


/*7. String (Uppercase Conversion)
Q: Convert a string to uppercase.*/

// let a = "hemant";
// let b= a.toUpperCase()
// console.log(b);


// 8. Array Method (Filter)
// Q: Filter out even numbers from an array.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNum = numbers.filter(number=> number% 2 === 0);
// console.log(evenNum);



// let year = 2023 ;

// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//     console.log("year are leap");
// }else{
//     console.log("year are not leap");
    
// }


// for(let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

// let sum = 0;

// for(let i = 1;i <= 20; i++){
//     if(i % 2 === 0) 
//         sum += i;
// }

// console.log(sum);

// for(let i = 1; i<= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


function reverseArray(str){
    return str.split("").reverse().join()
}