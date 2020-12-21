/*
let num1 = parseFloat(prompt("Enter Number1")), // "1" => 1.0
    num2 = parseFloat(prompt("Enter Number2")), // "4" => 4.0
    sum  = num1 + num2;
//console.log("The Sum Value Is : " + sum);
console.log(`The Sum Value Is ${sum}`);

// single line comment

    Multi Line Comment
        10%
        1000 net salary = salary - (salary * tax)
        900
        let width = parseFloat(prompt("Enter Rectangle Width"));
let height = parseFloat(prompt("Enter Rectangle Height"));
let rectangleArea = width * height;
console.log(`The Rectangle Area Is ${rectangleArea}`);
*/


/* task 1
let tax = .1;
let salary = parseFloat(prompt("Enter Salary"));
let netSalary = salary - (salary * tax);
console.log(`The Net Salary Is : ${netSalary}`);

*/

 //ass 1

 let radius= parseFloat(prompt("Enter Radius")) ,
     area= Math.PI * Math.pow(radius ,2),
     circumference= 2* Math.PI *radius ;
 console.log (`The area = ${area}`);
 console.log (`The circumference= ${circumference}`);


// ass 2

let number = prompt("Enter a number: ");
if(number % 2 == 0) 
    console.log("The number is even.");
else 
    console.log("The number is odd.");


// ass 3

let num1 =parseFloat(prompt("Enter the first number"));
let num2 =parseFloat(prompt("Enter the second number"));
let sum = num1 + num2 ;

console.log (`
The interpreter executes the program directly, translating each line and run it 
So if we have an error it will run the lines and stop at the error line.
but The compiler translate all lines of the code then run it all 
So if we have an error all the code will not run.
for example , I wil run the sum one time without error and second time with error and third time without error `);
console.log(`the sum=${sum}`);
console.lo(`the sum=${sum}`);
console.log(`the sum=${sum}`);
