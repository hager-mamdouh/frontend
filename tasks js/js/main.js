/*
quest 1 find max from an array

var arr=[];
for(var i=1 ; i<= 5 ; i++){
    var  x = Number(prompt("enter values")) ;
    arr.push(x);
    console.log(arr);
}
console.log(Math.max(...arr));

*/

/*
quest 2 convert hours to minutes and hours

var hours= Number(prompt("enter no. of hours")) ;
var minutes= hours*60;
var seconds = minutes *60 ;
console.log(`${hours} hours = ${minutes} minutes = ${seconds} seconds`);

*/

/*
quest 3 sum of multiple numbers

var arr=[];
function summation(num1 , num2 ,num3){
      
    var sum=num1 + num2 + num3;
      return sum
}
var num1 = Number(prompt("enter num1")) ,
    num2 = Number(prompt("enter num1")) ,
    num3 = Number(prompt("enter num1")) ;

let result = summation(num1 , num2 , num3);
console.log(result);

*/

/*
js quiz
*/

/*
quest1 
white_rabbit

quest2 
42

quest3 
foo bar foo bar 

quest 4
bar foo bar foo 

quest 6
true
true
false

quest 7
divisible by 10


*/

const arr1 =['a' , 'b' , 'c'];
const arr2 =['b', 'c','a']

console.log(
    arr1.sort()=== arr1,
    arr2.sort()==arr2,
    arr1.sort()===arr2.sort()
);